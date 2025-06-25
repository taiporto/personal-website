import type { Asset, ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import { ReactNode } from "react";

export interface TypeProjectFields {
    title: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.RichText;
    coverImage?: EntryFieldTypes.AssetLink & {
      fields: Asset['fields']
    };
    tags?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    links?: EntryFieldTypes.Object;
}

export type TypeProjectSkeleton = EntrySkeletonType<TypeProjectFields, "project">;
export type TypeProject<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeProjectSkeleton, Modifiers, Locales>;
export type TypeProjectWithoutLinkResolutionResponse = TypeProject<"WITHOUT_LINK_RESOLUTION">;
export type TypeProjectWithoutUnresolvableLinksResponse = TypeProject<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeProjectWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeProject<"WITH_ALL_LOCALES", Locales>;
export type TypeProjectWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeProject<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeProjectWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeProject<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;

export type Link = {
  type: 'github' | 'website';
  url: string;
}

export type Tag = {
  label: string;
};

export type Project = {
  id: string;
  title: string;
  description?: ReactNode;
  coverImage: string;
  tags: Tag[];
  links: Link[];
};