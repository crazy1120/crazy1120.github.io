import gql from "graphql-tag";
import localeConverter from "./localeConverter";

const QUERY = ({ locale }: Locale) => {
  const convertedLocale = localeConverter(locale);

  return gql`
    query {
      archivePage(locale: "${convertedLocale}") {
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
            products(pagination: { limit: 20 }) {
              title
              desc
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
};

export default QUERY;
