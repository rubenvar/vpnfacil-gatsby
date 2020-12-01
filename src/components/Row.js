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
import StarRating from 'react-star-ratings';

import StyledRowLink from './styles/StyledRow';
import CardNumbers from './CardNumbers';
import { formatNumber } from '../utils';

export default function Card({ vpn }) {
  const {
    countries,
    servers,
    devices,
    id,
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
  const primary500 = 'hsl(270, 75%, 70%)';

  const numbers = { countries, servers, devices };

  let spanish = false;
  if (appLanguage && appLanguage.includes('spanish')) spanish = true;

  return (
    <StyledRowLink to={`/vpn/${slug}/`}>
      <img src={`/logos/${id}.jpg`} alt={`logo de ${name}`} />

      <div className="title">
        <h2>{name}</h2>
        {rating && (
          <StarRating
            rating={rating / 20}
            starRatedColor="#ffd65a"
            starEmptyColor="#a9a9a9"
            starDimension="15px"
            starSpacing="0px"
            name={id}
          />
          // <StarRating
          //   rating={rating / 20}
          //   config={{ fullColor: '#ffd65a', emptyColor: '#a9a9a9', size: 15 }}
          //   style="justify-content: center;margin: 7px 0;" />
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

      {/* <CardNumbers numbers={numbers} />
      <ul>
        {moneyBack && (
          <li>
            <IconCertificate color={primary500} />
            {moneyBack === 'yes' && (
              <span>
                Garantía{' '}
                <span className="tag">
                  de devolución{moneyBackDays ? ` ${moneyBackDays} días` : ''}
                </span>
              </span>
            )}
            {moneyBack === 'no' && (
              <span>
                Sin garantía <span className="tag">de devolución</span>
              </span>
            )}
          </li>
        )}

        {appLanguage !== '' && (
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

        {noLogs && (
          <li>
            {noLogs === 'yes' && (
              <>
                <IconFileShredder color={primary500} />
                <span>No guarda logs</span>
              </>
            )}
            {noLogs === 'no' && (
              <>
                <IconFileSearch color={primary500} />
                <span>Puede guardar logs</span>
              </>
            )}
          </li>
        )}

        {p2p && (
          <li>
            {p2p === 'yes' && (
              <>
                <IconCloudDownload color={primary500} />
                <span>Compatible con P2P</span>
              </>
            )}
            {p2p === 'no' && (
              <>
                <IconCloudDownload color={primary500} />
                <span>No compatible con P2P</span>
              </>
            )}
          </li>
        )}
      </ul> */}
    </StyledRowLink>
  );
}

Card.propTypes = {
  vpn: PropTypes.object,
};
