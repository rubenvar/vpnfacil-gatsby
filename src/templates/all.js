import React from 'react';
import PropTypes from 'prop-types';

import List from '../components/List';
import Layout from '../components/Layout';
import Hero from '../components/Hero';

export default function AllVpns({ pageContext: { allVpns } }) {
  return (
    <Layout>
      <Hero />
      <List vpns={allVpns} />
    </Layout>
  );
}

AllVpns.propTypes = {
  pageContext: PropTypes.object,
};
