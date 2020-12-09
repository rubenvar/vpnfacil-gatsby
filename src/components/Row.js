import React from 'react';
import PropTypes from 'prop-types';

import StarRating from './StarRating';
import StyledRowLink from './styles/StyledRow';
import { formatNumber } from '../utils';

export default function Card({ vpn }) {
  const {
    countries,
    servers,
    devices,
    id,
    color,
    slug,
    name,
    moneyBack,
    moneyBackDays,
    appLanguage,
    compatIndex,
    noLogs,
    p2p,
    rating,
  } = vpn;

  let spanish = false;
  if (appLanguage && appLanguage.includes('spanish')) spanish = true;

  return (
    <StyledRowLink to={`/vpn/${slug}/`} color={color}>
      <img src={`/logos/${id}.jpg`} alt={`logo de ${name}`} />

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

        {moneyBack === 'yes' && (
          <span className="info">
            ✅ {moneyBackDays} <span className="tag">días</span>
          </span>
        )}
        {moneyBack === 'no' && <span className="info">❌ No</span>}
        {!moneyBack && <span className="info">-</span>}

        {appLanguage !== '' ? (
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

        {noLogs === 'yes' && <span className="info">✅ No</span>}
        {noLogs === 'no' && <span className="info">❌ Quizás</span>}
        {!noLogs && <span className="info">-</span>}

        {p2p === 'yes' && <span className="info">✅ Sí</span>}
        {p2p === 'no' && <span className="info">❌ No</span>}
        {!p2p && <span className="info">-</span>}
      </div>
    </StyledRowLink>
  );
}

Card.propTypes = {
  vpn: PropTypes.object,
};
