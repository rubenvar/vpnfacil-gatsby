import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import SingleSection, { StyledTitle } from './Section';
import Button from './Button';
import { formatMoney, formatPercent } from '../../utils';

const PricingTable = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 35px;
  align-items: center;
  @media only screen and (min-width: 580px) {
    grid-template-columns: 1fr 1fr 1.1fr;
  }
  .column {
    display: grid;
    grid-template-rows: repeat(5, auto);
    align-items: center;
    justify-items: center;
    gap: 9px;
    transition: all 0.3s;
    padding: 7px;
    margin: 0;
    box-shadow: 0 2px 5px 3px rgba(0, 0, 0, 0.1);
    border-radius: var(--cardRadius);
    @media only screen and (min-width: 580px) {
      gap: 30px;
      grid-template-rows: repeat(4, 1fr) 1.5fr;
    }
    &.main {
      border: 8px solid var(--winner500);
      transform: scale(1.02);
    }
    h3 {
      font-size: 32px;
      margin: 10px 0;
      span {
        color: var(--grey500);
      }
    }
    p {
      font-size: 24px;
      margin: 7px 0;
      span {
        color: var(--grey500);
        font-size: 18px;
        line-height: 1;
      }
    }
  }
`;

export function Pricing({ vpn }) {
  const plans = [
    {
      duration: vpn.plan1Length,
      price: vpn.plan1Pricing,
      currency: vpn.plan1Currency,
    },
    {
      duration: vpn.plan2Length,
      price: vpn.plan2Pricing,
      currency: vpn.plan2Currency || 'USD',
    },
    {
      duration: vpn.plan3Length,
      price: vpn.plan3Pricing,
      currency: vpn.plan3Currency,
    },
  ];

  plans.forEach((plan) => {
    plan.total = plan.price * plan.duration;
    plan.discount = vpn.plan1Pricing
      ? Math.round(
          100 -
            (plan.price * plan.duration * 100) /
              (vpn.plan1Pricing * plan.duration)
        ) / 100
      : false;
  });
  return (
    <SingleSection id="pricing">
      <StyledTitle>Precios</StyledTitle>
      <PricingTable>
        {plans.map(
          (plan, i) =>
            plan.price !== 0 && (
              <div
                key={i}
                className={i === plans.length - 1 ? 'column main' : 'column'}
              >
                <h3>
                  {plan.duration < 12 ? (
                    <>
                      {plan.duration}{' '}
                      <span>mes{plan.duration > 1 ? 'es' : ''}</span>
                    </>
                  ) : plan.duration >= 12 &&
                    Number.isInteger(plan.duration / 12) ? (
                    <>
                      {plan.duration / 12}{' '}
                      <span>año{plan.duration / 12 > 1 ? 's' : ''}</span>
                    </>
                  ) : (
                    <>
                      {plan.duration}{' '}
                      <span>{plan.duration > 1 ? 'meses' : 'mes'}</span>
                    </>
                  )}
                </h3>
                <p clas="row">
                  {formatMoney(plan.price, plan.currency)} <span>al mes</span>
                </p>
                <p clas="row">
                  {plan.total !== plan.price ? (
                    <>
                      {formatMoney(plan.total, plan.currency)}{' '}
                      <span>total</span>
                    </>
                  ) : (
                    '-'
                  )}
                </p>
                <p clas="row">
                  {plan.discount ? (
                    <>
                      {formatPercent(plan.discount)}
                      <span>ahorro</span>
                    </>
                  ) : (
                    '-'
                  )}
                </p>
                <Button main={i === plans.length - 1} link={vpn.link} />
              </div>
            )
        )}
      </PricingTable>
    </SingleSection>
  );
}

Pricing.propTypes = {
  vpn: PropTypes.shape({
    link: PropTypes.string,
    plan1Currency: PropTypes.string,
    plan1Length: PropTypes.number,
    plan1Pricing: PropTypes.number,
    plan2Currency: PropTypes.string,
    plan2Length: PropTypes.number,
    plan2Pricing: PropTypes.number,
    plan3Currency: PropTypes.string,
    plan3Length: PropTypes.number,
    plan3Pricing: PropTypes.number,
  }),
};
