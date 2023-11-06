declare type PageMetaData = { page_title: string; page_desc: string };

declare type OGData = { og_image: Image };

declare type Canonical = { canonical: string };

declare type SEOData = OGData & Canonical;

declare type ProductInfo = { name: string; buy_link: string };

declare type SimpleComponent = {
  title: string;
  image: Image;
  mobile_image?: Image;
};

declare type DescComponent = SimpleComponent & { desc: string };

declare type LinkDescComponent = DescComponent & {
  link: string;
  link_text: string;
};

// blog component in landing page
declare type BlogComponent = SimpleComponent & {
  date: string;
  link: string;
};
