import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import SingleSection, { StyledTitle } from './Section';

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  transition: all 0.3s;
  padding: 7px;
  align-items: center;
  gap: 5px 15px;
  margin: 30px 0;
  @media only screen and (min-width: 580px) {
    grid-template-columns: 1fr 2fr;
    gap: 15px;
  }
  &.row--longer {
    grid-template-columns: 1fr 1fr;
    @media only screen and (min-width: 580px) {
      grid-template-columns: 1fr 1fr 1fr;
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
  #socks {
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
`;

export function Technical({ vpn, vpns }) {
  return (
    <SingleSection id="technical">
      <StyledTitle>Detalles Técnicos</StyledTitle>
      {vpn.protocolsList !== '' && (
        <Row>
          <div className="title">
            <h3>Protocolos Disponibles</h3>
            <span>
              protocolos VPN que puedes elegir.
              <a href="/guias/protocolos-vpn/">Más sobre protocolos aquí</a>
            </span>
          </div>
          <div className="list">
            {vpn.protocolsList.split(',').map((prot) => (
              <span key={prot}>{prot.replace(/\s/g, '')}</span>
            ))}
          </div>
        </Row>
      )}
      <Row className="row--longer">
        <div className="title">
          <h3>Proxy SOCKS5</h3>
          <span>¿incluye {vpn.name} este protocolo para proxy?</span>
        </div>
        <p id="socks">{vpn.socks5 === 'yes' ? '✅ sí' : '❌ no'}</p>
        <div className="see-more">
          {vpn.socks5 !== 'yes' && (
            <a href="/">
              mira {vpns.filter((elem) => elem.socks5 === 'yes').length} VPNs
              que sí tienen SOCKS5
            </a>
          )}
        </div>
      </Row>
      {vpn.moreList !== '' && (
        <Row>
          <div className="title">
            <h3>Servicios Adicionales</h3>
            <span>funciones incluidas cuando te registras en {vpn.name}</span>
          </div>
          <div className="list">
            {vpn.moreList.split(',').map((more, i) => (
              <span key={i}>{more.replace(/$\s/g, '')}</span>
            ))}
          </div>
        </Row>
      )}
    </SingleSection>
  );
}

Technical.propTypes = {
  vpn: PropTypes.shape({
    moreList: PropTypes.string,
    name: PropTypes.string,
    protocolsList: PropTypes.string,
    socks5: PropTypes.string,
  }),
  vpns: PropTypes.array,
};
