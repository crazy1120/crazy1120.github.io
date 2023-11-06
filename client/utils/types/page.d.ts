declare type ProductPage = PageMetaData & {
  product_info: ProductInfo;
  hero: DescComponent | LinkDescComponent;
  blocks_section: DescComponent[];
  freesim: DescComponent;
  more_features: DescComponent[];
  tech_specs: string;
};

// blog component in news, blog, campaign page
declare type BlogElement = {
  title: string;
  image: Image;
  date: string;
  category: {
    data: {
      attributes: {
        category: string;
        link: string;
      };
    };
  };
  link: string;
  content: string;
};

declare type BlogPage = BlogElement & {
  page_desc: string;
};
