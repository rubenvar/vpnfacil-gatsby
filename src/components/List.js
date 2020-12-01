import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

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
  grid-template-columns: repeat(1, 1fr);
  gap: ${({ tableView }) => (tableView ? `12px` : `34px`)};
  ${({ tableView }) =>
    !tableView &&
    css`
      @media only screen and (min-width: 660px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media only screen and (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media only screen and (min-width: 1280px) {
        grid-template-columns: repeat(4, 1fr);
      }
    `};
`;

export default function List({ vpns }) {
  const { table } = useContext(ViewContext);
  const { decrease, criteria } = useContext(OrderContext);

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
    }

    if (first < sec) return decrease ? -1 : 1;
    if (first > sec) return decrease ? 1 : -1;
    return 0;
  });

  return (
    <StyledList tableView={table}>
      {table ? (
        <>
          <TableHeader />
          {vpns.map((vpn) => (
            <Row key={vpn.id} vpn={vpn} />
          ))}
        </>
      ) : (
        vpns.map((vpn) => <Card key={vpn.id} vpn={vpn} />)
      )}
    </StyledList>
  );
}

List.propTypes = {
  vpns: PropTypes.array,
};
