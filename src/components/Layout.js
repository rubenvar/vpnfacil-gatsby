import React from 'react';
import PropTypes from 'prop-types';
import 'normalize.css';

import GlobalStyle from './styles/GlobalStyle';
import Header from './Header';

export default function Layout({ location, children }) {
  return (
    <>
      <GlobalStyle />
      <Header isIndex={location?.pathname === '/'} />
      <main id="main">{children}</main>
    </>
  );
}

Layout.propTypes = {
  location: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
