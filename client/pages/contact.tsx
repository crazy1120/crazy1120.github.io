import { ReactNode } from "react";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Query, Layout, CommonHero as Hero } from "@/components";
import { Support, Enquiries } from "@/components/contact";
import { CONTACT_PAGE_QUERY } from "@/utils/fetchers";
import { COMMON, NAVBAR } from "@/utils/constants";

type ContactPageProps = PageMetaData &
  Canonical & {
    hero: SimpleComponent;
    support_title: string;
    support_items: LinkDescComponent[];
    tech_enquiry: string;
    general_enquiry: string;
  };

type DataProp = { contactPage: { data: { attributes: ContactPageProps } } };

const ContactPage: NextPage = () => {
  const { locale } = useRouter();

  return (
    <Query query={CONTACT_PAGE_QUERY({ locale })}>
      {({ data }: { data: DataProp }): ReactNode => {
        const props = data.contactPage.data.attributes;

        return (
          <Layout
            title={props.page_title}
            desc={props.page_desc}
            canonical={props.canonical}>
            <Hero {...props.hero} />
            <Support title={props.support_title} items={props.support_items} />
            <Enquiries
              tech={props.tech_enquiry}
              general={props.general_enquiry}
            />
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

export default ContactPage;
