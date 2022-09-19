import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const StyledListed = styled.article`
  margin-bottom: 40px;
  @media only screen and (min-width: 640px) {
    margin-bottom: 52px;
  }
  h2 {
    font-family: var(--specialFont);
    font-weight: 700;
    font-size: 21px;
    display: inline;
    @media only screen and (min-width: 640px) {
      font-size: 22px;
    }
    a {
      color: var(--primary600);
      transition: all 0.3s;
      text-decoration: none;
      &:hover {
        color: var(--secondary300);
      }
    }
  }
  span {
    margin: 0 5px;
  }
  span,
  .excerpt {
    color: var(--grey500);
    font-size: 18px;
    display: inline;
    line-height: 1.7;
    @media only screen and (min-width: 640px) {
      font-size: 20px;
    }
  }
`;

function ListedPost({ post }) {
  return (
    <StyledListed>
      <h2>
        <Link to={`/guias/${post.frontmatter.slug}/`}>
          {post.frontmatter.title}
        </Link>
      </h2>
      {post.frontmatter.excerpt && (
        <>
          <span>—</span>
          <p className="excerpt">{post.frontmatter.excerpt}</p>
        </>
      )}
    </StyledListed>
  );
}

const PostList = styled.div`
  max-width: 100%;
  margin-left: 20px;
  margin-right: 20px;
  margin: 40px 20px;
  @media only screen and (min-width: 760px) {
    max-width: var(--maxWidthBlog);
    margin-left: auto;
    margin-right: auto;
  }
  h1 {
    font-size: 28px;
    margin-bottom: 40px;
    @media only screen and (min-width: 640px) {
      font-size: 36px;
      margin-bottom: 60px;
    }
  }
`;

export default function Blog({ data }) {
  if (!data) return <p>No hay posts... 🤷‍♂️</p>;

  const { totalCount, nodes: posts } = data.allPosts;
  return (
    <>
      <Helmet>
        <title>
          Guías Actualizadas sobre VPN y Seguridad Online ~ VPN Fácil
        </title>
        <meta
          name="description"
          content="Mira el Blog de VPN Fácil: Guías actualizadas sobre VPNs, proxys, cómo elegir e instalar el mejor VPN para ti..."
        />
        <link rel="canonical" href="https://vpnfacil.com/guias/" />
      </Helmet>
      <PostList>
        <h1>Todas las Guías ({totalCount}) sobre VPN:</h1>
        {posts && posts.map((post) => <ListedPost key={post.id} post={post} />)}
      </PostList>
    </>
  );
}

export const blogQuery = graphql`
  query blogQuery {
    allPosts: allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      nodes {
        id
        frontmatter {
          date(formatString: "YYYY-MM-DD")
          slug
          title
          excerpt
        }
      }
    }
  }
`;

Blog.propTypes = {
  data: PropTypes.object.isRequired,
};

ListedPost.propTypes = {
  post: PropTypes.shape({
    frontmatter: PropTypes.shape({
      excerpt: PropTypes.string,
      slug: PropTypes.string,
      title: PropTypes.string,
    }),
  }).isRequired,
};
