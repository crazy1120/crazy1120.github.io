import { ReactNode } from "react";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Query, Layout, CommonHero as Hero } from "@/components";
import { Story, Mission, Explore } from "@/components/about";
import { COMMON, NAVBAR } from "@/utils/constants";
import { ABOUT_PAGE_QUERY } from "@/utils/fetchers";

type AboutPageProps = PageMetaData &
  SEOData & {
    hero: SimpleComponent;
    our_story: string;
    stories: DescComponent[];
    mission_vision: string;
    explore: LinkDescComponent[];
  };

type DataProp = { aboutPage: { data: { attributes: AboutPageProps } } };

const AboutPage: NextPage = () => {
  const { locale } = useRouter();

  return (
    <Query query={ABOUT_PAGE_QUERY({ locale })}>
      {({ data }: { data: DataProp }): ReactNode => {
        const props = data.aboutPage.data.attributes;
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
            <Hero {...props.hero} />
            <Story our_story={props.our_story} stories={props.stories} />
            <Mission mission={props.mission_vision} />
            <Explore explore={props.explore} />
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

export default AboutPage;
