/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as SeedExhaustive from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const Cat: core.serialization.ObjectSchema<serializers.types.Cat.Raw, SeedExhaustive.types.Cat> =
    core.serialization.objectWithoutOptionalProperties({
        name: core.serialization.string(),
        likesToMeow: core.serialization.boolean(),
    });

export declare namespace Cat {
    interface Raw {
        name: string;
        likesToMeow: boolean;
    }
}
