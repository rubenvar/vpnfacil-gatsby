import React from 'react';
import PropTypes from 'prop-types';

import List from '../components/List';
import Layout from '../components/Layout';

export default function AllVpns({ pageContext: { allVpns } }) {
  // console.log(allVpns);
  if (!allVpns) return <p>what</p>;
  return (
    <Layout>
      <List vpns={allVpns} />
    </Layout>
  );
}

AllVpns.propTypes = {
  pageContext: PropTypes.object,
};
