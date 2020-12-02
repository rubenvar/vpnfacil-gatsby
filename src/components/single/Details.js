import PropTypes, { string } from 'prop-types';
import React from 'react';
import flag from 'country-code-emoji';
import { getCountry } from 'country-list-spanish';

import styled from 'styled-components';
import Section, { StyledTitle } from './Section';

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 5px 15px;
  transition: all 0.3s;
  padding: 7px;
  margin: 30px 0;
  @media only screen and (min-width: 580px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px;
  }
  &.row--longer {
    @media only screen and (min-width: 580px) {
      grid-template-columns: 1fr 2fr;
    }
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
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    span {
      background: var(--grey300);
      color: var(--grey100);
      padding: 1px 5px;
      border-radius: 5px;
      margin: 5px;
      font-size: 17px;
      @media only screen and (min-width: 580px) {
        font-size: 20px;
      }
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
  #country {
    font-size: 23px;
    text-align: right;
  }
`;

const manageBool = (opt) => {
  if (opt === 'yes') return true;
  if (opt === 'no') return false;
  if (opt === '') return undefined;
};

export function Details({ vpn, vpns }) {
  const details = [
    {
      title: 'P2P',
      text:
        '¿se permiten descargas usando tecnología peer2peer (como µTorrent)?',
      value: manageBool(vpn.p2p),
      seeMore: `mira ${
        vpns.filter((elem) => elem.p2p === 'yes').length
      } VPNs que sí soportan P2P`,
    },
    {
      title: 'Plan Business',
      text: '¿tiene un plan especial con ventajas para empresas?',
      value: manageBool(vpn.business),
      seeMore: `mira ${
        vpns.filter((elem) => elem.business === 'yes').length
      } VPNs que sí tienen plan business`,
    },
    {
      title: 'Plan Estudiantes',
      text: '¿tiene este VPN un plan con descuentos para estudiantes?',
      value: manageBool(vpn.students),
      seeMore: `mira ${
        vpns.filter((elem) => elem.students === 'yes').length
      } VPNs que sí tienen plan para estudiantes`,
    },
    {
      title: 'No-Logs',
      text: `¿tiene ${vpn.name} explícitamente una política de no-logs?`,
      value: manageBool(vpn.noLogs),
      seeMore: `mira ${
        vpns.filter((elem) => elem.noLogs === 'yes').length
      } VPNs que sí garantizan No-Logs`,
    },
    {
      title: 'Pago Anónimo',
      text: '¿puedes pagar de forma anónima?',
      value: manageBool(vpn.anonPay),
      seeMore: `mira ${
        vpns.filter((elem) => elem.anonPay === 'yes').length
      } VPNs que sí tienen pago anónimo`,
    },
    {
      title: 'Pago con Criptomonedas',
      text: `¿tiene ${vpn.name} opción de pago con criptomoneda?`,
      value: manageBool(vpn.cryptoPay),
      seeMore: `mira ${
        vpns.filter((elem) => elem.cryptoPay === 'yes').length
      } VPNs que sí aceptan pago con cripto`,
    },
  ];

  let country;
  let emoji;
  if (vpn.basedIn) {
    emoji = flag(vpn.basedIn);
    country = getCountry(vpn.basedIn);
  }
  return (
    <Section id="details">
      <StyledTitle>Detalles</StyledTitle>
      {details.map(
        (detail) =>
          detail.value !== undefined && (
            <Row key={detail.title}>
              <div className="title">
                <h3>{detail.title}</h3>
                {detail.text && <span>{detail.text}</span>}
              </div>
              <p className="detail">{detail.value ? '✅ sí' : '❌ no'}</p>
              <div className="see-more">
                {!detail.value && <a href="/">{detail.seeMore}</a>}
              </div>
            </Row>
          )
      )}
      {vpn.cryptoPay === 'yes' && (
        <Row className="row--longer">
          <div className="title">
            <h3>Criptomonedas aceptadas</h3>
            <span>se aceptan (al menos) estas opciones</span>
          </div>
          <div className="list">
            {vpn.cryptocurrenciesList.split(',').map((crypto) => (
              <span>{crypto.replace(/\s/g, '')}</span>
            ))}
          </div>
        </Row>
      )}
      {vpn.basedIn !== '' && (
        <Row className="row--longer">
          <div className="title">
            <h3>País de Registro</h3>
            <span>
              territorio donde está registrado {vpn.name} y cuyas leyes aplican
            </span>
          </div>
          {vpn.basedIn && (
            <p id="country">
              {emoji} {country}
            </p>
          )}
        </Row>
      )}
    </Section>
  );
}

Details.propTypes = {
  vpn: PropTypes.shape({
    anonPay: PropTypes.string,
    basedIn: PropTypes.string,
    business: PropTypes.string,
    cryptoPay: PropTypes.string,
    cryptocurrenciesList: string,
    name: PropTypes.string,
    noLogs: PropTypes.string,
    p2p: PropTypes.string,
    students: PropTypes.string,
  }),
  vpns: PropTypes.array,
};
