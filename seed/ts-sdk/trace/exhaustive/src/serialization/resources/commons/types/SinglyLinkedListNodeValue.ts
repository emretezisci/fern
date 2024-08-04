/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";
import { NodeId } from "./NodeId";

export const SinglyLinkedListNodeValue: core.serialization.ObjectSchema<
    serializers.SinglyLinkedListNodeValue.Raw,
    SeedTrace.SinglyLinkedListNodeValue
> = core.serialization.object({
    nodeId: NodeId,
    val: core.serialization.number(),
    next: NodeId.optional(),
});

export declare namespace SinglyLinkedListNodeValue {
    interface Raw {
        nodeId: NodeId.Raw;
        val: number;
        next?: NodeId.Raw | null;
    }
}
