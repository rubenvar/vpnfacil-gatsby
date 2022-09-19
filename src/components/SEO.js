import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

export default function SEO({ children }) {
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
    <>
      {/* <html lang="es" /> */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="theme-color" content={color} />
      <link rel="shortcut icon" href={`${siteUrl}/favicon.png`} />
      <link id="canonical" rel="canonical" href={`${siteUrl}/`} />

      <title id="title">{title}</title>
      <meta id="description" name="description" content={description} />

      <meta id="ogTitle" property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${siteUrl}/vpnfacil.png`} />
      <meta id="ogUrl" property="og:url" content={`${siteUrl}/`} />
      <meta property="og:locale" content="es_ES" />
      <meta
        id="ogDescription"
        property="og:description"
        content={description}
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={author} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={`${siteUrl}/vpnfacil.png`} />
      <meta name="twitter:image:alt" content="VPN Fácil" />
      {children}
    </>
  );
}

SEO.propTypes = {
  children: PropTypes.array,
};
