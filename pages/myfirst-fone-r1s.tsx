import { ReactNode } from "react";
import { GetServerSideProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

import { Query, Layout } from "@/components";
import {
  Blocks,
  BuyBar,
  FreeSIM,
  Gadget,
  Block as HeroBlock,
  MoreFeatures,
  TechSpecs,
} from "@/components/products";
import { COMMON, NAVBAR } from "@/utils/constants";
import { FONE_R1S_PAGE_QUERY } from "@/utils/fetchers";

type PageProp = ProductPage & SEOData & { gadget: Image };

type DataProp = { productR1SPage: { data: { attributes: PageProp } } };

const FoneR1SPage: NextPage = () => {
  const { locale } = useRouter();

  return (
    <Query query={FONE_R1S_PAGE_QUERY({ locale })}>
      {({ data }: { data: DataProp }): ReactNode => {
        const props = data.productR1SPage.data.attributes;
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
            <FreeSIM {...props.freesim} column={true} />
            <MoreFeatures features={props.more_features} />
            <Gadget gadget={props.gadget} />
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

export default FoneR1SPage;
