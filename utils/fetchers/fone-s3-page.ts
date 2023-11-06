import gql from "graphql-tag";
import localeConverter from "./localeConverter";

const QUERY = ({ locale }: Locale) => {
  const convertedLocale = localeConverter(locale);

  return gql`
    query {
      productS3Page(locale: "${convertedLocale}") {
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
            freesim {
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
            more_features {
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
            tech_specs
          }
        }
      }
    }
  `;
};

export default QUERY;
