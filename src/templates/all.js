import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Bar from '../components/Bar';
import List from '../components/List';

export default function AllVpns({ location, pageContext: { allVpns, count } }) {
  return (
    <Layout location={location}>
      <Hero />
      <Bar total={count} />
      <List vpns={allVpns} />
    </Layout>
  );
}

AllVpns.propTypes = {
  location: PropTypes.object,
  pageContext: PropTypes.object,
};
