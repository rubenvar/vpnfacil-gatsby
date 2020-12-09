import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

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
  const tests = false;
  const review = false;
  const technicalExists =
    vpn.protocolsList !== '' || vpn.socks5 !== '' || vpn.moreList !== '';
  const pricingExists = !!vpn.plan3Pricing;

  const title = `${
    vpn.name
  }: Revisión y Detalles para Elegir en ${new Date().getFullYear()} ~ VPNFácil`;
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={vpn.description} />
        <link rel="canonical" href={`https://vpnfacil.com/vpn/${vpn.slug}/`} />
        <meta property="og:title" content={title} />
      </Helmet>
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
    </>
  );
}

SingleVpn.propTypes = {
  pageContext: PropTypes.object,
};
