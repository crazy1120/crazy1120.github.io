import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.SERVER_GRAPHQL_URL,
  cache: new InMemoryCache(),
});

export default client;

// Fetchers for main pages
export { default as LANDING_PAGE_QUERY } from "./landing-page";
export { default as ABOUT_PAGE_QUERY } from "./about-page";
export { default as CONTACT_PAGE_QUERY } from "./contact-page";
export { default as PRIVACY_POLICY_PAGE_QUERY } from "./privacy-policy-page";
export { default as LOCATE_PAGE_QUERY } from "./locate-page";
export { default as ARCHIVE_PAGE_QUERY } from "./archive-page";

// Fetchers for blogs / news / campaign pages
export { default as NEWS_PAGE_QUERY, NEWS_BLOG_PAGE_QUERY } from "./news-page";

// Fetchers for product pages
export { default as FONE_S3_PAGE_QUERY } from "./fone-s3-page";
export { default as FONE_R1S_PAGE_QUERY } from "./fone-r1s-page";
export { default as CAREBUDS_PAGE_QUERY } from "./carebuds-page";
