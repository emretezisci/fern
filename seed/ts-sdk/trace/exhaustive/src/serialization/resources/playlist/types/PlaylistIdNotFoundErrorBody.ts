/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";
import { PlaylistId } from "./PlaylistId";

export const PlaylistIdNotFoundErrorBody: core.serialization.Schema<
    serializers.PlaylistIdNotFoundErrorBody.Raw,
    SeedTrace.PlaylistIdNotFoundErrorBody
> = core.serialization
    .union("type", {
        playlistId: core.serialization.object({
            value: PlaylistId,
        }),
    })
    .transform<SeedTrace.PlaylistIdNotFoundErrorBody>({
        transform: (value) => {
            switch (value.type) {
                case "playlistId":
                    return SeedTrace.PlaylistIdNotFoundErrorBody.playlistId(value.value);
                default:
                    return SeedTrace.PlaylistIdNotFoundErrorBody._unknown(value);
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace PlaylistIdNotFoundErrorBody {
    type Raw = PlaylistIdNotFoundErrorBody.PlaylistId;

    interface PlaylistId {
        type: "playlistId";
        value: PlaylistId.Raw;
    }
}
