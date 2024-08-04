/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as SeedTrace from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { LightweightProblemInfoV2 } from "../types/LightweightProblemInfoV2";

export const Response: core.serialization.Schema<
    serializers.v2.problem.getLightweightProblems.Response.Raw,
    SeedTrace.v2.LightweightProblemInfoV2[]
> = core.serialization.list(LightweightProblemInfoV2);

export declare namespace Response {
    type Raw = LightweightProblemInfoV2.Raw[];
}
