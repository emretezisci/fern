/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";
import { WithSdkGroupName } from "../../commons/types/WithSdkGroupName";
import { WithSchemaId } from "../../commons/types/WithSchemaId";
import { WithName } from "../../commons/types/WithName";
import { WithDescription } from "../../commons/types/WithDescription";
import { WithAvailability } from "../../commons/types/WithAvailability";
import { WithTitle } from "../../commons/types/WithTitle";

export const OptionalSchemaWithExample: core.serialization.ObjectSchema<
    serializers.OptionalSchemaWithExample.Raw,
    FernOpenapiIr.OptionalSchemaWithExample
> = core.serialization
    .objectWithoutOptionalProperties({
        value: core.serialization.lazy(() => serializers.SchemaWithExample),
    })
    .extend(WithSdkGroupName)
    .extend(WithSchemaId)
    .extend(WithName)
    .extend(WithDescription)
    .extend(WithAvailability)
    .extend(WithTitle);

export declare namespace OptionalSchemaWithExample {
    interface Raw
        extends WithSdkGroupName.Raw,
            WithSchemaId.Raw,
            WithName.Raw,
            WithDescription.Raw,
            WithAvailability.Raw,
            WithTitle.Raw {
        value: serializers.SchemaWithExample.Raw;
    }
}
