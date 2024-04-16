/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernIr from "../../..";

/**
 * The fields to map to the corresponding OAuth token primitive.
 */
export interface OauthAccessTokenFields {
    accessToken: FernIr.ResponseProperty;
    expiresIn: FernIr.ResponseProperty | undefined;
    refreshToken: FernIr.ResponseProperty | undefined;
}
