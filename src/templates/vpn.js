import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import { Top, Nav, Ratings, Numbers } from '../components/single';

export default function SingleVpn({ pageContext: { vpn } }) {
  // const { name } = vpn;
  const tests = false;
  const review = false;

  const technicalExists =
    vpn.protocolsList !== '' || vpn.socks5 !== '' || vpn.moreList !== '';
  const pricingExists = !!vpn.plan3Pricing;
  return (
    <Layout>
      <Top vpn={vpn} />
      <Nav
        name={vpn.name}
        id={vpn.id}
        tests={tests}
        review={review}
        technicalExists={technicalExists}
        pricingExists={pricingExists}
      />
      <Ratings vpn={vpn} />
      <Numbers />
    </Layout>
  );
}

SingleVpn.propTypes = {
  pageContext: PropTypes.object,
};
