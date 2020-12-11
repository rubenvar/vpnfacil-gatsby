import React from 'react';
import { Link } from 'gatsby';

import PropTypes from 'prop-types';
import {
  IconCertificate,
  IconLanguage,
  IconDevices2,
  IconFileShredder,
  IconFileSearch,
  IconCloudDownload,
} from '@tabler/icons';

import StarRating from '@rubenvara/react-star-rating';
import StyledCard from './styles/StyledCard';
import CardNumbers from './CardNumbers';

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
  const primary500 = 'hsl(270, 75%, 70%)';

  const numbers = { countries, servers, devices };

  let spanish = false;
  if (appLanguage && appLanguage.includes('spanish')) spanish = true;

  return (
    <StyledCard color={color}>
      <img src={`/logos/${code}.jpg`} alt={`logo de ${name}`} />
      <h2>
        <Link to={`/vpn/${slug}/`}>{name}</Link>
      </h2>
      <CardNumbers numbers={numbers} />
      <ul>
        {hasMoneyBack && (
          <li>
            <IconCertificate color={primary500} />
            {hasMoneyBack === 'yes' && (
              <span>
                Garantía{' '}
                <span className="tag">
                  de devolución{moneyBackDays ? ` ${moneyBackDays} días` : ''}
                </span>
              </span>
            )}
            {hasMoneyBack === 'no' && (
              <span>
                Sin garantía <span className="tag">de devolución</span>
              </span>
            )}
          </li>
        )}

        {appLanguage && (
          <li>
            <IconLanguage color={primary500} />
            {spanish ? (
              <span>
                <span className="tag">Disponible en </span>español
              </span>
            ) : (
              <span>
                <span className="tag">Solo en</span> inglés
              </span>
            )}
          </li>
        )}

        {compatIndex && (
          <li>
            <IconDevices2 color={primary500} />
            <span>
              <span className="tag">Compatibilidad</span>{' '}
              {compatIndex < 6
                ? 'baja'
                : compatIndex > 5 && compatIndex < 12
                ? 'media'
                : 'alta'}
            </span>
          </li>
        )}

        {hasNoLogs && (
          <li>
            {hasNoLogs === 'yes' && (
              <>
                <IconFileShredder color={primary500} />
                <span>No guarda logs</span>
              </>
            )}
            {hasNoLogs === 'no' && (
              <>
                <IconFileSearch color={primary500} />
                <span>Puede guardar logs</span>
              </>
            )}
          </li>
        )}

        {hasP2P && (
          <li>
            {hasP2P === 'yes' && (
              <>
                <IconCloudDownload color={primary500} />
                <span>Compatible con P2P</span>
              </>
            )}
            {hasP2P === 'no' && (
              <>
                <IconCloudDownload color={primary500} />
                <span>No compatible con P2P</span>
              </>
            )}
          </li>
        )}

        {rating && (
          <StarRating
            rating={rating / 20}
            config={{
              fullColor: '#ffc107',
              emptyColor: '#777',
              showText: true,
            }}
            style={{ justifyContent: 'center', margin: '20px 0 0' }}
          />
        )}
      </ul>

      {slug && (
        <Link to={`/vpn/${slug}/`} title={`Ir a ${name}`}>
          <div className="go">
            <span>Ver más info</span>
          </div>
        </Link>
      )}
    </StyledCard>
  );
}

Card.propTypes = {
  vpn: PropTypes.shape({
    appLanguage: PropTypes.string,
    code: PropTypes.string.isRequired,
    color: PropTypes.string,
    compatIndex: PropTypes.string,
    countries: PropTypes.number,
    devices: PropTypes.string,
    hasMoneyBack: PropTypes.string,
    hasNoLogs: PropTypes.string,
    hasP2P: PropTypes.string,
    moneyBackDays: PropTypes.string,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number,
    servers: PropTypes.number,
    slug: PropTypes.string.isRequired,
  }),
};
