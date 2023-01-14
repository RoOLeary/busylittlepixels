// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Articles documents */
interface ArticlesDocumentData {
    /**
     * articleTitle field in *Articles*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: articles.articletitle
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    articletitle: prismicT.RichTextField;
    /**
     * articleType field in *Articles*
     *
     * - **Field Type**: Select
     * - **Placeholder**: Select Article Type
     * - **Default Value**: text
     * - **API ID Path**: articles.articletype
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/select
     *
     */
    articletype: prismicT.SelectField<"text" | "video" | "podcast" | "review", "filled">;
}
/**
 * Articles document from Prismic
 *
 * - **API ID**: `articles`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ArticlesDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<ArticlesDocumentData>, "articles", Lang>;
/** Content for Contact documents */
interface ContactDocumentData {
    /**
     * Contact Title field in *Contact*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: contact.contact_title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    contact_title: prismicT.RichTextField;
    /**
     * Contact Intro field in *Contact*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: contact.contact_intro
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    contact_intro: prismicT.RichTextField;
    /**
     * Map URL field in *Contact*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: contact.map_url
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    map_url: prismicT.RichTextField;
    /**
     * Slice Zone field in *Contact*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: contact.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<ContactDocumentDataSlicesSlice>;
}
/**
 * Slice for *Contact → Slice Zone*
 *
 */
type ContactDocumentDataSlicesSlice = FaqSlice;
/**
 * Contact document from Prismic
 *
 * - **API ID**: `contact`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ContactDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<ContactDocumentData>, "contact", Lang>;
/** Content for home documents */
interface HomeDocumentData {
    /**
     * Home Title field in *home*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home.home_title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    home_title: prismicT.RichTextField;
    /**
     * Home SubTitle field in *home*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home.home_subtitle
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    home_subtitle: prismicT.RichTextField;
}
/**
 * home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<HomeDocumentData>, "home", Lang>;
export type AllDocumentTypes = ArticlesDocument | ContactDocument | HomeDocument;
/**
 * Primary content in ArticleLeadParagraph → Primary
 *
 */
interface ArticleLeadParagraphSliceDefaultPrimary {
    /**
     * Title field in *ArticleLeadParagraph → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: article_lead_paragraph.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
}
/**
 * Default variation for ArticleLeadParagraph Slice
 *
 * - **API ID**: `default`
 * - **Description**: `ArticleLeadParagraph`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ArticleLeadParagraphSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ArticleLeadParagraphSliceDefaultPrimary>, never>;
/**
 * Slice variation for *ArticleLeadParagraph*
 *
 */
type ArticleLeadParagraphSliceVariation = ArticleLeadParagraphSliceDefault;
/**
 * ArticleLeadParagraph Shared Slice
 *
 * - **API ID**: `article_lead_paragraph`
 * - **Description**: `ArticleLeadParagraph`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ArticleLeadParagraphSlice = prismicT.SharedSlice<"article_lead_paragraph", ArticleLeadParagraphSliceVariation>;
/**
 * Primary content in Faq → Primary
 *
 */
interface FaqSliceDefaultPrimary {
    /**
     * FAQ Title field in *Faq → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: faq.primary.faq_title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    faq_title: prismicT.RichTextField;
}
/**
 * Item in Faq → Items
 *
 */
export interface FaqSliceDefaultItem {
    /**
     * Question field in *Faq → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: faq.items[].question
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    question: prismicT.RichTextField;
    /**
     * Answer field in *Faq → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: faq.items[].answer
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    answer: prismicT.RichTextField;
}
/**
 * Default variation for Faq Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Faq`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FaqSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<FaqSliceDefaultPrimary>, Simplify<FaqSliceDefaultItem>>;
/**
 * Slice variation for *Faq*
 *
 */
type FaqSliceVariation = FaqSliceDefault;
/**
 * Faq Shared Slice
 *
 * - **API ID**: `faq`
 * - **Description**: `Faq`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FaqSlice = prismicT.SharedSlice<"faq", FaqSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { ArticlesDocumentData, ArticlesDocument, ContactDocumentData, ContactDocumentDataSlicesSlice, ContactDocument, HomeDocumentData, HomeDocument, AllDocumentTypes, ArticleLeadParagraphSliceDefaultPrimary, ArticleLeadParagraphSliceDefault, ArticleLeadParagraphSliceVariation, ArticleLeadParagraphSlice, FaqSliceDefaultPrimary, FaqSliceDefaultItem, FaqSliceDefault, FaqSliceVariation, FaqSlice };
    }
}
