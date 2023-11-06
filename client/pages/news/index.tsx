import { GetServerSideProps, NextPage } from "next";
import { ReactNode, useState } from "react";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import { Query, Layout } from "@/components";
import BlogElement from "@/components/news/blog";
import { COMMON, NAVBAR } from "@/utils/constants";
import { NEWS_PAGE_QUERY } from "@/utils/fetchers";

type DataProp = {
  newsPage: { data: { attributes: { page_title: string } } };
  blogs: { data: { attributes: BlogElement }[] };
};

const NewsPage: NextPage = () => {
  const { locale } = useRouter();
  const { t } = useTranslation(COMMON);

  const [blogsLength, setBlogsLength] = useState<number>(5);

  const handleMoreBlogs = (blogsLength: number) => {
    setBlogsLength(blogsLength + 6);
  };

  return (
    <Query query={NEWS_PAGE_QUERY({ locale, blogsLength })}>
      {({ data }: { data: DataProp }): ReactNode => {
        const { page_title } = data.newsPage.data.attributes;
        const blogs = data.blogs.data;

        return (
          <Layout title={page_title}>
            <section className="py-20">
              <div className="container px-4 mx-auto">
                <h2 className="text-3xl lg:text-4xl mb-8 font-bold font-heading">
                  {t("news")}
                </h2>

                <div className="flex flex-wrap -mx-3">
                  <div className="w-full lg:w-2/3 px-3 mb-12">
                    <BlogElement {...blogs[0].attributes} />
                  </div>
                  {blogs.slice(1).map((blog, index) => (
                    <div key={index} className="w-full lg:w-1/3 px-3 mb-12">
                      <BlogElement {...blog.attributes} />
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <button
                    onClick={() => handleMoreBlogs(blogs.length)}
                    className="inline-block py-4 px-8 text-xs text-white font-semibold leading-none bg-purple hover:bg-green rounded-full">
                    {t("show_more")}
                  </button>
                </div>
              </div>
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

export default NewsPage;
