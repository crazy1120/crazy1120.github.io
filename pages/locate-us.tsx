import { ReactNode } from "react";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Query, Layout, CommonHero as Hero } from "@/components";
import { ColumnBlock, RowBlock } from "@/components/locate";
import { LOCATE_PAGE_QUERY } from "@/utils/fetchers";
import { COMMON, NAVBAR } from "@/utils/constants";

type LocatePageProps = PageMetaData & {
  hero: SimpleComponent;
  offices: { title: string; contents: string }[];
  singapore_stores: { title: string; contents: string }[];
  resellers: { title: string; contents: string }[];
  marketplace: string;
  official_store: string;
};

type DataProp = { locatePage: { data: { attributes: LocatePageProps } } };

const LocatePage: NextPage = () => {
  const { locale } = useRouter();

  return (
    <Query query={LOCATE_PAGE_QUERY({ locale })}>
      {({ data }: { data: DataProp }): ReactNode => {
        const props = data.locatePage.data.attributes;

        return (
          <Layout title={props.page_title} desc={props.page_desc}>
            <Hero {...props.hero} />
            <section className="flex flex-wrap text-black items-start lg:max-w-[1140px] mx-5 lg:mx-auto lg:mb-10 mt-[50px] lg:mt-[100px]">
              <RowBlock title="offices" data={props.offices} />
              <RowBlock
                title="singapore_stores"
                data={props.singapore_stores}
              />
              <RowBlock title="authorised_resellers" data={props.resellers} />
            </section>
            <section className="flex flex-wrap text-black items-start lg:max-w-[1140px] mx-5 lg:mx-auto">
              <ColumnBlock title="marketplace" data={props.marketplace} />
              <ColumnBlock title="official_store" data={props.official_store} />
            </section>
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

export default LocatePage;
