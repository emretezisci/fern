import { RelativeFilePath } from "@fern-api/path-utils";
import { DefinitionFileSchema } from "@fern-api/fern-definition-schema";
import { FernWorkspace } from "../FernWorkspace";
import { getAllDefinitionFiles } from "./getAllDefinitionFiles";

export function getDefinitionFile(
    workspace: FernWorkspace,
    relativeFilepath: RelativeFilePath
): DefinitionFileSchema | undefined {
    return getAllDefinitionFiles(workspace.definition)[relativeFilepath]?.contents;
}
