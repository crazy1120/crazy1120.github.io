import { GetServerSideProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { ReactNode } from "react";

import { Query, Layout } from "@/components";
import {
  Blocks,
  BuyBar,
  CarebudsPros,
  Gadget,
  KeyFeature,
  PurpleHero,
  TechSpecs,
} from "@/components/products";
import { CAREBUDS_PAGE_QUERY } from "@/utils/fetchers";
import { COMMON, NAVBAR } from "@/utils/constants";

type PageProp = ProductPage &
  SEOData & {
    features: DescComponent[];
    key_feature: DescComponent;
    pros_section: DescComponent[];
    gadget: Image;
    tech_specs: string;
    what_in_box: string;
  };

type DataProp = { carebudsPage: { data: { attributes: PageProp } } };

const CarebudsPage: NextPage = () => {
  const { locale } = useRouter();

  return (
    <Query query={CAREBUDS_PAGE_QUERY({ locale })}>
      {({ data }: { data: DataProp }): ReactNode => {
        const props = data.carebudsPage.data.attributes;
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
            <PurpleHero {...props.hero} features={props.features} />
            <Blocks blocks={props.blocks_section} firstimageright={true} />
            <KeyFeature {...props.key_feature} />
            <CarebudsPros pros={props.pros_section} />
            <Gadget gadget={props.gadget} full={true} />
            <TechSpecs specs={props.tech_specs} heading={"tech_specs"} />
            <TechSpecs specs={props.what_in_box} heading={"what_in_the_box"} />
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

export default CarebudsPage;
