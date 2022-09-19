import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import StarRating from '@rubenvara/react-star-rating';
import Section, { StyledTitle } from './Section';

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  gap: 15px;
  transition: all 0.3s;
  padding: 7px;
  margin: 20px 0;
  &.main,
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
  .star-ratings {
    margin-right: 12px;
  }
`;

export function Ratings({ vpn }) {
  const ratings = [
    {
      title: 'Privacidad',
      text: 'cuánto protegen realmente tu información',
      value: vpn.privacyRating,
    },
    {
      title: 'Precios',
      text: '¿ofrece planes competitivos?',
      value: vpn.priceRating,
    },
    {
      title: 'Velocidad',
      text: 'resultados en el test de velocidad',
      value: vpn.speedRating,
    },
    {
      title: 'Soporte Técnico',
      text: 'respuesta y servicio del soporte',
      value: vpn.supportRating,
    },
    {
      title: 'Características',
      text: 'nivel de las opciones que ofrece',
      value: vpn.featuresRating,
    },
    {
      title: 'Facilidad de Uso',
      text: 'interfaz intuitiva, app sin errores, etc.',
      value: vpn.useRating,
    },
    { title: 'General', text: 'puntuación total', value: vpn.rating },
  ];

  return (
    <Section id="ratings">
      <StyledTitle>Puntuaciones</StyledTitle>
      {ratings.map((rat) =>
        rat.value > 0 ? (
          <Row
            key={rat.title}
            className={rat.title === 'General' ? 'main' : null}
          >
            <div className="title">
              <h3>{rat.title}</h3>
              {rat.text && <span>{rat.text}</span>}
            </div>
            <StarRating
              rating={rat.value / 20}
              config={{
                fullColor: '#ffc107',
                emptyColor: '#7f7f7f',
                size: 28,
                showText: true,
              }}
              style={{ justifySelf: 'end', margin: 0 }}
            />
          </Row>
        ) : null
      )}
    </Section>
  );
}

Ratings.propTypes = {
  vpn: PropTypes.shape({
    featuresRating: PropTypes.number,
    priceRating: PropTypes.number,
    privacyRating: PropTypes.number,
    rating: PropTypes.number,
    speedRating: PropTypes.number,
    supportRating: PropTypes.number,
    useRating: PropTypes.number,
  }),
};
