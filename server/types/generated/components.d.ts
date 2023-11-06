import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsBlockComponent extends Schema.Component {
  collectionName: 'components_components_block_components';
  info: {
    displayName: 'block-component';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    desc: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface ComponentsBlogComponent extends Schema.Component {
  collectionName: 'components_components_blog_components';
  info: {
    displayName: 'blog-component';
    description: '';
  };
  attributes: {
    title: Attribute.Text & Attribute.Required;
    image: Attribute.Media;
    date: Attribute.String;
    link: Attribute.String;
  };
}

export interface ComponentsDetailedHero extends Schema.Component {
  collectionName: 'components_components_detailed_heroes';
  info: {
    displayName: 'detailed-hero';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    desc: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface ComponentsFeatures extends Schema.Component {
  collectionName: 'components_components_features';
  info: {
    displayName: 'features';
  };
  attributes: {
    desc: Attribute.String;
    image: Attribute.Media;
  };
}

export interface ComponentsProductInfoComponent extends Schema.Component {
  collectionName: 'components_components_product_info_components';
  info: {
    displayName: 'product-info-component';
  };
  attributes: {
    name: Attribute.String;
    buy_link: Attribute.String;
  };
}

export interface ComponentsRichSpecs extends Schema.Component {
  collectionName: 'components_components_rich_specs';
  info: {
    displayName: 'rich_specs';
    description: '';
  };
  attributes: {
    sub_spec: Attribute.Component<'particle.spec-comp', true>;
  };
}

export interface ComponentsStringList extends Schema.Component {
  collectionName: 'components_components_string_lists';
  info: {
    displayName: 'string-list';
  };
  attributes: {
    spec: Attribute.Text;
  };
}

export interface ComponentsUnitComponent extends Schema.Component {
  collectionName: 'components_components_unit_components';
  info: {
    displayName: 'unit-component';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
    desc: Attribute.Text;
    link: Attribute.String;
    link_text: Attribute.String;
    mobile_image: Attribute.Media;
  };
}

export interface ParticleLocateContent extends Schema.Component {
  collectionName: 'components_particle_locate_contents';
  info: {
    displayName: 'locate_content';
  };
  attributes: {
    contents: Attribute.RichText;
    title: Attribute.String;
  };
}

export interface ParticleSpecComp extends Schema.Component {
  collectionName: 'components_particle_spec_comps';
  info: {
    displayName: 'spec_comp';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    features: Attribute.Component<'components.string-list', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.block-component': ComponentsBlockComponent;
      'components.blog-component': ComponentsBlogComponent;
      'components.detailed-hero': ComponentsDetailedHero;
      'components.features': ComponentsFeatures;
      'components.product-info-component': ComponentsProductInfoComponent;
      'components.rich-specs': ComponentsRichSpecs;
      'components.string-list': ComponentsStringList;
      'components.unit-component': ComponentsUnitComponent;
      'particle.locate-content': ParticleLocateContent;
      'particle.spec-comp': ParticleSpecComp;
    }
  }
}
