import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledHeader = styled.header`
  position: relative;
  z-index: 99;
  .inner {
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 0 var(--defSidePadding);
    height: var(--headerHeight);
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1,
    h2 {
      font-size: 26px;
      margin: 0;
      font-family: 'Audiowide', cursive;
      a {
        text-decoration: none;
        opacity: 0.5;
        transition: all 0.3s;
        color: var(--secondary300);
        &:hover {
          opacity: 0.95;
        }
      }
    }
  }
`;

const Nav = styled.nav`
  height: 100%;
  display: flex;
  font-size: 20px;
  align-items: center;
  ul {
    display: none;
    width: 100%;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    @media only screen and (min-width: 767px) {
      display: flex;
    }
    &.mobile {
      background-color: #fffd;
      position: fixed;
      display: block;
      height: calc(100% - var(--headerHeight));
      bottom: 0;
      left: 0;
      z-index: 99;
    }
    li {
      list-style-type: none;
      position: relative;
      padding: 0 0 0 20px;
      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #ccc;
        @media only screen and (min-width: 767px) {
          display: none;
        }
      }
      a {
        text-decoration: none;
        display: flex;
        height: 45px;
        align-items: center;
        padding: 0 10px;
        color: var(--primary500);
        transition: all 0.3s;
        &:hover {
          color: var(--secondary300);
        }
        @media only screen and (min-width: 767px) {
          display: inline-flex;
          color: var(--primary300);
        }
      }
    }
  }
`;

export default function Header({ isIndex }) {
  return (
    <StyledHeader>
      <div className="inner">
        {isIndex ? (
          <h1>
            <Link to="/">VPN Fácil</Link>
          </h1>
        ) : (
          <h2>
            <Link to="/">VPN Fácil</Link>
          </h2>
        )}
        <Nav>
          <ul>
            <li>
              <Link to="/guias/ofertas-vpn-2020/">Mejores Ofertas 2020</Link>
            </li>
            <li>
              <Link to="/guias/">Guias</Link>
            </li>
            <li>
              <Link to="/guias/preguntas-frecuentes/">FAQ</Link>
            </li>
          </ul>
        </Nav>
      </div>
    </StyledHeader>
  );
}

Header.propTypes = {
  isIndex: PropTypes.bool,
};
