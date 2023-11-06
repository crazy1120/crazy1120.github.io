import { ReactNode } from "react";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Query, Layout } from "@/components";
import PrivacyPolicy from "@/components/privacyPolicy";
import { PRIVACY_POLICY_PAGE_QUERY } from "@/utils/fetchers";
import { COMMON, NAVBAR } from "@/utils/constants";

type PrivacyPolicyPageProps = PageMetaData &
  SEOData & {
    title: string;
    content: string;
  };

type DataProp = {
  privacyPolicyPage: { data: { attributes: PrivacyPolicyPageProps } };
};

const PrivacyPolicyPage: NextPage = () => {
  const { locale } = useRouter();

  return (
    <Query query={PRIVACY_POLICY_PAGE_QUERY({ locale })}>
      {({ data }: { data: DataProp }): ReactNode => {
        const props = data.privacyPolicyPage.data.attributes;
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
            <PrivacyPolicy title={props.title} content={props.content} />
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

export default PrivacyPolicyPage;
