import gql from "graphql-tag";
import localeConverter from "./localeConverter";

const QUERY = ({ locale, blogsLength }: Locale & { blogsLength: number }) => {
  const convertedLocale = localeConverter(locale);

  return gql`
    query {
      newsPage(locale: "${convertedLocale}" ) {
        data {
          attributes {
            page_title
          }
        }
      }
      blogs(locale: "${convertedLocale}", pagination: {start: 0, limit: ${blogsLength}}) {
        data {
          attributes {
            title
            page_desc
            image {
              data {
                attributes {
                  url
                }
              }
            }
            date
            category {
              data {
                attributes {
                  category
                  link
                }
              }
            }
            link
            content
          }
        }
      }
    }
  `;
};

export const NEWS_BLOG_PAGE_QUERY = ({
  locale,
  link,
}: Locale & { link: string }) => {
  const convertedLocale = localeConverter(locale);

  return gql`
    query {
      blogs(locale: "${convertedLocale}", filters: { link: { eq: "${link}" } }) {
        data {
          attributes {
            title
            page_desc
            image {
              data {
                attributes {
                  url
                }
              }
            }
            date
            category {
              data {
                attributes {
                  category
                  link
                }
              }
            }
            link
            content
          }
        }
      }
    }
  `;
};

export default QUERY;
