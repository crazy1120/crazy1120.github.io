import gql from "graphql-tag";
import localeConverter from "./localeConverter";

const QUERY = ({ locale }: Locale) => {
  const convertedLocale = localeConverter(locale);

  return gql`
    query {
      privacyPolicyPage(locale: "${convertedLocale}") {
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
            title
            content
          }
        }
      }
    }
  `;
};

export default QUERY;
