/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernDefinition from "../../../index";

export type GeneratorOutputSchema =
    | FernDefinition.GeneratorOutputSchema.Npm
    | FernDefinition.GeneratorOutputSchema.Maven
    | FernDefinition.GeneratorOutputSchema.Pypi
    | FernDefinition.GeneratorOutputSchema.Postman
    | FernDefinition.GeneratorOutputSchema.LocalFileSystem
    | FernDefinition.GeneratorOutputSchema.Nuget
    | FernDefinition.GeneratorOutputSchema.Rubygems;

export declare namespace GeneratorOutputSchema {
    interface Npm extends FernDefinition.NpmOutputLocationSchema {
        location: "npm";
    }

    interface Maven extends FernDefinition.MavenOutputLocationSchema {
        location: "maven";
    }

    interface Pypi extends FernDefinition.PypiOutputLocationSchema {
        location: "pypi";
    }

    interface Postman extends FernDefinition.PostmanOutputLocationSchema {
        location: "postman";
    }

    interface LocalFileSystem extends FernDefinition.LocalFileSystemOutputLocationSchema {
        location: "local-file-system";
    }

    interface Nuget extends FernDefinition.NugetOutputLocationSchema {
        location: "nuget";
    }

    interface Rubygems extends FernDefinition.RubyGemsOutputLocationSchema {
        location: "rubygems";
    }
}
