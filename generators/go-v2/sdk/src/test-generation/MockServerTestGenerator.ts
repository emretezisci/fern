import { ExampleEndpointCall, IntermediateRepresentation, dynamic } from "@fern-api/ir-sdk";
import { FernGeneratorExec } from "@fern-api/generator-commons";
import { DynamicSnippetsGenerator } from "@fern-api/go-dynamic-snippets";

export declare namespace MockServerTestGenerator {
    interface Args {
        ir: IntermediateRepresentation;
        config: FernGeneratorExec.GeneratorConfig;
    }

    interface Request {
        // The endpoint to generate a mock server test for (e.g. 'POST /users').
        endpoint: dynamic.EndpointLocation;

        // The example to use to generate the mock server test. This is used to generate
        // the httptest assertions, as well as generate the snippet via the
        // DynamicSnippetGenerator.
        example: ExampleEndpointCall;
    }

    interface Response {
        // The generated mock server test.
        snippet: string;
    }
}

export class MockServerTestGenerator {
    private ir: IntermediateRepresentation;
    private config: FernGeneratorExec.GeneratorConfig;
    private dynamicSnippetsGenerator: DynamicSnippetsGenerator | undefined;

    constructor({
        ir,
        dynamic,
        config
    }: {
        ir: IntermediateRepresentation;
        dynamic: dynamic.DynamicIntermediateRepresentation;
        config: FernGeneratorExec.GeneratorConfig;
    }) {
        this.ir = ir;
        this.config = config;
        this.dynamicSnippetsGenerator = new DynamicSnippetsGenerator({ ir: dynamic, config });
    }

    public generate(request: MockServerTestGenerator.Request): MockServerTestGenerator.Response {
        // TODO: Generate the mock server tests.
        //
        // We'll need to do the following:
        //
        //  1. Map the ExampleEndpointCall into the request shape that the DynamicSnippetGenerator.buildCodeBlock method expects.
        //  2. Call DynamicSnippetGenerator.buildCodeBlock with the mapped request.
        //  3. Write the surrounding Go file contents using the go.AstNode returned from DynamicSnippetGenerator.buildCodeBlock.
        //
        // For example,
        //
        // ```go
        // func TestUserService(t *testing.T) {
        //     <set up mock server>
        //
        //     response, err := client.UserService.GetUser(context.Background(), <request>)
        //     require.NoError(t, err)
        //
        //     assert.Equal(t, expectedResponse, actualResponse)
        // }
        // ```
        //
        // Notes:
        //  * You will be interfacing with the @fern-api/go-ast package to build the Go file.
        //
        //    Check out https://github.com/fern-api/fern/blob/3314baa6622c6e8aec46a9617cef51ad18876811/generators/go-v2/ast/src/ast/__test__/Snippets.test.ts#L270
        //    which shows an example of how to construct a GoFile, write individual nodes, and convert the file to a string.
        //
        //  * The DynamicSnippetGenerator includes a variety of examples of how to use it.
        //
        //    Check out https://github.com/fern-api/fern/blob/3314baa6622c6e8aec46a9617cef51ad18876811/generators/go-v2/dynamic-snippets/src/DynamicSnippetsGenerator.ts#L213
        //    which shows how we generate the `option.WithToken("<token>")` portion of the snippet.
        return {
            snippet: ""
        };
    }
}
