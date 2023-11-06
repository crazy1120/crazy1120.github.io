import gql from "graphql-tag";
import localeConverter from "./localeConverter";

const QUERY = ({ locale }: Locale) => {
  const convertedLocale = localeConverter(locale);

  return gql`
    query {
      aboutPage(locale: "${convertedLocale}") {
        data {
          attributes {
            page_title
            page_desc
            og_image {
              data {
                attributes {
                  url
                }
              }
            }
            canonical
            hero {
              title
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
            our_story
            stories {
              desc
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
            mission_vision
            explore {
              title
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
              desc
              link
              link_text
            }
          }
        }
      }
    }
  `;
};

export default QUERY;
