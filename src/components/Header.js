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
        {/* <nav>
          <Link to="/all">Todos</Link>
          <Link to="/blog">Blog</Link>
        </nav> */}
      </div>
    </StyledHeader>
  );
}

Header.propTypes = {
  isIndex: PropTypes.bool,
};
