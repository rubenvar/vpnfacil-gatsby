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
  .detail {
    font-size: 27px;
    font-family: var(--specialFont);
    text-align: right;
    margin: 0;
    @media only screen and (min-width: 580px) {
      text-align: center;
    }
  }
  /* .chart {
  } */
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

export function Warranty({ vpn, vpns }) {
  return (
    <Section id="warranty">
      <StyledTitle>Garantía</StyledTitle>
      <Row>
        <div className="title">
          <h3>Garantía</h3>
          <span>
            ¿te devuelven el dinero si no te convence
            {vpn.name}
            después de comprarlo?
          </span>
        </div>
        <p className="detail">
          {vpn.hasMoneyBack === 'yes' ? '✅ sí' : '❌ no'}
        </p>
        <div className="see-more">
          {vpn.hasMoneyBack !== 'yes' && (
            <a href="/">
              mira{' '}
              {vpns.filter((eachVpn) => eachVpn.hasMoneyBack === 'yes').length}{' '}
              VPNs con reembolso
            </a>
          )}
        </div>
      </Row>
      {vpn.hasMoneyBack === 'yes' && (
        <Row>
          <div className="title">
            <h3>Días de Garantía</h3>
            <span>
              cuántos días tienes para pedir un reembolso tras la compra
            </span>
          </div>
          <p className="detail">{vpn.moneyBackDays}</p>
          <div className="chart" />
        </Row>
      )}
      <Row>
        <div className="title">
          <h3>Prueba Gratuita</h3>
          <span>
            ¿puedes probar GRATIS este VPN, sin que pidan tu tarjeta de crédito?
          </span>
        </div>
        <p className="detail">
          {vpn.hasFreeTrial === 'yes' ? '✅ sí' : '❌ no'}
        </p>
        <div className="see-more">
          {vpn.hasFreeTrial !== 'yes' && (
            <a href="/">
              mira{' '}
              {vpns.filter((eachVpn) => eachVpn.hasFreeTrial === 'yes').length}{' '}
              VPNs con prueba gratis
            </a>
          )}
        </div>
      </Row>
      {vpn.hasFreeTrial === 'yes' && (
        <Row>
          <div className="title">
            <h3>Duración de la Prueba</h3>
            <span>cuántos días tienes para probar GRATIS este VPN</span>
          </div>
          <p className="detail">
            {vpn.freeTrialDays === 'unlimited'
              ? 'ilimitados'
              : vpn.freeTrialDays}
          </p>
          <div className="chart" />
        </Row>
      )}
    </Section>
  );
}

Warranty.propTypes = {
  vpn: PropTypes.shape({
    freeTrialDays: PropTypes.string,
    hasFreeTrial: PropTypes.string,
    hasMoneyBack: PropTypes.string,
    moneyBackDays: PropTypes.string,
    name: PropTypes.string.isRequired,
  }),
  vpns: PropTypes.array,
};
