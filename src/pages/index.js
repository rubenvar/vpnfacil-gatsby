import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Hero from '../components/Hero';
import Bar from '../components/Bar';
import List from '../components/List';
import SEO from '../components/SEO';

export default function AllVpns({ data }) {
  const allVpns = data.allGoogleListSheet.nodes;

  return (
    <>
      <Hero />
      <Bar total={allVpns.length} />
      <List vpns={allVpns} />
    </>
  );
}

export const Head = () => <SEO />;

export const query = graphql`
  query {
    allGoogleListSheet {
      nodes {
        name
        code
        color
        slug
        servers
        devices
        countries
        rating
        hasMoneyBack
        moneyBackDays
        appLanguage
        compatIndex
        hasNoLogs
        hasP2P
        rating
      }
    }
  }
`;

AllVpns.propTypes = {
  data: PropTypes.object,
};
