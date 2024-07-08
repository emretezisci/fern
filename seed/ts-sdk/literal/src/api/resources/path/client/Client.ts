/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as SeedLiteral from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace Path {
    interface Options {
        environment: core.Supplier<string>;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the X-API-Version header */
        version?: "02-02-2024";
        /** Override the X-API-Enable-Audit-Logging header */
        auditLogging?: true;
    }
}

export class Path {
    constructor(protected readonly _options: Path.Options) {}

    /**
     * @param {"123"} id
     * @param {Path.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.path.send("123")
     */
    public async send(id: "123", requestOptions?: Path.RequestOptions): Promise<SeedLiteral.SendResponse> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), `path/${encodeURIComponent(id)}`),
            method: "POST",
            headers: {
                "X-API-Version": requestOptions?.version ?? "02-02-2024",
                "X-API-Enable-Audit-Logging":
                    requestOptions?.auditLogging != null ? requestOptions.auditLogging.toString() : "true",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/literal",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return await serializers.SendResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedLiteralError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedLiteralError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedLiteralTimeoutError();
            case "unknown":
                throw new errors.SeedLiteralError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
