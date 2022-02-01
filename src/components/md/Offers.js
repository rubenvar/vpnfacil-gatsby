import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import OfferCard from './OfferCard';

const texts = {
  F001: {
    subtitle: '🚀 el más rápido',
    comment:
      'O sea, pagas ahora 78,85 euros (en vez de 254€) y tienes VPN para dos años!',
  },
  F004: {
    subtitle: '🎁 te regalan 3 meses',
    comment: 'Por 70€ (en lugar de 455) tienes una de las mejores VPN para 3 años enteros',
  },
  F019: {
    subtitle: '💰 más Barato',
    comment: 'Pagas ahora 53 euritos, y tienes VPN para 2 añazos (+2 meses)',
  },
};

const vpnQuery = graphql`
  query {
    vpns: allGoogleListSheet(
      filter: { code: { in: ["F001", "F019", "F004"] } }
      sort: { fields: plan3Pricing, order: DESC }
    ) {
      nodes {
        name
        code
        link
        plan1Pricing
        planCurrency
        plan3Length
        plan3Pricing
        rating
      }
    }
  }
`;

export default function Offers() {
  const data = useStaticQuery(vpnQuery);
  const vpns = data.vpns.nodes;

  if (!vpns)
    return (
      <p style={{ color: 'grey', fontStyle: 'italic' }}>Cargando ofertas...</p>
    );

  return (
    <>
      {vpns.map((vpn) => (
        <OfferCard
          key={vpn.code}
          vpn={vpn}
          subtitle={texts[vpn.code].subtitle}
          comment={texts[vpn.code].comment}
        />
      ))}
    </>
  );
}
