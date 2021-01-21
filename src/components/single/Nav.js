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
      justify-content: space-around;
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
    }
  }
`;

const StyledNavItem = styled.button`
  border: none;
  box-shadow: none;
  background: none;
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
  @media only screen and (min-width: 920px) {
    margin: 0;
  }
  &:hover {
    color: var(--secondary600);
  }
  &:focus {
    color: var(--secondary600);
    box-shadow: 0 0 0 2px var(--secondary300);
    outline: none;
  }
`;

const NavItem = ({ goTo, text }) => (
  <StyledNavItem onClick={() => scrollTo(`#${goTo}`)} type="button">
    {text}
  </StyledNavItem>
);

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
          <NavItem goTo="ratings" text="Puntuaciones" />
          <NavItem goTo="numbers" text="En Cifras" />
          <NavItem goTo="languages" text="Idiomas" />
          <NavItem goTo="warranty" text="Garantía" />
          <NavItem goTo="compatible" text="Compatibilidad" />
          {testExists && <NavItem goTo="test" text="Pruebas" />}
          <NavItem goTo="details" text="Detalles" />
          {technicalExists && <NavItem goTo="technical" text="Técnico" />}
          {pricingExists && <NavItem goTo="pricing" text="Precios" />}
          {reviewExists && <NavItem goTo="review" text="Review" />}
          <NavItem goTo="top" text="Volver arriba ⬆" />
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

NavItem.propTypes = {
  text: PropTypes.string,
  goTo: PropTypes.string,
};
