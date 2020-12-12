import React from 'react';
import { graphql } from 'gatsby';
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

export default function SingleVpn({ data }) {
  const { vpn } = data;
  const allVpns = data.vpns.nodes;

  const testExists = false;
  const reviewExists = false;
  const technicalExists =
    !!vpn.protocolsList || !!vpn.hasSocks5 || !!vpn.moreServices;
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
        code={vpn.code}
        testExists={testExists}
        reviewExists={reviewExists}
        technicalExists={technicalExists}
        pricingExists={pricingExists}
      />
      <Ratings vpn={vpn} />
      <Numbers vpn={vpn} vpns={allVpns} />
      <Languages vpn={vpn} vpns={allVpns} />
      <Warranty vpn={vpn} vpns={allVpns} />
      <Compatible vpn={vpn} vpns={allVpns} />
      {testExists && <SingleSection>Tests...</SingleSection>}
      <Details vpn={vpn} vpns={allVpns} />
      {technicalExists && (
        <Technical
          name={vpn.name}
          hasSocks5={vpn.hasSocks5}
          moreServices={vpn.moreServices}
          protocolsList={vpn.protocolsList}
          vpns={allVpns}
        />
      )}
      {pricingExists && <Pricing vpn={vpn} />}
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    vpn: googleListSheet(slug: { eq: $slug }) {
      id
      name
      code
      slug
      description
      color
      link
      baseLink
      screenshot
      privacyRating
      priceRating
      speedRating
      supportRating
      featuresRating
      useRating
      rating
      locations
      servers
      hasServersPlus
      ips
      hasIpsPlus
      countries
      hasCountriesPlus
      devices
      hasMoneyBack
      moneyBackDays
      hasFreeTrial
      freeTrialDays
      uiLanguage
      appLanguage
      supportLanguage
      platforms
      hasBrowserPlugins
      browserList
      hasRouters
      hasNas
      hasSocks5
      compatList
      compatIndex
      servicesList
      updated
      hasP2P
      hasBusiness
      hasStudents
      hasNoLogs
      hasAnonPay
      hasCryptoPay
      cryptoList
      protocolsList
      basedIn
      plan1Length
      plan1Pricing
      plan2Length
      plan2Pricing
      plan3Length
      plan3Pricing
      planCurrency
    }
    vpns: allGoogleListSheet {
      nodes {
        name
        code
        servers
        ips
        countries
        locations
        devices
        uiLanguage
        appLanguage
        supportLanguage
        hasMoneyBack
        hasFreeTrial
        compatIndex
        hasP2P
        hasBusiness
        hasStudents
        hasNoLogs
        hasAnonPay
        hasCryptoPay
        hasSocks5
      }
    }
  }
`;

SingleVpn.propTypes = {
  data: PropTypes.shape({
    vpn: PropTypes.shape({
      code: PropTypes.string.isRequired,
      description: PropTypes.string,
      moreServices: PropTypes.string,
      name: PropTypes.string.isRequired,
      plan3Pricing: PropTypes.string,
      protocolsList: PropTypes.string,
      slug: PropTypes.string.isRequired,
      hasSocks5: PropTypes.string,
    }).isRequired,
    vpns: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  }),
};
