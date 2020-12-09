import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { awsConfig } from '../../../config';
import OfferCard from './OfferCard';

const texts = {
  F001: {
    subtitle: '💰 70% descuento',
    comment:
      'O sea, pagas ahora 112 euros (en vez de 383€) y tienes VPN para tres años!',
  },
  F004: {
    subtitle: '🎁 te regalan 2 meses',
    comment: 'Por 60 euros tienes una de las mejores VPN para dos años enteros',
  },
  F019: {
    subtitle: '🚀 el más Barato',
    comment: 'Pagas ahora 40 euritos, y tienes VPN para 2 añazos',
  },
};

export default function Offers() {
  const [vpns, setVpns] = useState(null);

  useEffect(() => {
    const getVpns = () => {
      axios.get(process.env.ENDPOINT, awsConfig).then((res) => {
        const allVpns = [...res.data.body];
        // get the vpns that match ids from id array
        const topIds = ['F001', 'F004', 'F019'];
        const topVpns = allVpns.filter((vpn) =>
          topIds.some((id) => id === vpn.id)
        );
        // mabe not the most efficient way, but the number of items in arrays is really small 🤷‍♂️

        setVpns(topVpns);
      });
    };
    getVpns();
  }, []);

  if (!vpns)
    return (
      <p style={{ color: 'grey', fontStyle: 'italic' }}>Cargando ofertas...</p>
    );

  return (
    <>
      {vpns.map((vpn, i) => (
        <OfferCard
          key={i}
          vpn={vpn}
          subtitle={texts[vpn.id].subtitle}
          comment={texts[vpn.id].comment}
        />
      ))}
    </>
  );
}
