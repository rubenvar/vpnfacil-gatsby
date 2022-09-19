import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

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

export default function PostTemplate({ data, children }) {
  const { seoTitle, title, excerpt, slug, textDate, rawDate } =
    data.post.frontmatter;
  return (
    <>
      <Helmet>
        <title>{seoTitle || `${title} ~ VPNFácil`}</title>
        <meta name="description" content={excerpt} />
        <link rel="canonical" href={`https://vpnfacil.com/guias/${slug}/`} />
        <meta property="og:title" content={seoTitle || title} />
      </Helmet>
      <StyledPost>
        <header>
          <h1>{title}</h1>
          <p>
            Actualizado: <time dateTime={rawDate}>{textDate}</time>
          </p>
        </header>
        <article className="blog-post">{children}</article>
      </StyledPost>
    </>
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
