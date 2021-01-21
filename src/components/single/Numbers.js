import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Section, { StyledTitle } from './Section';
import BarChart from './BarChart';
import { formatNumber } from '../../utils';

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 15px;
  transition: all 0.3s;
  padding: 7px;
  margin: 20px 0;
  @media only screen and (min-width: 580px) {
    grid-template-columns: 1fr 1fr 1fr;
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
  .number {
    font-size: 32px;
    font-family: var(--specialFont);
    text-align: right;
    margin: 0;
    @media only screen and (min-width: 580px) {
      text-align: center;
    }
    span {
      font-size: 23px;
      line-height: 1;
      color: var(--grey500);
      vertical-align: super;
    }
  }
  .chart {
    display: none;
    flex-direction: column;
    text-align: right;
    @media only screen and (min-width: 580px) {
      display: flex;
    }
  }
`;

export function Numbers({ vpn, vpns }) {
  const serversData = vpns
    .filter((eachVpn) => eachVpn.servers > 0)
    .map((eachVpn) => ({
      name: eachVpn.name,
      code: eachVpn.code,
      value: eachVpn.servers,
    }))
    .sort((a, b) => (a.value < b.value ? 1 : -1));
  const ipsData = vpns
    .filter((eachVpn) => eachVpn.ips > 0)
    .map((eachVpn) => ({
      name: eachVpn.name,
      code: eachVpn.code,
      value: +eachVpn.ips,
    }))
    .sort((a, b) => (a.value < b.value ? 1 : -1));
  const countriesData = vpns
    .filter((eachVpn) => eachVpn.countries > 0)
    .map((eachVpn) => ({
      name: eachVpn.name,
      code: eachVpn.code,
      value: +eachVpn.countries,
    }))
    .sort((a, b) => (a.value < b.value ? 1 : -1));
  const locationsData = vpns
    .filter((eachVpn) => eachVpn.locations > 0)
    .map((eachVpn) => ({
      name: eachVpn.name,
      code: eachVpn.code,
      value: +eachVpn.locations,
    }))
    .sort((a, b) => (a.value < b.value ? 1 : -1));
  const devicesData = vpns
    .filter((eachVpn) => eachVpn.devices !== null)
    .map((eachVpn) => ({
      name: eachVpn.name,
      code: eachVpn.code,
      value: eachVpn.devices === 'unlimited' ? 20 : +eachVpn.devices,
    }))
    .sort((a, b) => (a.value < b.value ? 1 : -1));

  const numbers = [
    {
      title: 'Servidores',
      text: 'más servidores VPN = más opciones tienes para conectarte',
      value: vpn.servers,
      data: serversData,
      plus: vpn.hasServersPlus && vpn.hasServersPlus === 'yes',
    },
    {
      title: 'IPs',
      text: 'más IPs = más posibles IPs podrán asignarte',
      value: vpn.ips,
      data: ipsData,
      plus: vpn.hasIpsPlus && vpn.hasIpsPlus === 'yes',
    },
    {
      title: 'Países',
      text: 'más países = más ubicaciones desde las que hacer tu conexión',
      value: vpn.countries,
      data: countriesData,
      plus: vpn.hasCountriesPlus && vpn.hasCountriesPlus === 'yes',
    },
    {
      title: 'Ubicaciones',
      text: 'lugares totales (cuidades, etc.) donde hay servidores',
      value: vpn.locations,
      data: locationsData,
    },
    {
      title: 'Dispositivos',
      text: 'cuántos dispositivos puedes conectar al mismo tiempo',
      value: vpn.devices,
      data: devicesData,
    },
  ];

  return (
    <Section id="numbers">
      <StyledTitle>En Cifras</StyledTitle>
      {numbers.map(
        (number) =>
          (number.value > 0 || number.value === 'unlimited') && (
            <Row key={number.title}>
              <div className="title">
                <h3>{number.title}</h3>
                {number.text && <span>{number.text}</span>}
              </div>
              <p className="number">
                {number.value === 'unlimited' ? (
                  'ilimitados'
                ) : (
                  <>
                    {formatNumber(number.value, false)}
                    {number.plus && <span>+</span>}
                  </>
                )}
              </p>
              <div className="chart">
                {number.title !== 'IPs' && (
                  <BarChart
                    title={number.title}
                    data={number.data}
                    single={vpn.code}
                    color={vpn.color}
                  />
                )}
              </div>
            </Row>
          )
      )}
    </Section>
  );
}

Numbers.propTypes = {
  vpn: PropTypes.shape({
    color: PropTypes.string,
    countries: PropTypes.number,
    hasCountriesPlus: PropTypes.string,
    // devices: PropTypes.number,
    devices: PropTypes.string,
    code: PropTypes.string.isRequired,
    ips: PropTypes.number,
    hasIpsPlus: PropTypes.string,
    locations: PropTypes.number,
    name: PropTypes.string.isRequired,
    servers: PropTypes.number,
    hasServersPlus: PropTypes.string,
  }),
  vpns: PropTypes.array,
};
