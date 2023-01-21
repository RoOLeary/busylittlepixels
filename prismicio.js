import * as prismic from "@prismicio/client";
import * as prismicH from "@prismicio/helpers";
import * as prismicNext from "@prismicio/next";

import sm from "./sm.json";

/**
 * The project's Prismic repository name.
 */
export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint);


export const routes = [
  {
    type: 'articles',
    resolvers: {
      category: 'category',
    },
    path: '/tech/:uid',
  },
]


/**
 * The project's Prismic Link Resolver. This function determines the URL for a given Prismic document.
 *
 * @type {prismicH.LinkResolverFunction}
 */
export const linkResolver = (doc) => {
  
  if (doc.type === "page") {
    if (doc.uid === "home") {
      return "/";
    } 
    
    if (doc.uid === "articles") {
      return "/articles";
    } 

    if (doc.uid === "tech") {
      return "/tech";
    } 

    if (doc.uid === "store") {
      return "/stores";
    } 
  
    return `/${doc.uid}`;

  }

  if (doc.type === "articles") {
    
    return `/articles/${doc.uid}`;
  }

  return "/";
};

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - A configuration object to
 */
export const createClient = (config = {}) => {
  const client = prismic.createClient(sm.apiEndpoint);

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
};