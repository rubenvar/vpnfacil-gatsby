import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import {
  Top,
  Nav,
  Ratings,
  Numbers,
  Languages,
  Warranty,
  Compatible,
  Details,
} from '../components/single';

export default function SingleVpn({ pageContext: { vpn, allVpns } }) {
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
      <Numbers vpn={vpn} vpns={allVpns} />
      <Languages vpn={vpn} vpns={allVpns} />
      <Warranty vpn={vpn} vpns={allVpns} />
      <Compatible vpn={vpn} vpns={allVpns} />
      <Details vpn={vpn} vpns={allVpns} />
    </Layout>
  );
}

SingleVpn.propTypes = {
  pageContext: PropTypes.object,
};
