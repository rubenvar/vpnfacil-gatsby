import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ViewContext } from '../context/ViewContext';
import TableHeader from './TableHeader';
import Row from './Row';
import Card from './Card';
import { OrderContext } from '../context/OrderContext';

const StyledList = styled.section`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 0 var(--defSidePadding);
  display: grid;
  &.table {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  &.blocks {
    @media only screen and (min-width: 660px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media only screen and (min-width: 1280px) {
      grid-template-columns: repeat(4, 1fr);
    }
    gap: 34px;
  }
`;

export default function List({ vpns }) {
  const { table } = useContext(ViewContext);
  const { dir, criteria } = useContext(OrderContext);

  if (criteria) {
    // use stored dir string as bool
    const isDown = dir === 'down';
    // sort all vpns in place on criteria context change
    vpns.sort((a, b) => {
      let first = a[criteria.value];
      let sec = b[criteria.value];
      if (criteria.value === 'name') {
        first = b.name.toLowerCase();
        sec = a.name.toLowerCase();
      }
      if (criteria.value === 'devices') {
        // convert 'unlimited' string to big number
        if (first === 'unlimited') first = 999;
        if (sec === 'unlimited') sec = 999;
        // all to numbers for proper sorting
        if (first) first = +first;
        if (sec) sec = +sec;
      }
      if (first < sec) return isDown ? 1 : -1;
      if (first > sec) return isDown ? -1 : 1;
      return 0;
    });
  }

  return (
    <StyledList className={table ? 'table' : 'blocks'}>
      {table ? (
        <>
          <TableHeader />
          {vpns.map((vpn) => (
            <Row key={vpn.code} vpn={vpn} />
          ))}
        </>
      ) : (
        vpns.map((vpn) => <Card key={vpn.code} vpn={vpn} />)
      )}
    </StyledList>
  );
}

List.propTypes = {
  vpns: PropTypes.array.isRequired,
};
