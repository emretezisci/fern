import { APIV1Read, FdrAPI } from "@fern-api/fdr-sdk";
import { isNonNullish, noop } from "@fern-api/core-utils";

function convertToV1TypeReference(typeShape: FdrAPI.api.latest.TypeReference): APIV1Read.TypeReference {
    switch (typeShape.type) {
        case "id":
            return {
                type: "id",
                value: typeShape.id,
                default: typeShape.default
            };
        case "primitive":
            return {
                type: "primitive",
                value: typeShape.value
            };
        case "optional":
            return {
                type: "optional",
                itemType:
                    typeShape.shape.type === "alias"
                        ? convertToV1TypeReference(typeShape.shape.value)
                        : { type: "unknown" },
                defaultValue: typeShape.default
            };
        case "list":
            return {
                type: "list",
                itemType:
                    typeShape.itemShape.type === "alias"
                        ? convertToV1TypeReference(typeShape.itemShape.value)
                        : { type: "unknown" }
            };
        case "set":
            return {
                type: "set",
                itemType:
                    typeShape.itemShape.type === "alias"
                        ? convertToV1TypeReference(typeShape.itemShape.value)
                        : { type: "unknown" }
            };
        case "map":
            return {
                type: "map",
                keyType:
                    typeShape.keyShape.type === "alias"
                        ? convertToV1TypeReference(typeShape.keyShape.value)
                        : { type: "unknown" },
                valueType:
                    typeShape.valueShape.type === "alias"
                        ? convertToV1TypeReference(typeShape.valueShape.value)
                        : { type: "unknown" }
            };
        case "literal":
            return {
                type: "literal",
                value: typeShape.value
            };
        case "unknown":
            return {
                type: "unknown"
            };
        default:
            return {
                type: "unknown"
            };
    }
}

function convertToV1TypeShape(typeShape: FdrAPI.api.latest.TypeShape): APIV1Read.TypeShape | undefined {
    switch (typeShape.type) {
        case "alias":
            return {
                type: "alias",
                value: convertToV1TypeReference(typeShape.value)
            };
        case "object":
            return {
                type: "object",
                properties: typeShape.properties.map((property) => ({
                    ...property,
                    type:
                        property.valueShape.type === "alias"
                            ? convertToV1TypeReference(property.valueShape.value)
                            : { type: "unknown" },
                    valueType:
                        property.valueShape.type === "alias"
                            ? convertToV1TypeReference(property.valueShape.value)
                            : { type: "unknown" },
                    description: JSON.stringify(property.description?.valueOf())
                })),
                extends: typeShape.extends,
                extraProperties:
                    typeShape.extraProperties != null ? convertToV1TypeReference(typeShape.extraProperties) : undefined
            };
        case "enum":
            return {
                type: "enum",
                default: typeShape.default,
                values: typeShape.values.map((value) => ({
                    availability: value.availability,
                    description: JSON.stringify(value.description?.valueOf()),
                    value: value.value
                }))
            };
        case "undiscriminatedUnion":
            return {
                type: "undiscriminatedUnion",
                variants: typeShape.variants
                    .map((variant) => {
                        const shape = convertToV1TypeShape(variant.shape);
                        if (shape == null) {
                            return undefined;
                        }
                        return {
                            ...variant,
                            description: JSON.stringify(variant.description?.valueOf()),
                            type: shape.type === "alias" ? shape.value : { type: "unknown" as const }
                        };
                    })
                    .filter(isNonNullish)
            };
        case "discriminatedUnion":
            return {
                type: "discriminatedUnion",
                variants: typeShape.variants
                    .map((value) => {
                        const additionalProperties =
                            value.extraProperties != null ? convertToV1TypeReference(value.extraProperties) : undefined;
                        if (additionalProperties == null) {
                            return undefined;
                        }
                        return {
                            ...value,
                            additionalProperties: {
                                type: "object",
                                properties: [],
                                extends: [],
                                extraProperties: additionalProperties
                            },
                            description: JSON.stringify(value.description?.valueOf())
                        };
                    })
                    .filter(isNonNullish),
                discriminant: typeShape.discriminant
            };
        default:
            noop();
            return undefined;
    }
}

