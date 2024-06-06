import { isPlainObject } from "@fern-api/core-utils";
import { EXAMPLE_REFERENCE_PREFIX } from "@fern-api/yaml-schema";
import { FernFileContext } from "../FernFileContext";
import { TypeResolver } from "./TypeResolver";

export interface ExampleResolver {
    resolveAllReferencesInExample: (args: {
        example: unknown;
        file: FernFileContext;
    }) => Promise<{ resolvedExample: unknown } | undefined>;
    resolveAllReferencesInExampleOrThrow: (args: { example: unknown; file: FernFileContext }) => Promise<{
        resolvedExample: unknown;
    }>;
    resolveExample: (args: {
        example: unknown;
        file: FernFileContext;
    }) => Promise<{ resolvedExample: unknown; file: FernFileContext } | undefined>;
    resolveExampleOrThrow: (args: { example: unknown; file: FernFileContext }) => Promise<{
        resolvedExample: unknown;
        file: FernFileContext;
    }>;
    parseExampleReference: (exampleReference: string) => { rawTypeReference: string; exampleName: string } | undefined;
}

export class ExampleResolverImpl implements ExampleResolver {
    constructor(private readonly typeResolver: TypeResolver) {}

    public async resolveAllReferencesInExample({
        example,
        file
    }: {
        example: unknown;
        file: FernFileContext;
    }): Promise<{ resolvedExample: unknown } | undefined> {
        if (typeof example === "string") {
            const resolvedExample = await this.resolveExample({
                example,
                file
            });
            if (resolvedExample == null || typeof resolvedExample.resolvedExample === "string") {
                return resolvedExample;
            }
            return await this.resolveAllReferencesInExample({
                example: resolvedExample.resolvedExample,
                file: resolvedExample.file
            });
        } else if (isPlainObject(example)) {
            const newExample: typeof example = {};
            for (const [exampleKey, exampleValue] of Object.entries(example)) {
                const resolvedExampleValue = await this.resolveAllReferencesInExample({ example: exampleValue, file });
                if (resolvedExampleValue == null) {
                    return undefined;
                }
                newExample[exampleKey] = resolvedExampleValue.resolvedExample;
            }
            return { resolvedExample: newExample };
        } else if (Array.isArray(example)) {
            const newExample = [];
            for (const exampleItem of example) {
                const resolvedExampleItem = await this.resolveAllReferencesInExample({ example: exampleItem, file });
                if (resolvedExampleItem == null) {
                    return undefined;
                }
                newExample.push(resolvedExampleItem.resolvedExample);
            }
            return { resolvedExample: newExample };
        }

        return { resolvedExample: example };
    }

    public async resolveAllReferencesInExampleOrThrow({
        example,
        file
    }: {
        example: unknown;
        file: FernFileContext;
    }): Promise<{
        resolvedExample: unknown;
    }> {
        const resolvedExample = await this.resolveAllReferencesInExample({ example, file });
        if (resolvedExample == null) {
            throw new Error("Failed to resolve examples");
        }
        return resolvedExample;
    }

    public async resolveExample({
        example,
        file
    }: {
        example: unknown;
        file: FernFileContext;
    }): Promise<{ resolvedExample: unknown; file: FernFileContext } | undefined> {
        if (typeof example !== "string") {
            return {
                resolvedExample: example,
                file
            };
        }

        if (example.startsWith(`\\${EXAMPLE_REFERENCE_PREFIX}`)) {
            return {
                // remove backslash
                resolvedExample: example.slice(1),
                file
            };
        }

        if (!example.startsWith(EXAMPLE_REFERENCE_PREFIX)) {
            return {
                resolvedExample: example,
                file
            };
        }

        const parsedExampleReference = this.parseExampleReference(example);
        if (parsedExampleReference == null) {
            return undefined;
        }

        const typeDeclaration = await this.typeResolver.getDeclarationOfNamedType({
            referenceToNamedType: parsedExampleReference.rawTypeReference,
            file
        });
        if (
            typeDeclaration == null ||
            typeof typeDeclaration.declaration === "string" ||
            typeDeclaration.declaration.examples == null
        ) {
            return undefined;
        }

        const resolvedExample = typeDeclaration.declaration.examples.find(
            (otherExample) => otherExample.name === parsedExampleReference.exampleName
        );
        if (resolvedExample == null) {
            return undefined;
        }
        return await this.resolveExample({ example: resolvedExample.value, file: typeDeclaration.file });
    }

    public async resolveExampleOrThrow({ example, file }: { example: unknown; file: FernFileContext }): Promise<{
        resolvedExample: unknown;
        file: FernFileContext;
    }> {
        const resolvedExample = await this.resolveExample({ example, file });
        if (resolvedExample == null) {
            throw new Error("Cannot resolve example: " + example);
        }
        return resolvedExample;
    }

    public parseExampleReference(
        exampleReference: string
    ): { rawTypeReference: string; exampleName: string } | undefined {
        const [first, second, third, ...rest] = exampleReference.split(".");

        if (first == null || second == null || rest.length > 0) {
            return undefined;
        }

        // if third is null, then the reference is to a $Type.Example in the
        // same file
        if (third == null) {
            return {
                rawTypeReference: first.slice(EXAMPLE_REFERENCE_PREFIX.length),
                exampleName: second
            };
        }

        // otherwise, the reference is $imported.Type.Example
        return {
            rawTypeReference: `${first}.${second}`.slice(EXAMPLE_REFERENCE_PREFIX.length),
            exampleName: third
        };
    }
}
