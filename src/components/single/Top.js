import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { countryCodeEmoji } from 'country-code-emoji';
import { getCountry } from 'country-list-spanish';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

import StarRating from '@rubenvara/react-star-rating';
import Section from './Section';
import Button from './Button';
import { formatMoney, insertString } from '../../utils';
// import { takeNewScreenshot } from '../../utils';

const StyledTop = styled.div`
  --vpnColor: ${({ vpnColor }) => vpnColor || 'black'};
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  align-items: center;
  @media only screen and (min-width: 680px) {
    grid-template-columns: 1.2fr 1fr;
  }
  .text {
    h1 {
      font-size: 50px;
      grid-area: text;
      margin-bottom: 10px;
      color: var(--vpnColor);
      a {
        text-decoration: none;
        &:hover {
          text-shadow: 1px 1px 3px;
        }
      }
    }
    #description {
      @media only screen and (min-width: 880px) {
        max-width: 75%;
      }
    }
    .details {
      @media only screen and (min-width: 880px) {
        max-width: 85%;
      }
      color: var(--grey700);
      span {
        margin: 0 10px 10px 0;
        padding: 3px 6px 4px;
        background: var(--grey200);
        border-radius: 3px;
        display: inline-block;
        line-height: 1;
        font-size: 13px;
        @media only screen and (min-width: 680px) {
          font-size: 14px;
        }
      }
    }
  }
  .img {
    img {
      border: 3px solid var(--vpnColor);
      border-radius: var(--cardRadius);
      box-shadow: var(--boxShadow);
      transition: all 0.3s;
      transform: rotate(1.5deg);
      &:hover {
        transform: scale(1.02) rotate(3deg);
      }
    }
    .updated {
      font-size: 14px;
      margin-bottom: 0;
      margin-top: 20px;
      color: var(--grey300);
      text-align: right;
    }
  }
`;

export function Top({ vpn }) {
  const transf = 'c_scale,q_auto:eco,w_560';
  let screenshot;
  if (!vpn.screenshot) {
    // use placeholder just in case
    screenshot =
      'https://res.cloudinary.com/rub54381/image/upload/v1604082868/vpnf/screenshots/placeholder.png';
  } else {
    // modify screenshot string to add transformation
    screenshot = vpn.screenshot;
    const after = screenshot.match(/\/v\d+\//);
    const { index } = after;
    if (index) screenshot = insertString(screenshot, index, `/${transf}`);
  }

  //* All this works:
  //* Stores screenshot to cloudinary
  //* And saved url in VPN List V2 spreadsheet
  //* But next load, screenshot is still empty until I rebuild the page and re-source it
  //* So will need to find a better way to do it, probably run this on-build (pre-build)
  // // Let's see if screenshot needs updating...
  // // check if there is screenshot:
  // if (vpn.screenshot) {
  //   const existingScreenshot = vpn.screenshot;
  //   console.log({ existingScreenshot });
  //   // get link, get time with regex (it comes in seconds, not ms)
  //   const taken = existingScreenshot.match(/\/v(\d+)\//)[1];
  //   console.log({ taken });
  //   const now = Math.round(Date.now() / 1000);
  //   // calculate if it's older than 15 days
  //   const max = 15 * 24 * 60 * 60;
  //   const isOld = now - taken > max;
  //   console.log({ isOld });
  //   // if it's recent, do nothing
  //   // if it's old, call lambda
  //   if (isOld) takeNewScreenshot(vpn.code, vpn.baseLink);
  // } else if (vpn.screenshot === null) {
  //   // if no screenshot, take one
  //   console.log('screenshot is empty, I make a new one');
  //   takeNewScreenshot(vpn.code, vpn.baseLink);
  // }

  // check if upated date is recent enough to show it
  const now = new Date();
  const updated = new Date(vpn.updated);
  const diff = now - updated;
  const sixMonthsMs = 6 * 30 * 24 * 60 * 60 * 1000;
  const isUpdatedRecent = diff < sixMonthsMs;

  return (
    <Section id="top" wide>
      <StyledTop id="top-container" vpnColor={vpn.color}>
        <div className="text">
          <h1>
            <a
              href={vpn.link}
              target="_blank"
              rel="noreferrer"
              title="Mira {vpn.name}"
            >
              {vpn.name}
            </a>
          </h1>
          <StarRating
            rating={vpn.rating / 20}
            config={{ fullColor: '#ffc107', emptyColor: '#7f7f7f', size: 28 }}
            style={{ marginBottom: 30 }}
          />
          <p id="description">{vpn.description}</p>
          <div className="details">
            <p>
              {vpn.devices ? (
                <span>
                  {vpn.devices === 'unlimited' ? '∞' : vpn.devices} dispositivo
                  {vpn.devices !== 1 && 's'}
                </span>
              ) : null}

              {vpn.countries ? <span>{vpn.countries} países</span> : null}
              {vpn.basedIn && (
                <span>
                  {countryCodeEmoji(vpn.basedIn)} {getCountry(vpn.basedIn)}
                </span>
              )}
              {vpn.hasMoneyBack === 'yes' ? (
                <span>garantía {vpn.moneyBackDays} días</span>
              ) : (
                <span>sin garantía</span>
              )}
              {vpn.hasFreeTrial === 'yes' && (
                <span>
                  prueba gratis{' '}
                  {vpn.freeTrialDays === 'unlimited'
                    ? 'ilimitada'
                    : `${vpn.freeTrialDays} días`}
                </span>
              )}
              {vpn.appLanguage.includes('spanish') ? (
                <span>en 🇪🇸 español</span>
              ) : (
                <span>en 🇬🇧 inglés</span>
              )}
              {vpn.plan3Pricing && (
                <span>
                  desde {formatMoney(vpn.plan3Pricing, vpn.planCurrency)}/mes
                </span>
              )}

              <span>
                compatibilidad:{' '}
                {vpn.compatIndex < 6
                  ? 'baja'
                  : vpn.compatIndex > 5 && vpn.compatIndex < 12
                  ? 'media'
                  : 'alta'}
              </span>
            </p>
          </div>
          <Button link={vpn.link} text="ver oferta AHORA" main />
        </div>
        <div className="img">
          <a
            href={vpn.link}
            target="_blank"
            rel="noreferrer"
            title={`Accede a ${vpn.name}`}
          >
            <img
              src={screenshot}
              alt={`Página principal de ${vpn.name}`}
              title={`Accede a ${vpn.name}`}
            />
          </a>
          {isUpdatedRecent && (
            <p className="updated">
              Info actualizada en {format(updated, 'MMMM yyyy', { locale: es })}
            </p>
          )}
        </div>
      </StyledTop>
    </Section>
  );
}

Top.propTypes = {
  vpn: PropTypes.shape({
    appLanguage: PropTypes.string,
    basedIn: PropTypes.string,
    baseLink: PropTypes.string,
    color: PropTypes.string.isRequired,
    compatIndex: PropTypes.string.isRequired,
    countries: PropTypes.number,
    description: PropTypes.string,
    devices: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    hasFreeTrial: PropTypes.string,
    freeTrialDays: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    id: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    hasMoneyBack: PropTypes.string,
    moneyBackDays: PropTypes.string,
    name: PropTypes.string.isRequired,
    planCurrency: PropTypes.string,
    plan3Pricing: PropTypes.string,
    rating: PropTypes.number.isRequired,
    screenshot: PropTypes.string,
    updated: PropTypes.string,
  }),
};
