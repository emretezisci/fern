/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernOpenapiIr from "../../../index";

export interface MapSchema
    extends FernOpenapiIr.WithDescription,
        FernOpenapiIr.WithName,
        FernOpenapiIr.WithSchemaId,
        FernOpenapiIr.WithSdkGroupName,
        FernOpenapiIr.WithAvailability,
        FernOpenapiIr.WithEncoding,
        FernOpenapiIr.WithTitle {
    key: FernOpenapiIr.PrimitiveSchema;
    value: FernOpenapiIr.Schema;
}
