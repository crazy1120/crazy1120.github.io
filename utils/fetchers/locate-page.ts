import gql from "graphql-tag";
import localeConverter from "./localeConverter";

const QUERY = ({ locale }: Locale) => {
  const convertedLocale = localeConverter(locale);

  return gql`
    query {
      locatePage(locale: "${convertedLocale}") {
        data {
          attributes {
            page_title
            page_desc
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
            offices {
              title
              contents
            }
            singapore_stores {
              title
              contents
            }
            resellers {
              title
              contents
            }
            marketplace
            official_store
          }
        }
      }
    }
  `;
};

export default QUERY;
