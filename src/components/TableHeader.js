import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 99;
  padding: 10px 0 15px;
  border-bottom: 3px solid var(--primary500);
  display: grid;
  align-items: center;
  grid-template-columns: 47px 0.6fr 3fr;
  gap: 15px;
  font-size: 13px;
  @media only screen and (min-width: 960px) {
    font-size: unset;
    gap: 15px;
  }
  div {
    text-align: center;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(8, 1fr);
    gap: 7px;
    @media only screen and (min-width: 960px) {
      gap: 15px;
    }
  }
`;

export default function TableHeader() {
  return (
    <StyledHeader>
      <span />
      <span />
      <div>
        <span>Países</span>
        <span>Servidores</span>
        <span>Dispositivos</span>
        <span>Devolución</span>
        <span>Idioma</span>
        <span>Compatibilidad</span>
        <span>Guarda Logs</span>
        <span>Acepta P2P</span>
      </div>
    </StyledHeader>
  );
}
