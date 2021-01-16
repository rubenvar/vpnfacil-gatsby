import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import OfferCard from './OfferCard';

const texts = {
  F001: {
    subtitle: '💰 69% descuento',
    comment:
      'O sea, pagas ahora 75,60 euros (en vez de 244€) y tienes VPN para dos años!',
  },
  F004: {
    subtitle: '🎁 te regalan 2 meses',
    comment: 'Por 60 euros tienes una de las mejores VPN para dos años enteros',
  },
  F019: {
    subtitle: '🚀 el más Barato',
    comment: 'Pagas ahora menos de 50 euritos, y tienes VPN para 2 añazos',
  },
};

const vpnQuery = graphql`
  query {
    vpns: allGoogleListSheet(
      filter: { code: { in: ["F001", "F004", "F019"] } }
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
