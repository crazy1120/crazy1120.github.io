import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Query, Layout } from "@/components";
import PageBlogComponent from "@/components/news/pageBlogComponent";
import { NEWS_BLOG_PAGE_QUERY } from "@/utils/fetchers";
import { COMMON, NAVBAR } from "@/utils/constants";

type DataProp = {
  blogs: { data: { attributes: BlogElement & { page_desc: string } }[] };
};

const CampaignBlogPage: NextPage = () => {
  const router = useRouter();
  const { locale } = useRouter();

  return (
    <Query query={NEWS_BLOG_PAGE_QUERY({ locale, link: router.asPath })}>
      {({ data }: { data: DataProp }): ReactNode => {
        const props = data.blogs.data[0].attributes;

        return (
          <Layout title={props.title} desc={props.page_desc}>
            <PageBlogComponent {...props} />
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
export default CampaignBlogPage;
