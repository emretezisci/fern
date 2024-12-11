/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernDefinition from "../../../../api/index";
import * as core from "../../../../core";

export const OpenApiFilterSchema: core.serialization.ObjectSchema<
    serializers.OpenApiFilterSchema.Raw,
    FernDefinition.OpenApiFilterSchema
> = core.serialization.object({
    endpoints: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace OpenApiFilterSchema {
    interface Raw {
        endpoints?: string[] | null;
    }
}
