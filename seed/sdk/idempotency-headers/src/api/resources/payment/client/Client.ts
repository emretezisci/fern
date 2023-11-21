/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as SeedIdempotencyHeaders from "../../..";
import * as serializers from "../../../../serialization";
import urlJoin from "url-join";
import * as errors from "../../../../errors";

export declare namespace Payment {
    interface Options {
        environment: core.Supplier<string>;
        token: core.Supplier<core.BearerToken>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }

    interface IdempotentRequestOptions extends RequestOptions {
        idempotencyKey: core.Supplier<string>;
        idempotencyExpiration: core.Supplier<number>;
    }
}

export class Payment {
    constructor(protected readonly _options: Payment.Options) {}

    public async create(
        request: SeedIdempotencyHeaders.CreatePaymentRequest,
        requestOptions?: Payment.IdempotentRequestOptions
    ): Promise<string> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), "/payment"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.0.1",
                "Idempotency-Key": requestOptions?.idempotencyKey,
                "Idempotency-Expiration": requestOptions?.idempotencyExpiration.toString(),
            },
            contentType: "application/json",
            body: await serializers.CreatePaymentRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.payment.create.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedIdempotencyHeadersError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedIdempotencyHeadersError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedIdempotencyHeadersTimeoutError();
            case "unknown":
                throw new errors.SeedIdempotencyHeadersError({
                    message: _response.error.errorMessage,
                });
        }
    }

    public async delete(paymentId: string, requestOptions?: Payment.RequestOptions): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(await core.Supplier.get(this._options.environment), `/payment/${paymentId}`),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.0.1",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedIdempotencyHeadersError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedIdempotencyHeadersError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedIdempotencyHeadersTimeoutError();
            case "unknown":
                throw new errors.SeedIdempotencyHeadersError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader() {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}
