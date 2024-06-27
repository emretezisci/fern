/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as SeedTrace from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Admin {
    interface Options {
        environment?: core.Supplier<environments.SeedTraceEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        xRandomHeader?: core.Supplier<string | undefined>;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the X-Random-Header header */
        xRandomHeader?: string | undefined;
    }
}

export class Admin {
    constructor(protected readonly _options: Admin.Options = {}) {}

    /**
     * @param {SeedTrace.SubmissionId} submissionId
     * @param {SeedTrace.TestSubmissionStatus} request
     * @param {Admin.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.admin.updateTestSubmissionStatus("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", {
     *         type: "stopped"
     *     })
     */
    public async updateTestSubmissionStatus(
        submissionId: SeedTrace.SubmissionId,
        request: SeedTrace.TestSubmissionStatus,
        requestOptions?: Admin.RequestOptions
    ): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SeedTraceEnvironment.Prod,
                `/admin/store-test-submission-status/${encodeURIComponent(
                    await serializers.SubmissionId.jsonOrThrow(submissionId)
                )}`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Random-Header":
                    (await core.Supplier.get(this._options.xRandomHeader)) != null
                        ? await core.Supplier.get(this._options.xRandomHeader)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/trace",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.TestSubmissionStatus.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedTraceError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedTraceError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedTraceTimeoutError();
            case "unknown":
                throw new errors.SeedTraceError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {SeedTrace.SubmissionId} submissionId
     * @param {SeedTrace.TestSubmissionUpdate} request
     * @param {Admin.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.admin.sendTestSubmissionUpdate("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", {
     *         updateTime: new Date("2024-01-15T09:30:00.000Z"),
     *         updateInfo: {
     *             type: "running",
     *             value: SeedTrace.RunningSubmissionState.QueueingSubmission
     *         }
     *     })
     */
    public async sendTestSubmissionUpdate(
        submissionId: SeedTrace.SubmissionId,
        request: SeedTrace.TestSubmissionUpdate,
        requestOptions?: Admin.RequestOptions
    ): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SeedTraceEnvironment.Prod,
                `/admin/store-test-submission-status-v2/${encodeURIComponent(
                    await serializers.SubmissionId.jsonOrThrow(submissionId)
                )}`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Random-Header":
                    (await core.Supplier.get(this._options.xRandomHeader)) != null
                        ? await core.Supplier.get(this._options.xRandomHeader)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/trace",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.TestSubmissionUpdate.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedTraceError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedTraceError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedTraceTimeoutError();
            case "unknown":
                throw new errors.SeedTraceError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {SeedTrace.SubmissionId} submissionId
     * @param {SeedTrace.WorkspaceSubmissionStatus} request
     * @param {Admin.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.admin.updateWorkspaceSubmissionStatus("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", {
     *         type: "stopped"
     *     })
     */
    public async updateWorkspaceSubmissionStatus(
        submissionId: SeedTrace.SubmissionId,
        request: SeedTrace.WorkspaceSubmissionStatus,
        requestOptions?: Admin.RequestOptions
    ): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SeedTraceEnvironment.Prod,
                `/admin/store-workspace-submission-status/${encodeURIComponent(
                    await serializers.SubmissionId.jsonOrThrow(submissionId)
                )}`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Random-Header":
                    (await core.Supplier.get(this._options.xRandomHeader)) != null
                        ? await core.Supplier.get(this._options.xRandomHeader)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/trace",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.WorkspaceSubmissionStatus.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedTraceError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedTraceError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedTraceTimeoutError();
            case "unknown":
                throw new errors.SeedTraceError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {SeedTrace.SubmissionId} submissionId
     * @param {SeedTrace.WorkspaceSubmissionUpdate} request
     * @param {Admin.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.admin.sendWorkspaceSubmissionUpdate("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", {
     *         updateTime: new Date("2024-01-15T09:30:00.000Z"),
     *         updateInfo: {
     *             type: "running",
     *             value: SeedTrace.RunningSubmissionState.QueueingSubmission
     *         }
     *     })
     */
    public async sendWorkspaceSubmissionUpdate(
        submissionId: SeedTrace.SubmissionId,
        request: SeedTrace.WorkspaceSubmissionUpdate,
        requestOptions?: Admin.RequestOptions
    ): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SeedTraceEnvironment.Prod,
                `/admin/store-workspace-submission-status-v2/${encodeURIComponent(
                    await serializers.SubmissionId.jsonOrThrow(submissionId)
                )}`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Random-Header":
                    (await core.Supplier.get(this._options.xRandomHeader)) != null
                        ? await core.Supplier.get(this._options.xRandomHeader)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/trace",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.WorkspaceSubmissionUpdate.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedTraceError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedTraceError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedTraceTimeoutError();
            case "unknown":
                throw new errors.SeedTraceError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {SeedTrace.SubmissionId} submissionId
     * @param {string} testCaseId
     * @param {SeedTrace.StoreTracedTestCaseRequest} request
     * @param {Admin.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.admin.storeTracedTestCase("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", "string", {
     *         result: {
     *             result: {},
     *             stdout: "string"
     *         },
     *         traceResponses: [{
     *                 submissionId: "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
     *                 lineNumber: 1,
     *                 returnValue: {
     *                     type: "integerValue",
     *                     value: 1
     *                 },
     *                 expressionLocation: {},
     *                 stack: {},
     *                 stdout: "string"
     *             }]
     *     })
     */
    public async storeTracedTestCase(
        submissionId: SeedTrace.SubmissionId,
        testCaseId: string,
        request: SeedTrace.StoreTracedTestCaseRequest,
        requestOptions?: Admin.RequestOptions
    ): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SeedTraceEnvironment.Prod,
                `/admin/store-test-trace/submission/${encodeURIComponent(
                    await serializers.SubmissionId.jsonOrThrow(submissionId)
                )}/testCase/${encodeURIComponent(testCaseId)}`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Random-Header":
                    (await core.Supplier.get(this._options.xRandomHeader)) != null
                        ? await core.Supplier.get(this._options.xRandomHeader)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/trace",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.StoreTracedTestCaseRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedTraceError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedTraceError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedTraceTimeoutError();
            case "unknown":
                throw new errors.SeedTraceError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {SeedTrace.SubmissionId} submissionId
     * @param {SeedTrace.v2.TestCaseId} testCaseId
     * @param {SeedTrace.TraceResponseV2[]} request
     * @param {Admin.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.admin.storeTracedTestCaseV2("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", "string", [{
     *             submissionId: "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
     *             lineNumber: 1,
     *             file: {},
     *             returnValue: {
     *                 type: "integerValue",
     *                 value: 1
     *             },
     *             expressionLocation: {},
     *             stack: {},
     *             stdout: "string"
     *         }])
     */
    public async storeTracedTestCaseV2(
        submissionId: SeedTrace.SubmissionId,
        testCaseId: SeedTrace.v2.TestCaseId,
        request: SeedTrace.TraceResponseV2[],
        requestOptions?: Admin.RequestOptions
    ): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SeedTraceEnvironment.Prod,
                `/admin/store-test-trace-v2/submission/${encodeURIComponent(
                    await serializers.SubmissionId.jsonOrThrow(submissionId)
                )}/testCase/${encodeURIComponent(await serializers.v2.TestCaseId.jsonOrThrow(testCaseId))}`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Random-Header":
                    (await core.Supplier.get(this._options.xRandomHeader)) != null
                        ? await core.Supplier.get(this._options.xRandomHeader)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/trace",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.admin.storeTracedTestCaseV2.Request.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedTraceError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedTraceError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedTraceTimeoutError();
            case "unknown":
                throw new errors.SeedTraceError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {SeedTrace.SubmissionId} submissionId
     * @param {SeedTrace.StoreTracedWorkspaceRequest} request
     * @param {Admin.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.admin.storeTracedWorkspace("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", {
     *         workspaceRunDetails: {
     *             exceptionV2: {
     *                 type: "generic"
     *             },
     *             exception: {},
     *             stdout: "string"
     *         },
     *         traceResponses: [{
     *                 submissionId: "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
     *                 lineNumber: 1,
     *                 returnValue: {
     *                     type: "integerValue",
     *                     value: 1
     *                 },
     *                 expressionLocation: {},
     *                 stack: {},
     *                 stdout: "string"
     *             }]
     *     })
     */
    public async storeTracedWorkspace(
        submissionId: SeedTrace.SubmissionId,
        request: SeedTrace.StoreTracedWorkspaceRequest,
        requestOptions?: Admin.RequestOptions
    ): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SeedTraceEnvironment.Prod,
                `/admin/store-workspace-trace/submission/${encodeURIComponent(
                    await serializers.SubmissionId.jsonOrThrow(submissionId)
                )}`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Random-Header":
                    (await core.Supplier.get(this._options.xRandomHeader)) != null
                        ? await core.Supplier.get(this._options.xRandomHeader)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/trace",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.StoreTracedWorkspaceRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedTraceError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedTraceError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedTraceTimeoutError();
            case "unknown":
                throw new errors.SeedTraceError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {SeedTrace.SubmissionId} submissionId
     * @param {SeedTrace.TraceResponseV2[]} request
     * @param {Admin.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.admin.storeTracedWorkspaceV2("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", [{
     *             submissionId: "d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32",
     *             lineNumber: 1,
     *             file: {},
     *             returnValue: {
     *                 type: "integerValue",
     *                 value: 1
     *             },
     *             expressionLocation: {},
     *             stack: {},
     *             stdout: "string"
     *         }])
     */
    public async storeTracedWorkspaceV2(
        submissionId: SeedTrace.SubmissionId,
        request: SeedTrace.TraceResponseV2[],
        requestOptions?: Admin.RequestOptions
    ): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.SeedTraceEnvironment.Prod,
                `/admin/store-workspace-trace-v2/submission/${encodeURIComponent(
                    await serializers.SubmissionId.jsonOrThrow(submissionId)
                )}`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Random-Header":
                    (await core.Supplier.get(this._options.xRandomHeader)) != null
                        ? await core.Supplier.get(this._options.xRandomHeader)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern/trace",
                "X-Fern-SDK-Version": "0.0.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            body: await serializers.admin.storeTracedWorkspaceV2.Request.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SeedTraceError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SeedTraceError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SeedTraceTimeoutError();
            case "unknown":
                throw new errors.SeedTraceError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
