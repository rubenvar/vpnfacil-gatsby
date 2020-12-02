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
  Technical,
  Pricing,
} from '../components/single';
import SingleSection from '../components/single/Section';

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
      {tests && <SingleSection>Tests...</SingleSection>}
      <Details vpn={vpn} vpns={allVpns} />
      {technicalExists && <Technical vpn={vpn} vpns={allVpns} />}
      {pricingExists && <Pricing vpn={vpn} />}
    </Layout>
  );
}

SingleVpn.propTypes = {
  pageContext: PropTypes.object,
};
