import gql from "graphql-tag";
import localeConverter from "./localeConverter";

const QUERY = ({ locale }: Locale) => {
  const convertedLocale = localeConverter(locale);

  return gql`
    query {
      contactPage(locale: "${convertedLocale}") {
        data {
          attributes {
            page_title
            page_desc
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
            support_title
            support_items {
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
            tech_enquiry
            general_enquiry
          }
        }
      }
    }
  `;
};

export default QUERY;
