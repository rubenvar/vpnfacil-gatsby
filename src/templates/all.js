import React from 'react';
import PropTypes from 'prop-types';

import Hero from '../components/Hero';
import Bar from '../components/Bar';
import List from '../components/List';

export default function AllVpns({ location, pageContext: { allVpns, count } }) {
  return (
    <>
      <Hero />
      <Bar total={count} />
      <List vpns={allVpns} />
    </>
  );
}

AllVpns.propTypes = {
  location: PropTypes.object,
  pageContext: PropTypes.object,
};
