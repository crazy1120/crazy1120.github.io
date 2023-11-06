import { ReactNode } from "react";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Query, Layout } from "@/components";
import Products from "@/components/archive";
import { COMMON, NAVBAR } from "@/utils/constants";
import { ARCHIVE_PAGE_QUERY } from "@/utils/fetchers";

type ArchivePageProps = PageMetaData & SEOData & { products: DescComponent[] };

type DataProp = { archivePage: { data: { attributes: ArchivePageProps } } };

const ArchivePage: NextPage = () => {
  const { locale } = useRouter();

  return (
    <Query query={ARCHIVE_PAGE_QUERY({ locale })}>
      {({ data }: { data: DataProp }): ReactNode => {
        const props = data.archivePage.data.attributes;
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
            <Products products={props.products} />
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

export default ArchivePage;
