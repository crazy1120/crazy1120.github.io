import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  defaultTitle: "myFirst | Best Products & Gifts For Kids from Age 4 & Above",
  description:
    "Explore the new era of technology designed specifically for kids. Shop watch phone, drawing tablet, instant print camera, and many more.",
  canonical: "https://myFirst.tech/",

  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://myFirst.tech/",
    siteName: "myFirst",
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      name: "keywords",
      content: "myFirst, myFirst.tech",
    },
  ],
};

export default config;
