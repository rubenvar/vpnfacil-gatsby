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

// import StarRating from './StarRating';
import StyledCard from './styles/StyledCard';

export default function Card({ vpn }) {
  const {
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

  let spanish = false;
  if (appLanguage && appLanguage.includes('spanish')) spanish = true;

  return (
    <StyledCard>
      <img />
      <h2>
        <Link to={`/vpn/${slug}/`}>{name}</Link>
      </h2>
      <div className="numbers" />
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

        {rating && (
          <>
            <StarRating
              rating={rating / 20}
              starRatedColor="#ffcf00"
              starEmptyColor="#aaa"
              starDimension="20px"
              starSpacing="0px"
              name={id}
              // config={{ fullColor: '#ffc107', showText: true }}
              // style="justify-content: center;margin: 20px 0 0;" />
            />
            {rating / 20}
          </>
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
  vpn: PropTypes.object,
};