/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernDocsConfig from "../../../../api";
import * as core from "../../../../core";

export const DocsConfiguration: core.serialization.ObjectSchema<
    serializers.DocsConfiguration.Raw,
    FernDocsConfig.DocsConfiguration
> = core.serialization.object({
    instances: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).DocsInstances)
    ),
    title: core.serialization.string().optional(),
    tabs: core.serialization
        .record(
            core.serialization.lazy(async () => (await import("../../..")).TabId),
            core.serialization.lazy(async () => (await import("../../..")).TabConfig)
        )
        .optional(),
    versions: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).VersionConfig))
        .optional(),
    navigation: core.serialization.lazy(async () => (await import("../../..")).NavigationConfig).optional(),
    navbarLinks: core.serialization.property(
        "navbar-links",
        core.serialization.list(core.serialization.lazy(async () => (await import("../../..")).NavbarLink)).optional()
    ),
    footerLinks: core.serialization.property(
        "footer-links",
        core.serialization.lazyObject(async () => (await import("../../..")).FooterLinksConfig).optional()
    ),
    metadata: core.serialization.lazyObject(async () => (await import("../../..")).MetadataConfig).optional(),
    redirects: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).RedirectConfig))
        .optional(),
    logo: core.serialization.lazyObject(async () => (await import("../../..")).LogoConfiguration).optional(),
    favicon: core.serialization.string().optional(),
    backgroundImage: core.serialization.property(
        "background-image",
        core.serialization.lazy(async () => (await import("../../..")).BackgroundImageConfiguration).optional()
    ),
    colors: core.serialization.lazyObject(async () => (await import("../../..")).ColorsConfiguration).optional(),
    typography: core.serialization.lazyObject(async () => (await import("../../..")).DocsTypographyConfig).optional(),
    layout: core.serialization.lazyObject(async () => (await import("../../..")).LayoutConfig).optional(),
    integrations: core.serialization.lazyObject(async () => (await import("../../..")).IntegrationsConfig).optional(),
    css: core.serialization.lazy(async () => (await import("../../..")).CssConfig).optional(),
    js: core.serialization.lazy(async () => (await import("../../..")).JsConfig).optional(),
});

export declare namespace DocsConfiguration {
    interface Raw {
        instances: serializers.DocsInstances.Raw[];
        title?: string | null;
        tabs?: Record<serializers.TabId.Raw, serializers.TabConfig.Raw> | null;
        versions?: serializers.VersionConfig.Raw[] | null;
        navigation?: serializers.NavigationConfig.Raw | null;
        "navbar-links"?: serializers.NavbarLink.Raw[] | null;
        "footer-links"?: serializers.FooterLinksConfig.Raw | null;
        metadata?: serializers.MetadataConfig.Raw | null;
        redirects?: serializers.RedirectConfig.Raw[] | null;
        logo?: serializers.LogoConfiguration.Raw | null;
        favicon?: string | null;
        "background-image"?: serializers.BackgroundImageConfiguration.Raw | null;
        colors?: serializers.ColorsConfiguration.Raw | null;
        typography?: serializers.DocsTypographyConfig.Raw | null;
        layout?: serializers.LayoutConfig.Raw | null;
        integrations?: serializers.IntegrationsConfig.Raw | null;
        css?: serializers.CssConfig.Raw | null;
        js?: serializers.JsConfig.Raw | null;
    }
}
