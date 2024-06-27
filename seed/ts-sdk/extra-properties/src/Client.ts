/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "./core";
import { User } from "./api/resources/user/client/Client";

export declare namespace SeedExtraPropertiesClient {
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
    }
}

export class SeedExtraPropertiesClient {
    constructor(protected readonly _options: SeedExtraPropertiesClient.Options) {}

    protected _user: User | undefined;

    public get user(): User {
        return (this._user ??= new User(this._options));
    }
}
