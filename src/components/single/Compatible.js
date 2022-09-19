import PropTypes from 'prop-types';
import { IconExternalLink } from '@tabler/icons';
import React from 'react';
import styled from 'styled-components';

import SingleSection, { StyledTitle } from './Section';

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  transition: all 0.3s;
  padding: 7px;
  align-items: center;
  gap: 15px;
  margin: 20px 0;
  @media only screen and (min-width: 580px) {
    grid-template-columns: 1fr 2fr;
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
    .platform {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      gap: 10px;
      margin: 6px;
      @media only screen and (min-width: 580px) {
        margin: 15px;
      }
      img {
        width: 24px;
        max-width: 24px;
        @media only screen and (min-width: 580px) {
          width: 33px;
          max-width: 33px;
          filter: grayscale(100%);
          transition: all 0.3s;
        }
      }
      &:hover {
        img {
          filter: none;
        }
      }
      span {
        color: var(--grey500);
        font-size: 14px;
      }
    }
  }
`;

const SeeMore = styled.p`
  margin: 36px 0;
  font-size: 20px;
  text-align: right;
  a {
    color: var(--primary500);
    text-decoration: none;
    &:hover {
      color: var(--secondary500);
    }
  }
`;

export function Compatible({ vpn, vpns }) {
  const compatible = [];

  if (vpn.platforms) {
    compatible.push({
      title: 'Sistemas Operativos',
      text: 'sistemas para los que este VPN tiene software/app especifico',
      values: vpn.platforms.split(',').map((item) => item.replace(/\s/g, '')),
    });
  }

  if (vpn.hasBrowserPlugins === 'yes') {
    compatible.push({
      title: 'Navegadores',
      text: `navegadores para los que ${vpn.name} tiene una extensión que puedes instalar`,
      values: vpn.browserList.split(',').map((item) => item.replace(/\s/g, '')),
    });
  }

  if (vpn.compatList) {
    compatible.push({
      title: 'Dispositivos',
      text: `más hardware donde puedes instalar este VPN fácilmente`,
      values: vpn.compatList.split(',').map((item) => item.replace(/\s/g, '')),
    });
  }
  return (
    <SingleSection id="compatible">
      <StyledTitle>Compatibilidad</StyledTitle>
      {compatible.map((cat) => (
        <Row key={cat.title}>
          <div className="title">
            <h3>{cat.title}</h3>
            {cat.text && <span>{cat.text}</span>}
          </div>
          <div className="list">
            {cat.values.map((logo) => (
              <div key={logo} className="platform">
                <img
                  src={`/compatible/${logo.toLowerCase()}.png`}
                  alt={`Logo de ${logo}`}
                />
                <span>{logo}</span>
              </div>
            ))}
          </div>
        </Row>
      ))}
      {(vpn.hasRouters === 'yes' || vpn.hasNas === 'yes') && (
        <Row>
          <div className="title">
            <h3>Otros</h3>
          </div>
          <div className="list">
            {vpn.hasRouters === 'yes' && (
              <div className="platform">
                <img src="/compatible/routers.png" alt="Logo de Routers" />
                <span>Routers</span>
              </div>
            )}

            {vpn.hasNas === 'yes' && (
              <div className="platform">
                <img src="/compatible/nas.png" alt="Logo de NAS" />
                <span>NAS</span>
              </div>
            )}
          </div>
        </Row>
      )}
      {vpn.compatIndex < 12 && (
        <SeeMore>
          <a href="/">
            Mira aquí{' '}
            {vpns.filter((elem) => +elem.compatIndex > +vpn.compatIndex).length}{' '}
            VPNs con mayor compatibilidad{' '}
            <IconExternalLink color="hsl(270, 75%, 70%)" />
          </a>
        </SeeMore>
      )}
    </SingleSection>
  );
}

Compatible.propTypes = {
  vpn: PropTypes.shape({
    hasBrowserPlugins: PropTypes.string,
    browserList: PropTypes.string,
    compatIndex: PropTypes.number,
    compatList: PropTypes.string,
    name: PropTypes.any,
    hasNas: PropTypes.string,
    platforms: PropTypes.string,
    hasRouters: PropTypes.string,
  }),
  vpns: PropTypes.array,
};
