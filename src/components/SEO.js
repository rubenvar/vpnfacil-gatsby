import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          color
          author
          siteUrl
        }
      }
    }
  `);
  const { title, description, color, author, siteUrl } = data.site.siteMetadata;

  return (
    <Helmet>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="theme-color" content={color} />
      <link rel="shortcut icon" href={`${siteUrl}/favicon.png`} />
      <link rel="canonical" href={`${siteUrl}/`} />

      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${siteUrl}/imgs/vpn-facil.png`} />
      <meta property="og:url" content={`${siteUrl}/`} />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:description" content={description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={author} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={`${siteUrl}/vpn-facil.png`} />
      <meta name="twitter:image:alt" content="VPN Fácil" />
    </Helmet>
  );
}
