import React from 'react';
import PropTypes from 'prop-types';
import StarRating from '@rubenvara/react-star-rating';

import StyledRowLink from './styles/StyledRow';
import { formatNumber } from '../utils';

export default function Card({ vpn }) {
  const {
    countries,
    servers,
    devices,
    code,
    color,
    slug,
    name,
    hasMoneyBack,
    moneyBackDays,
    appLanguage,
    compatIndex,
    hasNoLogs,
    hasP2P,
    rating,
  } = vpn;

  let spanish = false;
  if (appLanguage && appLanguage.includes('spanish')) spanish = true;

  return (
    <StyledRowLink to={`/vpn/${slug}/`} color={color}>
      <img src={`/logos/${code}.jpg`} alt={`logo de ${name}`} />

      <div className="title">
        <h2>{name}</h2>
        {rating && (
          <StarRating
            rating={rating / 20}
            config={{ fullColor: '#ffd65a', emptyColor: '#a9a9a9', size: 15 }}
            style={{ justifyContent: 'center', margin: '7px 0' }}
          />
        )}
      </div>

      <div className="all-details">
        {countries ? (
          <span className="info">{formatNumber(countries)}</span>
        ) : (
          <span className="info">-</span>
        )}

        {servers ? (
          <span className="info">{formatNumber(servers)}</span>
        ) : (
          <span className="info">-</span>
        )}

        {devices ? (
          <span className="info">
            {devices === 'unlimited' ? '∞' : devices}
          </span>
        ) : (
          <span className="info">-</span>
        )}

        {hasMoneyBack === 'yes' && (
          <span className="info">
            ✅ {moneyBackDays} <span className="tag">días</span>
          </span>
        )}
        {hasMoneyBack === 'no' && <span className="info">❌ No</span>}
        {!hasMoneyBack && <span className="info">-</span>}

        {appLanguage ? (
          <span className="info">{spanish ? 'español' : 'inglés'}</span>
        ) : (
          <span className="info">-</span>
        )}

        {compatIndex ? (
          <span className="info">
            {compatIndex < 6
              ? 'baja'
              : compatIndex > 5 && compatIndex < 12
              ? 'media'
              : 'alta'}
          </span>
        ) : (
          <span className="info">-</span>
        )}

        {hasNoLogs === 'yes' && <span className="info">✅ No</span>}
        {hasNoLogs === 'no' && <span className="info">❌ Quizás</span>}
        {!hasNoLogs && <span className="info">-</span>}

        {hasP2P === 'yes' && <span className="info">✅ Sí</span>}
        {hasP2P === 'no' && <span className="info">❌ No</span>}
        {!hasP2P && <span className="info">-</span>}
      </div>
    </StyledRowLink>
  );
}

Card.propTypes = {
  vpn: PropTypes.shape({
    appLanguage: PropTypes.string,
    code: PropTypes.string.isRequired,
    color: PropTypes.string,
    compatIndex: PropTypes.number,
    countries: PropTypes.number,
    devices: PropTypes.string,
    hasMoneyBack: PropTypes.string,
    hasNoLogs: PropTypes.string,
    hasP2P: PropTypes.string,
    moneyBackDays: PropTypes.number,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number,
    servers: PropTypes.number,
    slug: PropTypes.string.isRequired,
  }),
};
