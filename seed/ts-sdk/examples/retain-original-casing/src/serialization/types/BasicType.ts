/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as SeedExamples from "../../api/index";
import * as core from "../../core";

export const BasicType: core.serialization.Schema<serializers.BasicType.Raw, SeedExamples.BasicType> =
    core.serialization.enum_(["primitive", "literal"]);

export declare namespace BasicType {
    type Raw = "primitive" | "literal";
}
