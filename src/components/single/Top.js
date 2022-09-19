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
// import { takeNewScreenshot, formatMoney } from '../../utils';
import { formatMoney } from '../../utils';

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
    #updated {
      font-size: 14px;
      margin-bottom: 0;
      margin-top: 20px;
      color: var(--grey300);
      text-align: right;
    }
  }
`;

export function Top({ vpn, screenshot }) {
  const placeholderImage =
    ' https://res.cloudinary.com/rub54381/image/upload/v1604082868/vpnf/screenshots/placeholder.png';
  const screenshotUrl = screenshot
    ? screenshot.secure_url.replace('f_auto', 'f_auto,w_560')
    : placeholderImage;

  // Let's see if screenshot needs updating...
  // // check if there is screenshot:
  // if (screenshot) {
  //   // compare dates, check if its older than 30 days
  //   const createdAt = new Date(screenshot.created_at).getTime();
  //   const today = new Date().getTime();
  //   const isOlder = today - createdAt > 30 * 24 * 60 * 60 * 1000;
  //   if (isOlder) takeNewScreenshot(vpn.code, vpn.baseLink);
  // } else if (vpn.screenshot === null) {
  //     // if no screenshot, take one
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
                  {vpn.devices !== '1' && 's'}
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
              src={screenshotUrl}
              alt={`Página principal de ${vpn.name}`}
              title={`Accede a ${vpn.name}`}
            />
          </a>
          {isUpdatedRecent && (
            <p id="updated">
              Info actualizada en{' '}
              <time dateTime={vpn.updated}>
                {format(updated, 'MMMM yyyy', { locale: es })}
              </time>
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
  screenshot: PropTypes.object,
};

// ! below is code for the new backend project, maybe implement some of this in the current and modify the spreadsheet
// import PropTypes from 'prop-types';
// import React from 'react';
// import styled from 'styled-components';
// import { countryCodeEmoji } from 'country-code-emoji';
// import { getCountry } from 'country-list-spanish';
// import { subMonths, isWithinInterval, format } from 'date-fns';
// import { es } from 'date-fns/locale';

// import StarRating from '@rubenvara/react-star-rating';
// import Section from './Section';
// import Button from './Button';
// // import { takeNewScreenshot, formatMoney } from '../../utils';
// import { formatMoney } from '../../utils';

// const StyledTop = styled.div`
//   --vpnColor: ${({ vpnColor }) => vpnColor || 'black'};
//   display: grid;
//   grid-template-columns: 1fr;
//   gap: 30px;
//   align-items: center;
//   @media only screen and (min-width: 680px) {
//     grid-template-columns: 1.2fr 1fr;
//   }
//   .text {
//     h1 {
//       font-size: 50px;
//       grid-area: text;
//       margin-bottom: 10px;
//       color: var(--vpnColor);
//       a {
//         text-decoration: none;
//         &:hover {
//           text-shadow: 1px 1px 3px;
//         }
//       }
//     }
//     #description {
//       @media only screen and (min-width: 880px) {
//         max-width: 75%;
//       }
//     }
//     .details {
//       @media only screen and (min-width: 880px) {
//         max-width: 85%;
//       }
//       color: var(--grey700);
//       span {
//         margin: 0 10px 10px 0;
//         padding: 3px 6px 4px;
//         background: var(--grey200);
//         border-radius: 3px;
//         display: inline-block;
//         line-height: 1;
//         font-size: 13px;
//         @media only screen and (min-width: 680px) {
//           font-size: 14px;
//         }
//       }
//     }
//   }
//   .img {
//     img {
//       border: 3px solid var(--vpnColor);
//       border-radius: var(--cardRadius);
//       box-shadow: var(--boxShadow);
//       transition: all 0.3s;
//       transform: rotate(1.5deg);
//       &:hover {
//         transform: scale(1.02) rotate(3deg);
//       }
//     }
//     #updated {
//       font-size: 14px;
//       margin-bottom: 0;
//       margin-top: 20px;
//       color: var(--grey300);
//       text-align: right;
//     }
//   }
// `;

// export function Top({ vpn, screenshot }) {
//   const placeholderImage =
//     ' https://res.cloudinary.com/rub54381/image/upload/v1604082868/vpnf/screenshots/placeholder.png';
//   const screenshotUrl = screenshot
//     ? screenshot.secure_url.replace('f_auto', 'f_auto,w_560')
//     : placeholderImage;

//   // Let's see if screenshot needs updating...
//   // // check if there is screenshot:
//   // if (screenshot) {
//   //   // compare dates, check if its older than 30 days
//   //   const createdAt = new Date(screenshot.created_at).getTime();
//   //   const today = new Date().getTime();
//   //   const isOlder = today - createdAt > 30 * 24 * 60 * 60 * 1000;
//   //   if (isOlder) takeNewScreenshot(vpn.code, vpn.baseLink);
//   // } else if (vpn.screenshot === null) {
//   //     // if no screenshot, take one
//   //   console.log('screenshot is empty, I make a new one');
//   //   takeNewScreenshot(vpn.code, vpn.baseLink);
//   // }