function convertToV1HttpRequestBodyShape(
    typeShape: FdrAPI.api.latest.HttpRequestBodyShape | undefined
): APIV1Read.HttpRequestBodyShape | undefined {
    if (typeShape == null) {
        return undefined;
    }
    switch (typeShape.type) {
        case "object":
            return {
                ...typeShape,
                properties: typeShape.properties.map((property) => ({
                    ...property,
                    valueType:
                        property.valueShape.type === "alias"
                            ? convertToV1TypeReference(property.valueShape.value)
                            : { type: "unknown" as const },
                    description: JSON.stringify(property.description?.valueOf())
                })),
                extraProperties:
                    typeShape.extraProperties != null ? convertToV1TypeReference(typeShape.extraProperties) : undefined
            };
        case "alias":
            return {
                type: "reference",
                value: convertToV1TypeReference(typeShape.value)
            };
        case "bytes":
            return {
                ...typeShape
            };
        case "formData":
            return {
                ...typeShape,
                description: JSON.stringify(typeShape.description?.valueOf()),
                name: "formData",
                properties: typeShape.fields
                    .map((field) => {
                        switch (field.type) {
                            case "file":
                                return {
                                    ...field,
                                    type: "file" as const,
                                    value: {
                                        type: "file" as const,
                                        description: JSON.stringify(field.description?.valueOf()),
                                        availability: field.availability,
                                        key: field.key,
                                        isOptional: field.isOptional,
                                        contentType: field.contentType
                                    }
                                };
                            case "files":
                                return {
                                    ...field,
                                    type: "file" as const,
                                    value: {
                                        type: "fileArray" as const,
                                        description: JSON.stringify(field.description?.valueOf()),
                                        availability: field.availability,
                                        key: field.key,
                                        isOptional: field.isOptional,
                                        contentType: field.contentType
                                    }
                                };
                            case "property":
                                return {
                                    ...field,
                                    type: "bodyProperty" as const,
                                    description: JSON.stringify(field.description?.valueOf()),
                                    availability: field.availability,
                                    key: field.key,
                                    valueType:
                                        field.valueShape.type === "alias"
                                            ? convertToV1TypeReference(field.valueShape.value)
                                            : { type: "unknown" as const },
                                    contentType: field.contentType
                                };
                            default:
                                return undefined;
                        }
                    })
                    .filter(isNonNullish)
            };
        default:
            noop();
            return undefined;
    }
}

function convertToV1HttpResponseBodyShape(
    typeShape: FdrAPI.api.latest.HttpResponseBodyShape | undefined
): APIV1Read.HttpResponseBodyShape | undefined {
    if (typeShape == null) {
        return undefined;
    }
    switch (typeShape.type) {
        case "object":
            return {
                ...typeShape,
                extends: typeShape.extends,
                properties: typeShape.properties.map((property) => ({
                    ...property,
                    valueType:
                        property.valueShape.type === "alias"
                            ? convertToV1TypeReference(property.valueShape.value)
                            : { type: "unknown" as const },
                    description: JSON.stringify(property.description?.valueOf())
                })),
                extraProperties:
                    typeShape.extraProperties != null ? convertToV1TypeReference(typeShape.extraProperties) : undefined
            };
        case "alias":
            return {
                type: "reference",
                value: convertToV1TypeReference(typeShape.value)
            };
        case "fileDownload":
            return {
                type: "fileDownload",
                contentType: typeShape.contentType
            };
        case "streamingText":
            return {
                type: "streamingText"
            };
        case "stream": {
            const shape = convertToV1TypeShape(typeShape.shape);
            if (shape == null || shape.type !== "object") {
                return undefined;
            }
            return {
                type: "stream",
                terminator: typeShape.terminator,
                shape:
                    typeShape.shape.type === "alias"
                        ? {
                              type: "reference",
                              value: convertToV1TypeReference(typeShape.shape.value)
                          }
                        : shape
            };
        }
        default:
            noop();
            return undefined;
    }
}

function convertToV1ErrorDeclaration(error: FdrAPI.api.latest.ErrorResponse): APIV1Read.ErrorDeclaration {
    return {
        type:
            error.shape?.type === "alias" ? convertToV1TypeReference(error.shape.value) : { type: "unknown" as const },
        statusCode: error.statusCode,
        description: JSON.stringify(error.description?.valueOf()),
        availability: error.availability
    };
}

function convertToV1ErrorDeclarationV2(
    error: FdrAPI.api.latest.ErrorResponse
): APIV1Read.ErrorDeclarationV2 | undefined {
    if (error.shape == null) {
        return undefined;
    }
    return {
        ...error,
        type: convertToV1TypeShape(error.shape),
        name: error.name,
        examples: error.examples?.map((example) => ({
            ...example,
            description: JSON.stringify(example.description?.valueOf())
        })),
        description: JSON.stringify(error.description?.valueOf())
    };
}

function convertToV1WebhookPayloadShape(shape: FdrAPI.api.latest.TypeShape): APIV1Read.WebhookPayloadShape | undefined {
    switch (shape.type) {
        case "object":
            return {
                type: "object",
                properties: shape.properties.map((property) => ({
                    ...property,
                    valueType:
                        property.valueShape.type === "alias"
                            ? convertToV1TypeReference(property.valueShape.value)
                            : { type: "unknown" as const },
                    description: JSON.stringify(property.description?.valueOf())
                })),
                extends: shape.extends,
                extraProperties:
                    shape.extraProperties != null ? convertToV1TypeReference(shape.extraProperties) : undefined
            };
        case "alias":
            return {
                type: "reference",
                value: convertToV1TypeReference(shape.value)
            };
        default:
            noop();
            return undefined;
    }
}

