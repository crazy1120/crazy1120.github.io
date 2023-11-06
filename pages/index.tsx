import { ReactNode } from "react";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Query, Layout } from "@/components";
import { LANDING_PAGE_QUERY } from "@/utils/fetchers";
import { Blogs, Heroes, Products } from "@/components/landing";
import { COMMON, NAVBAR } from "@/utils/constants";

type LandingPageProps = PageMetaData &
  OGData & {
    heroes_section: LinkDescComponent[];
    products_section: LinkDescComponent[];
    blogs_section: BlogComponent[];
  };

type DataProp = { landingPage: { data: { attributes: LandingPageProps } } };

const LandingPage: NextPage = () => {
  const { locale } = useRouter();

  return (
    <Query query={LANDING_PAGE_QUERY({ locale })}>
      {({ data }: { data: DataProp }): ReactNode => {
        const props = data.landingPage.data.attributes;
        const og = {
          images: [
            {
              url: props.og_image.data.attributes.url,
              width: 800,
              height: 600,
            },
          ],
        };

        return (
          <Layout title={props.page_title} desc={props.page_desc} og={og}>
            <Heroes heroes={props.heroes_section} />
            <Products products={props.products_section} />
            <Blogs blogs={props.blogs_section} />
          </Layout>
        );
      }}
    </Query>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, [COMMON, NAVBAR])),
  },
});

export default LandingPage;