//   // check if upated date is recent enough to show it
//   const updatedAt = new Date(vpn.updatedAt);
//   const intervalEnd = new Date();
//   const intervalStart = subMonths(intervalEnd, 6);
//   const isUpdatedRecently = isWithinInterval(updatedAt, {
//     start: intervalStart,
//     end: intervalEnd,
//   });

//   return (
//     <Section id="top" wide>
//       <StyledTop id="top-container" vpnColor={vpn.color}>
//         <div className="text">
//           <h1>
//             <a
//               href={vpn.link}
//               target="_blank"
//               rel="noreferrer"
//               title="Mira {vpn.name}"
//             >
//               {vpn.name}
//             </a>
//           </h1>
//           <StarRating
//             rating={vpn.rating / 20}
//             config={{ fullColor: '#ffc107', emptyColor: '#7f7f7f', size: 28 }}
//             style={{ marginBottom: 30 }}
//           />
//           <p id="description">{vpn.description}</p>
//           <div className="details">
//             <p>
//               {vpn.devices ? (
//                 <span>
//                   {vpn.devices === 9999 ? '∞' : vpn.devices} dispositivo
//                   {vpn.devices !== '1' && 's'}
//                 </span>
//               ) : null}

//               {vpn.countries ? <span>{vpn.countries} países</span> : null}
//               {vpn.basedIn && (
//                 <span>
//                   {countryCodeEmoji(vpn.basedIn)} {getCountry(vpn.basedIn)}
//                 </span>
//               )}
//               {vpn.hasMoneyBack === 'yes' ? (
//                 <span>garantía {vpn.moneyBackDays} días</span>
//               ) : (
//                 <span>sin garantía</span>
//               )}
//               {vpn.hasFreeTrial === 'yes' && (
//                 <span>
//                   prueba gratis{' '}
//                   {vpn.freeTrialDays === 'unlimited'
//                     ? 'ilimitada'
//                     : `${vpn.freeTrialDays} días`}
//                 </span>
//               )}
//               {vpn.languageApp === 'es' || vpn.languageApp === 'both' ? (
//                 <span>en 🇪🇸 español</span>
//               ) : (
//                 <span>en 🇬🇧 inglés</span>
//               )}
//               {vpn.plans[vpn.plans.length - 1] && (
//                 <span>
//                   desde{' '}
//                   {formatMoney(
//                     vpn.plans[vpn.plans.length - 1].price,
//                     vpn.plansCurrency
//                   )}
//                   /mes
//                 </span>
//               )}

//               <span>
//                 compatibilidad:{' '}
//                 {vpn.compatIndex < 6
//                   ? 'baja'
//                   : vpn.compatIndex > 5 && vpn.compatIndex < 12
//                   ? 'media'
//                   : 'alta'}
//               </span>
//             </p>
//           </div>
//           <Button link={vpn.link} text="ver oferta AHORA" main />
//         </div>
//         <div className="img">
//           <a
//             href={vpn.link}
//             target="_blank"
//             rel="noreferrer"
//             title={`Accede a ${vpn.name}`}
//           >
//             <img
//               src={screenshotUrl}
//               alt={`Página principal de ${vpn.name}`}
//               title={`Accede a ${vpn.name}`}
//             />
//           </a>
//           {isUpdatedRecently && (
//             <p id="updated">
//               Info actualizada en{' '}
//               <time dateTime={vpn.updatedAt}>
//                 {format(updatedAt, 'MMMM yyyy', { locale: es })}
//               </time>
//             </p>
//           )}
//         </div>
//       </StyledTop>
//     </Section>
//   );
// }

// Top.propTypes = {
//   screenshot: PropTypes.object,
//   vpn: PropTypes.shape({
//     baseLink: PropTypes.string,
//     basedIn: PropTypes.string,
//     code: PropTypes.string.isRequired,
//     color: PropTypes.string.isRequired,
//     compatIndex: PropTypes.number.isRequired,
//     countries: PropTypes.number,
//     description: PropTypes.string,
//     devices: PropTypes.number,
//     freeTrialDays: PropTypes.number,
//     hasFreeTrial: PropTypes.string,
//     hasMoneyBack: PropTypes.string,
//     id: PropTypes.string.isRequired,
//     languageApp: PropTypes.string,
//     link: PropTypes.string.isRequired,
//     moneyBackDays: PropTypes.number,
//     name: PropTypes.string.isRequired,
//     plans: PropTypes.array,
//     plansCurrency: PropTypes.string,
//     rating: PropTypes.number.isRequired,
//     screenshot: PropTypes.string,
//     updatedAt: PropTypes.string,
//   }),
// };
