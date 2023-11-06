import { ReactNode } from "react";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Query, Layout } from "@/components";
import {
  Blocks,
  Block as HeroBlock,
  Features,
  FreeSIM,
  MoreFeatures,
  TechSpecs,
  BuyBar,
} from "@/components/products";
import { FONE_S3_PAGE_QUERY } from "@/utils/fetchers";
import { COMMON, NAVBAR } from "@/utils/constants";

type PageProp = ProductPage & SEOData & { features: DescComponent[] };

type DataProp = { productS3Page: { data: { attributes: PageProp } } };

const FoneS3Page: NextPage = () => {
  const { locale } = useRouter();

  return (
    <Query query={FONE_S3_PAGE_QUERY({ locale })}>
      {({ data }: { data: DataProp }): ReactNode => {
        const props = data.productS3Page.data.attributes;
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
          <Layout
            title={props.page_title}
            desc={props.page_desc}
            og={og}
            canonical={props.canonical}>
            <BuyBar {...props.product_info} />
            <HeroBlock {...props.hero} isBlock={false} onLeft={false} />
            <Blocks blocks={props.blocks_section} />
            <Features first={"S3"} features={props.features} />
            <FreeSIM {...props.freesim} />
            <MoreFeatures features={props.more_features} />
            <TechSpecs specs={props.tech_specs} heading={"tech_specs"} />
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

export default FoneS3Page;
