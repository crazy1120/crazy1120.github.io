import gql from "graphql-tag";
import localeConverter from "./localeConverter";

const QUERY = ({ locale }: Locale) => {
  const convertedLocale = localeConverter(locale);

  return gql`
  query {
    carebudsPage(locale: "${convertedLocale}") {
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
          product_info {
            name
            buy_link
          }
          hero {
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
          features {
            desc
            image{
              data{
                attributes{
                  url
                }
              }                
            }
          }
          blocks_section {
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
          key_feature {
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
          pros_section {
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
          gadget {
            data {
              attributes {
                url
              }
            }
          }
          tech_specs         
          what_in_box
        }
      }
    }
  }
  `;
};

export default QUERY;
