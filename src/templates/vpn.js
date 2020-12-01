import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';

export default function SingleVpn({ pageContext: { vpn } }) {
  const { name } = vpn;
  return (
    <Layout>
      <h1>{name}</h1>
    </Layout>
  );
}

SingleVpn.propTypes = {
  pageContext: PropTypes.object,
};
