import gql from "graphql-tag";
import localeConverter from "./localeConverter";

const QUERY = ({ locale }: Locale) => {
  const convertedLocale = localeConverter(locale);

  return gql`
  query {
    landingPage(locale:"${convertedLocale}") {
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
          heroes_section {
            title
            desc
            image {
              data {
                attributes {
                  url
                }
              }
            }
            mobile_image {
              data {
                attributes {
                  url
                }
              }
            }
            link
            link_text
          }
          products_section {
            title
            desc
            image {
              data {
                attributes {
                  url
                }
              }
            }
            link
            link_text
          }
          blogs_section {
            title
            date
            image {
              data {
                attributes {
                  url
                }
              }
            }
            link
          }
        }
      }
    }
  }
`;
};

export default QUERY;
