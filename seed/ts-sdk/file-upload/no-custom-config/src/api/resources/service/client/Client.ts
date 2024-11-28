/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as fs from "fs";
import { Blob } from "buffer";
import * as SeedFileUpload from "../../../index";
import * as errors from "../../../../errors/index";
import urlJoin from "url-join";

export declare namespace Service {
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
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class Service {
    constructor(protected readonly _options: Service.Options) {}

    /**
     * @param {File | fs.ReadStream | Blob} file
     * @param {File[] | fs.ReadStream[] | Blob[]} fileList
     * @param {File | fs.ReadStream | Blob | undefined} maybeFile
     * @param {File[] | fs.ReadStream[] | Blob[] | undefined} maybeFileList
     * @param {SeedFileUpload.MyRequest} request
     * @param {Service.RequestOptions} requestOptions - Request-specific configuration.
     */
    public post(
        file: File | fs.ReadStream | Blob,
        fileList: File[] | fs.ReadStream[] | Blob[],
        maybeFile: File | fs.ReadStream | Blob | undefined,
        maybeFileList: File[] | fs.ReadStream[] | Blob[] | undefined,
        request: SeedFileUpload.MyRequest,
        requestOptions?: Service.RequestOptions
    ): core.APIPromise<void> {
        return core.APIPromise.from(
            (async () => {
                const _request = await core.newFormData();
                if (request.maybeString != null) {
                    await _request.append("maybeString", request.maybeString);
                }
                await _request.append("integer", request.integer.toString());
                await _request.appendFile("file", file);
                for (const _file of fileList) {
                    await _request.appendFile("fileList", _file);
                }
                if (maybeFile != null) {
                    await _request.appendFile("maybeFile", maybeFile);
                }
                if (maybeFileList != null) {
                    for (const _file of maybeFileList) {
                        await _request.appendFile("maybeFileList", _file);
                    }
                }
                if (request.maybeInteger != null) {
                    await _request.append("maybeInteger", request.maybeInteger.toString());
                }
                if (request.optionalListOfStrings != null) {
                    for (const _item of request.optionalListOfStrings) {
                        await _request.append("optionalListOfStrings", _item);
                    }
                }
                for (const _item of request.listOfObjects) {
                    await _request.append("listOfObjects", JSON.stringify(_item));
                }
                if (request.optionalMetadata != null) {
                    if (Array.isArray(request.optionalMetadata) || request.optionalMetadata instanceof Set)
                        for (const _item of request.optionalMetadata) {
                            await _request.append(
                                "optionalMetadata",
                                typeof _item === "string" ? _item : JSON.stringify(_item)
                            );
                        }
                }
                if (request.optionalObjectType != null) {
                    await _request.append("optionalObjectType", request.optionalObjectType);
                }
                if (request.optionalId != null) {
                    await _request.append("optionalId", request.optionalId);
                }
                const _maybeEncodedRequest = await _request.getRequest();
                const _response = await core.fetcher({
                    url: await core.Supplier.get(this._options.environment),
                    method: "POST",
                    headers: {
                        "X-Fern-Language": "JavaScript",
                        "X-Fern-SDK-Name": "@fern/file-upload",
                        "X-Fern-SDK-Version": "0.0.1",
                        "User-Agent": "@fern/file-upload/0.0.1",
                        "X-Fern-Runtime": core.RUNTIME.type,
                        "X-Fern-Runtime-Version": core.RUNTIME.version,
                        ..._maybeEncodedRequest.headers,
                        ...requestOptions?.headers,
                    },
                    requestType: "file",
                    duplex: _maybeEncodedRequest.duplex,
                    body: _maybeEncodedRequest.body,
                    timeoutMs:
                        requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                    maxRetries: requestOptions?.maxRetries,
                    abortSignal: requestOptions?.abortSignal,
                });
                if (_response.ok) {
                    return {
                        ok: _response.ok,
                        body: undefined,
                        headers: _response.headers,
                    };
                }
                if (_response.error.reason === "status-code") {
                    throw new errors.SeedFileUploadError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
                }
                switch (_response.error.reason) {
                    case "non-json":
                        throw new errors.SeedFileUploadError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.rawBody,
                        });
                    case "timeout":
                        throw new errors.SeedFileUploadTimeoutError("Timeout exceeded when calling POST /.");
                    case "unknown":
                        throw new errors.SeedFileUploadError({
                            message: _response.error.errorMessage,
                        });
                }
            })()
        );
    }

    /**
     * @param {File | fs.ReadStream | Blob} file
     * @param {Service.RequestOptions} requestOptions - Request-specific configuration.
     */
    public justFile(file: File | fs.ReadStream | Blob, requestOptions?: Service.RequestOptions): core.APIPromise<void> {
        return core.APIPromise.from(
            (async () => {
                const _request = await core.newFormData();
                await _request.appendFile("file", file);
                const _maybeEncodedRequest = await _request.getRequest();
                const _response = await core.fetcher({
                    url: urlJoin(await core.Supplier.get(this._options.environment), "/just-file"),
                    method: "POST",
                    headers: {
                        "X-Fern-Language": "JavaScript",
                        "X-Fern-SDK-Name": "@fern/file-upload",
                        "X-Fern-SDK-Version": "0.0.1",
                        "User-Agent": "@fern/file-upload/0.0.1",
                        "X-Fern-Runtime": core.RUNTIME.type,
                        "X-Fern-Runtime-Version": core.RUNTIME.version,
                        ..._maybeEncodedRequest.headers,
                        ...requestOptions?.headers,
                    },
                    requestType: "file",
                    duplex: _maybeEncodedRequest.duplex,
                    body: _maybeEncodedRequest.body,
                    timeoutMs:
                        requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                    maxRetries: requestOptions?.maxRetries,
                    abortSignal: requestOptions?.abortSignal,
                });
                if (_response.ok) {
                    return {
                        ok: _response.ok,
                        body: undefined,
                        headers: _response.headers,
                    };
                }
                if (_response.error.reason === "status-code") {
                    throw new errors.SeedFileUploadError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
                }
                switch (_response.error.reason) {
                    case "non-json":
                        throw new errors.SeedFileUploadError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.rawBody,
                        });
                    case "timeout":
                        throw new errors.SeedFileUploadTimeoutError("Timeout exceeded when calling POST /just-file.");
                    case "unknown":
                        throw new errors.SeedFileUploadError({
                            message: _response.error.errorMessage,
                        });
                }
            })()
        );
    }

    /**
     * @param {File | fs.ReadStream | Blob} file
     * @param {SeedFileUpload.JustFileWithQueryParamsRequet} request
     * @param {Service.RequestOptions} requestOptions - Request-specific configuration.
     */
    public justFileWithQueryParams(
        file: File | fs.ReadStream | Blob,
        request: SeedFileUpload.JustFileWithQueryParamsRequet,
        requestOptions?: Service.RequestOptions
    ): core.APIPromise<void> {
        return core.APIPromise.from(
            (async () => {
                const _queryParams: Record<string, string | string[] | object | object[]> = {};
                if (request.maybeString != null) {
                    _queryParams["maybeString"] = request.maybeString;
                }
                _queryParams["integer"] = request.integer.toString();
                if (request.maybeInteger != null) {
                    _queryParams["maybeInteger"] = request.maybeInteger.toString();
                }
                if (Array.isArray(request.listOfStrings)) {
                    _queryParams["listOfStrings"] = request.listOfStrings.map((item) => item);
                } else {
                    _queryParams["listOfStrings"] = request.listOfStrings;
                }
                if (request.optionalListOfStrings != null) {
                    if (Array.isArray(request.optionalListOfStrings)) {
                        _queryParams["optionalListOfStrings"] = request.optionalListOfStrings.map((item) => item);
                    } else {
                        _queryParams["optionalListOfStrings"] = request.optionalListOfStrings;
                    }
                }
                const _request = await core.newFormData();
                await _request.appendFile("file", file);
                const _maybeEncodedRequest = await _request.getRequest();
                const _response = await core.fetcher({
                    url: urlJoin(await core.Supplier.get(this._options.environment), "/just-file-with-query-params"),
                    method: "POST",
                    headers: {
                        "X-Fern-Language": "JavaScript",
                        "X-Fern-SDK-Name": "@fern/file-upload",
                        "X-Fern-SDK-Version": "0.0.1",
                        "User-Agent": "@fern/file-upload/0.0.1",
                        "X-Fern-Runtime": core.RUNTIME.type,
                        "X-Fern-Runtime-Version": core.RUNTIME.version,
                        ..._maybeEncodedRequest.headers,
                        ...requestOptions?.headers,
                    },
                    queryParameters: _queryParams,
                    requestType: "file",
                    duplex: _maybeEncodedRequest.duplex,
                    body: _maybeEncodedRequest.body,
                    timeoutMs:
                        requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                    maxRetries: requestOptions?.maxRetries,
                    abortSignal: requestOptions?.abortSignal,
                });
                if (_response.ok) {
                    return {
                        ok: _response.ok,
                        body: undefined,
                        headers: _response.headers,
                    };
                }
                if (_response.error.reason === "status-code") {
                    throw new errors.SeedFileUploadError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
                }
                switch (_response.error.reason) {
                    case "non-json":
                        throw new errors.SeedFileUploadError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.rawBody,
                        });
                    case "timeout":
                        throw new errors.SeedFileUploadTimeoutError(
                            "Timeout exceeded when calling POST /just-file-with-query-params."
                        );
                    case "unknown":
                        throw new errors.SeedFileUploadError({
                            message: _response.error.errorMessage,
                        });
                }
            })()
        );
    }

    /**
     * @param {File | fs.ReadStream | Blob} file
     * @param {SeedFileUpload.WithContentTypeRequest} request
     * @param {Service.RequestOptions} requestOptions - Request-specific configuration.
     */
    public withContentType(
        file: File | fs.ReadStream | Blob,
        request: SeedFileUpload.WithContentTypeRequest,
        requestOptions?: Service.RequestOptions
    ): core.APIPromise<void> {
        return core.APIPromise.from(
            (async () => {
                const _request = await core.newFormData();
                await _request.appendFile("file", file);
                await _request.append("foo", request.foo);
                await _request.append("bar", JSON.stringify(request.bar));
                if (request.foobar != null) {
                    await _request.append("foobar", JSON.stringify(request.foobar));
                }
                const _maybeEncodedRequest = await _request.getRequest();
                const _response = await core.fetcher({
                    url: urlJoin(await core.Supplier.get(this._options.environment), "/with-content-type"),
                    method: "POST",
                    headers: {
                        "X-Fern-Language": "JavaScript",
                        "X-Fern-SDK-Name": "@fern/file-upload",
                        "X-Fern-SDK-Version": "0.0.1",
                        "User-Agent": "@fern/file-upload/0.0.1",
                        "X-Fern-Runtime": core.RUNTIME.type,
                        "X-Fern-Runtime-Version": core.RUNTIME.version,
                        ..._maybeEncodedRequest.headers,
                        ...requestOptions?.headers,
                    },
                    requestType: "file",
                    duplex: _maybeEncodedRequest.duplex,
                    body: _maybeEncodedRequest.body,
                    timeoutMs:
                        requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                    maxRetries: requestOptions?.maxRetries,
                    abortSignal: requestOptions?.abortSignal,
                });
                if (_response.ok) {
                    return {
                        ok: _response.ok,
                        body: undefined,
                        headers: _response.headers,
                    };
                }
                if (_response.error.reason === "status-code") {
                    throw new errors.SeedFileUploadError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
                }
                switch (_response.error.reason) {
                    case "non-json":
                        throw new errors.SeedFileUploadError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.rawBody,
                        });
                    case "timeout":
                        throw new errors.SeedFileUploadTimeoutError(
                            "Timeout exceeded when calling POST /with-content-type."
                        );
                    case "unknown":
                        throw new errors.SeedFileUploadError({
                            message: _response.error.errorMessage,
                        });
                }
            })()
        );
    }
}
