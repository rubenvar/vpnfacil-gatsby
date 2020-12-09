import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { awsConfig } from '../../../config';
import TableContainer from './TableContainer';

const ComparativaContainer = styled(TableContainer)`
  table {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
    margin-left: -25%;
    width: 150%;
    @media only screen and (max-width: 1150px) {
      width: 110%;
      margin-left: -5%;
    }
    @media only screen and (max-width: 820px) {
      width: 100%;
      margin-left: 0;
    }
    thead {
      tr {
        height: 36px;
      }
    }
    td {
      margin: 5px;
      img {
        margin: 0 auto;
      }
      &.name {
        width: 11%;
      }
    }
    .servers,
    .countries,
    .devices {
      text-align: right;
    }

    .app-language,
    .money-back,
    .browsers,
    .p2p,
    .no-logs,
    .mas-info {
      text-align: center;
    }

    td.money-back,
    td.app-language {
      color: #666;
    }
  }
`;

export default function VpnData() {
  const [vpns, setVpns] = useState(null);

  useEffect(() => {
    const getVpns = () => {
      axios.get(process.env.ENDPOINT, awsConfig).then((res) => {
        if (!res.data.body) return setVpns([]);
        const allVpns = [...res.data.body];
        const bestVpns = allVpns
          .sort((a, b) => {
            if (a.rating > b.rating) return -1;
            if (a.rating < b.rating) return 1;
            return 0;
          })
          .filter((vpn, i) => i < 10);

        return setVpns(bestVpns);
      });
    };
    getVpns();
  }, []);

  if (!vpns)
    return (
      <p style={{ color: 'grey', fontStyle: 'italic' }}>
        Cargando comparativa...
      </p>
    );

  return (
    <ComparativaContainer>
      <table>
        <thead>
          <tr>
            <th />
            <th />
            <th className="servers">Servidores</th>
            <th className="countries">Países</th>
            <th className="devices">Disp.</th>
            <th className="money-back">Garantía</th>
            <th className="app-language">Soporte</th>
            <th className="browsers">Navegador</th>
            <th className="p2p">P2P</th>
            <th className="no-logs">No Logs</th>
            <th className="mas-info">Más info</th>
          </tr>
        </thead>
        <tbody>
          {vpns.map((vpn) => (
            <tr key={vpn.name}>
              <td className="img">
                <img
                  height="30px"
                  src={`/logos/${vpn.id}.jpg`}
                  alt={`Logo de ${vpn.name}`}
                />
              </td>
              <td className="name">{vpn.name}</td>
              <td className="servers">{vpn.servers || '-'}</td>
              <td className="countries">{vpn.countries}</td>
              <td className="devices">
                {vpn.devices === 'unlimited' ? '∞' : vpn.devices}
              </td>
              <td className="money-back">
                {vpn.moneyBack === 'yes' ? '✅' : '❌'}
                {vpn.moneyBack === 'yes' && (
                  <>
                    {' '}
                    {vpn.moneyBackDays}
                    {' días'}
                  </>
                )}
              </td>
              <td className="app-language">
                {vpn.appLanguage
                  ? vpn.appLanguage
                      .replace('spanish, english', '🇪🇸 esp')
                      .replace('english', '🇬🇧 ing')
                  : '-'}
              </td>
              <td className="browsers">
                {vpn.browserPlugins === 'yes' ? '✅' : '❌'}
              </td>
              <td className="p2p">{vpn.p2p === 'yes' ? '✅' : '❌'}</td>
              <td className="no-logs">{vpn.noLogs === 'yes' ? '✅' : '❌'}</td>
              <td className="mas-info">
                <a href={vpn.link}>Más info</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </ComparativaContainer>
  );
}
