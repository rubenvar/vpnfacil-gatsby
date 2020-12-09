import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Nav from './Nav';
import { StyledHeader } from './styles/HeaderStyles';

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
        <Nav />
      </div>
    </StyledHeader>
  );
}

Header.propTypes = {
  isIndex: PropTypes.bool,
};
