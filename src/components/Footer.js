import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  padding: 2em 2em 20px;
  margin-top: 150px;
  text-align: center;
  background: linear-gradient(var(--primary500), var(--primary600));
  color: white;
  p {
    font-size: 14px;
    margin: 0;
    color: var(--primary100);
    &.copy {
      margin-bottom: 20px;
    }
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <p className="copy">Copyright ©2020 VPN Fácil</p>
      <p>
        Diseño web por{' '}
        <a
          href="https://platanoplatano.com"
          target="_blank"
          rel="noreferrer"
          title="2 plátanos"
        >
          platanoPlatano
        </a>{' '}
        🍌
      </p>
    </StyledFooter>
  );
}