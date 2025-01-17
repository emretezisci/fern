/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "./core";
import { Organization } from "./api/resources/organization/client/Client";
import { User } from "./api/resources/user/client/Client";

export declare namespace SeedMixedFileDirectoryClient {
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

export class SeedMixedFileDirectoryClient {
    constructor(protected readonly _options: SeedMixedFileDirectoryClient.Options) {}

    protected _organization: Organization | undefined;

    public get organization(): Organization {
        return (this._organization ??= new Organization(this._options));
    }

    protected _user: User | undefined;

    public get user(): User {
        return (this._user ??= new User(this._options));
    }
}
