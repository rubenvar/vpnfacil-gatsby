import React from 'react';
import { IconChevronDown } from '@tabler/icons';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import scrollTo from 'gatsby-plugin-smoothscroll';

const StyledHero = styled.section`
  background: hsla(270, 70%, 25%, 0.65);
  padding: 2em;
  padding-top: calc(2em + var(--headerHeight));
  margin-top: calc(-1 * var(--headerHeight));
  padding-bottom: 1.5em;
  text-align: center;
  position: relative;

  .gatsby-image-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
  }

  p {
    color: white;
    margin-top: 0;
    transition: font-size 0.3s;
    font-size: 24px;
    @media only screen and (min-width: 560px) {
      font-size: 32px;
    }
    @media only screen and (min-width: 768px) {
      font-size: 36px;
    }
    @media only screen and (min-width: 1024px) {
      font-size: 42px;
    }
  }

  span {
    margin: 0 auto;
    cursor: pointer;
    svg {
      animation: down 2s infinite ease-in-out;
    }
  }

  @keyframes down {
    0% {
      transform: translateY(0);
    }
    6% {
      transform: translateY(10px);
    }
    12% {
      transform: translateY(0);
    }
    18% {
      transform: translateY(10px);
    }
    24% {
      transform: translateY(0);
    }
  }
`;

export default function Hero() {
  const data = useStaticQuery(graphql`
    query {
      backgroundImage: file(relativePath: { eq: "bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    // <div class="hero" style="--hero-bg: url({bg})">
    <StyledHero className="hero">
      <Img
        style={{ position: 'absolute' }}
        fluid={data.backgroundImage.childImageSharp.fluid}
      />
      <p>
        Necesitas un VPN para ser <strong>libre</strong> en internet
      </p>
      <p>
        Hay muchas opciones, pero aquí lo tienes <strong>fácil</strong>
      </p>
      <span className="down" onClick={() => scrollTo('#list')}>
        <IconChevronDown color="white" stroke={1} size={100} />
      </span>
    </StyledHero>
  );
}
