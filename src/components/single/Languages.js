import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Section, { StyledTitle } from './Section';

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 5px 15px;
  transition: all 0.3s;
  padding: 7px;
  margin: 20px 0;
  @media only screen and (min-width: 580px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px;
  }
  &:hover {
    background: var(--secondary100);
  }
  .title {
    display: flex;
    flex-direction: column;
    h3 {
      margin: 0 0 3px 0;
      font-size: 21px;
    }
    span {
      color: var(--grey300);
      font-size: 13px;
      line-height: 1.4;
      max-width: 80%;
    }
  }
  .language {
    text-align: right;
    font-size: 20px;
    @media only screen and (min-width: 580px) {
      text-align: center;
    }
  }
  .see-more {
    text-align: right;
    grid-column: 1 / -1;
    @media only screen and (min-width: 580px) {
      grid-column: unset;
      justify-self: end;
      max-width: 75%;
    }
    a {
      text-decoration: none;
      color: var(--primary400);
      &:hover {
        color: var(--grey900);
      }
    }
  }
`;

export function Languages({ vpn, vpns }) {
  return (
    <Section id="languages">
      <StyledTitle>Idiomas</StyledTitle>
      <Row>
        <div className="title">
          <h3>Aplicación</h3>
          <span>
            el idioma de la app que instalas en tu ordenador o smartphone
          </span>
        </div>
        <p className="language">
          {vpn.appLanguage.includes('spanish')
            ? `🇪🇸 Disponible en español`
            : `🇬🇧 Solo en inglés`}
        </p>
        <div className="see-more">
          {vpn.appLanguage && !vpn.appLanguage.includes('spanish') && (
            <a href="/">
              mira{' '}
              {
                vpns.filter(
                  (eachVpn) =>
                    eachVpn.appLanguage &&
                    eachVpn.appLanguage.includes('spanish')
                ).length
              }{' '}
              VPNs con la app en español
            </a>
          )}
        </div>
      </Row>
      <Row>
        <div className="title">
          <h3>Panel de Usuario</h3>
          <span>
            el lenguaje de la plataforma web y cuenta de usuario online
          </span>
        </div>
        <p className="language">
          {vpn.uiLanguage.includes('spanish')
            ? `🇪🇸 Disponible en español`
            : `🇬🇧 Solo en inglés`}
        </p>
        <div className="see-more">
          {vpn.uiLanguage && !vpn.uiLanguage.includes('spanish') && (
            <a href="/">
              mira{' '}
              {
                vpns.filter(
                  (eachVpn) =>
                    eachVpn.uiLanguage && eachVpn.uiLanguage.includes('spanish')
                ).length
              }{' '}
              VPNs con intefaz en español
            </a>
          )}
        </div>
      </Row>
      <Row>
        <div className="title">
          <h3>Soporte</h3>
          <span>
            si tienes problemas, en qué idioma podrás pedir ayuda a este VPN
          </span>
        </div>
        <p className="language">
          {vpn.supportLanguage.includes('spanish')
            ? `🇪🇸 Disponible en español`
            : `🇬🇧 Solo en inglés`}
        </p>
        <div className="see-more">
          {vpn.supportLanguage && !vpn.supportLanguage.includes('spanish') && (
            <a href="/">
              mira{' '}
              {
                vpns.filter(
                  (eachVpn) =>
                    eachVpn.supportLanguage &&
                    eachVpn.supportLanguage.includes('spanish')
                ).length
              }{' '}
              VPNs con soporte en español
            </a>
          )}
        </div>
      </Row>
    </Section>
  );
}

Languages.propTypes = {
  vpn: PropTypes.shape({
    appLanguage: PropTypes.string,
    supportLanguage: PropTypes.string,
    uiLanguage: PropTypes.string,
  }),
  vpns: PropTypes.array,
};
