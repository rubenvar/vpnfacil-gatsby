import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { formatNumber } from '../utils';

const StyledNumbers = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin: 0;
  background-color: var(--primary100);
  padding: 15px 0;
`;

const StyledNumber = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 20px;

  .tag {
    font-size: 15px;
    color: #666;
    font-weight: 300;
    line-height: 1;
  }
`;

const Number = ({ number: { tag, value } }) => (
  <StyledNumber>
    {value && value === 'unlimited'
      ? '∞'
      : value > 0
      ? formatNumber(value)
      : '-'}
    {tag === 'countries' && <span className="tag">países</span>}
    {tag === 'servers' && <span className="tag">servidores</span>}
    {tag === 'devices' && <span className="tag">dispositivos</span>}
  </StyledNumber>
);

export default function CardNumbers({ numbers }) {
  const numbersArray = Object.keys(numbers).map((key) => ({
    tag: key,
    value: numbers[key],
  }));

  return (
    <StyledNumbers>
      {numbersArray.map((number) => (
        <Number key={number.tag} number={number} />
      ))}
    </StyledNumbers>
  );
}

Number.propTypes = {
  number: PropTypes.shape({
    tag: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),
};

CardNumbers.propTypes = {
  numbers: PropTypes.object,
};
