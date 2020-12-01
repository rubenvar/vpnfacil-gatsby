import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from './Card';

const StyledList = styled.section`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 0 var(--defSidePadding);
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 34px;
  &.table-view {
    gap: 12px;
  }
  &.block-view {
    @media only screen and (min-width: 660px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media only screen and (min-width: 1280px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default function List({ vpns = [] }) {
  return (
    <StyledList id="list" className="block-view">
      {vpns.map((vpn) => (
        <Card key={vpn.id} vpn={vpn} />
      ))}
    </StyledList>
  );
}

List.propTypes = {
  vpns: PropTypes.array,
};