export function convertToV1ApiDefinition(apiDefinition: FdrAPI.api.latest.ApiDefinition): APIV1Read.ApiDefinition {
    const subPackages: APIV1Read.SubpackageId[] = [];

    Object.entries(apiDefinition.endpoints).forEach(([endpointId, endpoint]) => {
        const packageId = endpoint.namespace;
        if (packageId != null) {
            subPackages.push(...packageId);
        }
    });

    return {
        id: apiDefinition.id,
        hasMultipleBaseUrls: undefined,
        auth: Object.values(apiDefinition.auths)[0],
        navigation: undefined,
        globalHeaders: undefined,
        rootPackage: {
            pointsTo: undefined,
            endpoints: Object.values(apiDefinition.endpoints)
                .map((endpoint) => {
                    const requestBody = convertToV1HttpRequestBodyShape(endpoint.request?.body);
                    const responseBody = convertToV1HttpResponseBodyShape(endpoint.response?.body);
                    if (requestBody == null || responseBody == null) {
                        return undefined;
                    }
                    return {
                        ...endpoint,
                        name: endpoint.id,
                        description: JSON.stringify(endpoint.description?.valueOf()),
                        authed: false,
                        environments: endpoint.environments ?? [],
                        originalEndpointId: endpoint.id,
                        migratedFromUrlSlugs: [],
                        urlSlug: endpoint.id,
                        path: {
                            parts: endpoint.path,
                            pathParameters:
                                endpoint.pathParameters?.map((pathParameter) => ({
                                    ...pathParameter,
                                    type:
                                        pathParameter.valueShape.type === "alias"
                                            ? convertToV1TypeReference(pathParameter.valueShape.value)
                                            : { type: "unknown" as const },
                                    description: JSON.stringify(pathParameter.description?.valueOf())
                                })) ?? []
                        },
                        queryParameters:
                            endpoint.queryParameters?.map((queryParameter) => ({
                                ...queryParameter,
                                type:
                                    queryParameter.valueShape.type === "alias"
                                        ? convertToV1TypeReference(queryParameter.valueShape.value)
                                        : { type: "unknown" as const },
                                description: JSON.stringify(queryParameter.description?.valueOf())
                            })) ?? [],
                        headers:
                            endpoint.requestHeaders?.map((header) => ({
                                ...header,
                                type:
                                    header.valueShape.type === "alias"
                                        ? convertToV1TypeReference(header.valueShape.value)
                                        : { type: "unknown" as const },
                                description: JSON.stringify(header.description?.valueOf())
                            })) ?? [],
                        request: {
                            ...endpoint.request,
                            type: requestBody,
                            contentType: endpoint.request?.contentType ?? "",
                            description: JSON.stringify(endpoint.request?.description?.valueOf())
                        },
                        response:
                            endpoint.response != null
                                ? {
                                      ...endpoint.response,
                                      type: responseBody,
                                      description: JSON.stringify(endpoint.response?.description?.valueOf())
                                  }
                                : undefined,
                        errors: endpoint.errors?.map(convertToV1ErrorDeclaration).filter(isNonNullish) ?? [],
                        errorsV2: endpoint.errors?.map(convertToV1ErrorDeclarationV2).filter(isNonNullish) ?? [],
                        snippetTemplates: endpoint.snippetTemplates,
                        // TODO: add examples
                        examples: []
                    };
                })
                .filter(isNonNullish),
            websockets: [],
            webhooks: Object.values(apiDefinition.webhooks)
                .map((webhook) => {
                    const payloadShape =
                        webhook.payload != null ? convertToV1WebhookPayloadShape(webhook.payload.shape) : undefined;
                    if (webhook.payload == null || payloadShape == null) {
                        return undefined;
                    }
                    return {
                        ...webhook,
                        name: webhook.id,
                        description: JSON.stringify(webhook.description?.valueOf()),
                        urlSlug: webhook.id,
                        migratedFromUrlSlugs: [],
                        headers: (webhook.headers ?? []).map((header) => ({
                            ...header,
                            type:
                                header.valueShape.type === "alias"
                                    ? convertToV1TypeReference(header.valueShape.value)
                                    : { type: "unknown" as const },
                            description: JSON.stringify(header.description?.valueOf())
                        })),
                        payload: {
                            ...webhook.payload,
                            type: payloadShape,
                            description: JSON.stringify(webhook.payload.description?.valueOf())
                        },
                        // TODO: add examples
                        examples: []
                    };
                })
                .filter(isNonNullish),
            types: Object.keys(apiDefinition.types).map((typeId) => FdrAPI.TypeId(typeId)),
            subpackages: subPackages
        },
        types: Object.fromEntries(
            Object.entries(apiDefinition.types)
                .map(([typeId, type]) => {
                    const shape = convertToV1TypeShape(type.shape);
                    if (shape == null) {
                        return undefined;
                    }
                    return [
                        typeId,
                        {
                            ...type,
                            shape
                        }
                    ];
                })
                .filter(isNonNullish)
        ),
        subpackages: {}
    };
}
