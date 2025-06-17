import * as contentful from 'contentful';

let contentfulClient: contentful.ContentfulClientApi<"WITH_ALL_LOCALES">;

try {
  const baseClient = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,    
  });

  contentfulClient = baseClient.withAllLocales;
} catch (error) {
  console.error('Error creating Contentful client:', error);
}

export { contentfulClient };
