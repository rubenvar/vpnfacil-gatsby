import PropTypes from 'prop-types';
import scrollTo from 'gatsby-plugin-smoothscroll';
import React from 'react';
import styled from 'styled-components';

const Bar = styled.section`
  background: white;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.15);
  @media only screen and (min-width: 580px) {
    position: sticky;
    top: 0;
    z-index: 99;
  }
  div {
    width: 100%;
    max-width: var(--widerWidth);
    margin: 0 auto;
    padding: 20px 15px;
    @media only screen and (min-width: 580px) {
      padding: 15px var(--defSidePadding);
    }
    nav {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;
      #vpn-logo {
        display: none;
        cursor: unset;
        color: unset;
        img {
          width: 34px;
          border-radius: 50%;
        }
        h3 {
          margin: 0 0 0 9px;
        }
        @media only screen and (min-width: 580px) {
          display: flex;
          align-items: center;
        }
      }
      span {
        cursor: pointer;
        transition: all 0.3s;
        font-size: 17px;
        color: var(--primary700);
        padding: 3px 6px;
        margin: 7px;
        border: 1px solid var(--primary500);
        border-radius: var(--buttonRadius);
        @media only screen and (min-width: 580px) {
          margin: 5px 15px;
          padding: 0;
          font-size: unset;
          border: none;
          border-radius: none;
        }
        @media only screen and (min-width: 720px) {
          margin: 0;
        }
        &:hover {
          color: var(--secondary600);
        }
      }
    }
  }
`;

export function Nav({
  technicalExists = false,
  pricingExists = false,
  testExists = false,
  reviewExists = false,
  name,
  code,
}) {
  return (
    <Bar>
      <div>
        <nav>
          <span id="vpn-logo">
            <img src={`/logos/${code}.jpg`} alt={`Logo de ${name}`} />
            <h3>{name}</h3>
          </span>
          <span onClick={() => scrollTo('#ratings')}>Puntuaciones</span>
          <span onClick={() => scrollTo('#numbers')}>En Cifras</span>
          <span onClick={() => scrollTo('#languages')}>Idiomas</span>
          <span onClick={() => scrollTo('#warranty')}>Garantía</span>
          <span onClick={() => scrollTo('#compatible')}>Compatibilidad</span>
          {testExists && <span onClick={() => scrollTo('#test')}>Pruebas</span>}
          <span onClick={() => scrollTo('#details')}>Detalles</span>
          {technicalExists && (
            <span onClick={() => scrollTo('#technical')}>Técnico</span>
          )}
          {pricingExists && (
            <span onClick={() => scrollTo('#pricing')}>Precios</span>
          )}
          {reviewExists && (
            <span onClick={() => scrollTo('#review')}>Review</span>
          )}
        </nav>
      </div>
    </Bar>
  );
}

Nav.propTypes = {
  code: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pricingExists: PropTypes.bool.isRequired,
  reviewExists: PropTypes.bool.isRequired,
  technicalExists: PropTypes.bool.isRequired,
  testExists: PropTypes.bool.isRequired,
};
