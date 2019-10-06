import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';

import { graphql, useStaticQuery } from 'gatsby';

export interface IMetadataProps {
  description?: string;
  lang?: string;
  meta?: Array<
    | {
        content: string;
        name: string;
      }
    | {
        content: string;
        property: string;
      }
  >;
  title: string;
}

const defaultProps: IMetadataProps = {
  description: '',
  lang: 'en',
  meta: [],
  title: '',
};

const Metadata = ({
  description,
  lang,
  meta,
  title,
}: IMetadataProps): ReactElement => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;

  const metadata = [
    {
      content: metaDescription,
      name: 'description',
    },
    {
      content: title,
      property: 'og:title',
    },
    {
      content: metaDescription,
      property: 'og:description',
    },
    {
      content: 'website',
      property: 'og:type',
    },
    {
      content: 'summary',
      name: 'twitter:card',
    },
    {
      content: site.siteMetadata.author,
      name: 'twitter:creator',
    },
    {
      content: title,
      name: 'twitter:title',
    },
    {
      content: metaDescription,
      name: 'twitter:description',
    },
  ];

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={meta ? metadata.concat(meta) : metadata}
    />
  );
};

Metadata.defaultProps = defaultProps;

export default Metadata;
