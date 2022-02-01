import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import scrollTo from 'gatsby-plugin-smoothscroll';
import styled from 'styled-components';
import { IconChevronDown } from '@tabler/icons';

const StyledHero = styled.section`
  background: hsla(270, 70%, 25%, 0.65);
  padding: 2em;
  padding-top: calc(2em + var(--headerHeight));
  margin-top: calc(-1 * var(--headerHeight));
  padding-bottom: 1.5em;
  text-align: center;
  position: relative;

  /* position the gatsby-created-image in the bg */
  .image-wrapper {
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

  button {
    margin: 0 auto;
    cursor: pointer;
    svg {
      animation: down 2s infinite ease-in-out;
    }
    /* try to style button as no-button */
    background: none;
    box-shadow: none;
    padding: 0;
    border: none;
    &:focus {
      border-radius: var(--buttonRadius);
      box-shadow: 0 0 0 2px var(--secondary300);
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
  return (
    <StyledHero className="hero">
      <StaticImage
        src="../images/bg.jpg"
        alt="Consigue aquí el mejor VPN"
        loading="eager"
        layout="fullWidth"
        className="image-wrapper"
      />
      <p>
        Necesitas un VPN para ser <strong>libre</strong> en internet
      </p>
      <p>
        Hay muchas opciones, pero aquí lo tienes <strong>fácil</strong>
      </p>
      <button
        className="down"
        onClick={() => scrollTo('#vpnBar')}
        type="button"
      >
        <IconChevronDown color="white" stroke={1} size={100} />
      </button>
    </StyledHero>
  );
}
