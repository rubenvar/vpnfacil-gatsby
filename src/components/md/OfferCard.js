import React from 'react';
import PropTypes from 'prop-types';
import StarRating from '@rubenvara/react-star-rating';

import { formatMoney } from '../../utils';
import { StyledOfferCard } from './OfferStyles';

export default function OfferCard({ vpn, subtitle, comment }) {
  return (
    <StyledOfferCard>
      <h3 className="title">
        {vpn.name}: {subtitle}
      </h3>
      <div className="info">
        <div className="text">
          <ul>
            <li>
              <span className="tag">Descuento: </span>
              {Math.round(100 - (vpn.plan3Pricing * 100) / vpn.plan1Pricing)}%
            </li>
            <li>
              <span className="tag">Precio por mes: </span>
              {formatMoney(vpn.plan3Pricing, vpn.planCurrency)}
            </li>
            <li>
              <span className="tag">Duración: </span> {vpn.plan3Length / 12}{' '}
              años
            </li>
            <li>
              <span className="tag">Total que pagas ahora: </span>
              {formatMoney(
                vpn.plan3Pricing * vpn.plan3Length,
                vpn.planCurrency
              )}
            </li>
          </ul>
          {comment && <p>{comment}</p>}
        </div>
        <div className="details">
          <a href={vpn.link} target="_blank" rel="noreferrer nofollow">
            <img src={`/logos/${vpn.code}.jpg`} alt={`Logo de ${vpn.name}`} />
          </a>
          <StarRating
            rating={vpn.rating / 20}
            config={{
              fullColor: '#ffc107',
              emptyColor: '#7f7f7f',
              size: 30,
              showText: true,
            }}
          />

          <a href={vpn.link} target="_blank" rel="noreferrer nofollow">
            <button type="button">
              Ver oferta <strong>actualizada</strong>
            </button>
          </a>
        </div>
      </div>
    </StyledOfferCard>
  );
}

OfferCard.propTypes = {
  comment: PropTypes.string,
  subtitle: PropTypes.string,
  vpn: PropTypes.shape({
    code: PropTypes.string,
    link: PropTypes.string,
    name: PropTypes.string,
    plan1Pricing: PropTypes.string,
    plan3Length: PropTypes.string,
    plan3Pricing: PropTypes.string,
    planCurrency: PropTypes.string,
    rating: PropTypes.number,
  }),
};
