/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/SEO';

const StyledPost = styled.div`
  max-width: 100%;
  margin-left: 20px;
  margin-right: 20px;
  @media only screen and (min-width: 760px) {
    max-width: var(--maxWidthBlog);
    margin: 0 auto;
  }
  header {
    margin: 30px 0 40px;
    @media only screen and (min-width: 760px) {
      margin-top: 50px;
    }
    h1 {
      margin-bottom: 12px;
      font-family: var(--specialFont);
      font-weight: 400;
      color: var(--primary600);
      font-size: 32px;
      @media only screen and (min-width: 640px) {
        font-size: 46px;
      }
    }
    p {
      color: var(--grey300);
      margin: 0;
    }
  }
  article {
    font-size: 18px;
    line-height: 1.65;
    @media only screen and (min-width: 640px) {
      font-size: 20px;
    }
  }
`;

export function Head({ data }) {
  const { seoTitle, title, excerpt, slug } = data.post.frontmatter;

  return (
    <SEO>
      <title id="title">{seoTitle || `${title} ~ VPNFácil`}</title>
      <meta id="description" name="description" content={excerpt} />
      <link
        id="canonical"
        rel="canonical"
        href={`https://vpnfacil.com/guias/${slug}/`}
      />
      <meta id="ogTitle" property="og:title" content={seoTitle || title} />
      <meta
        id="ogUrl"
        property="og:url"
        content={`https://vpnfacil.com/guias/${slug}/`}
      />
      <meta id="ogDescription" property="og:description" content={excerpt} />
    </SEO>
  );
}

export default function PostTemplate({ data, children }) {
  const { title, textDate, rawDate } = data.post.frontmatter;

  return (
    <StyledPost>
      <header>
        <h1>{title}</h1>
        <p>
          Actualizado: <time dateTime={rawDate}>{textDate}</time>
        </p>
      </header>
      <article className="blog-post">{children}</article>
    </StyledPost>
  );
}

PostTemplate.propTypes = {
  data: PropTypes.object,
  children: PropTypes.object,
};

export const pageQuery = graphql`
  query ($slug: String!) {
    post: mdx(frontmatter: { slug: { eq: $slug } }) {
      id
      frontmatter {
        textDate: date(formatString: "D [de] MMMM, YYYY", locale: "es-ES")
        rawDate: date(formatString: "YYYY-MM-DD")
        slug
        title
        seoTitle
        excerpt
      }
    }
  }
`;
