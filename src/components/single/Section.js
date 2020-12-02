import React from 'react';
import styled from 'styled-components';

// import ToTop from './ToTop.svelte';

const Section = styled.section`
  padding: 40px 0;
  position: relative;
  > div {
    width: 100%;
    max-width: 780px;
    margin: 0 auto;
    // padding: 0 var(--defSidePadding);
    padding: 0 15px;
    @media only screen and (min-width: 820px) {
      padding: 0;
    }
    &.wider {
      max-width: var(--widerWidth);
      padding: 0 var(--defSidePadding);
    }
  }
`;

export const StyledTitle = styled.h2`
  font-family: var(--specialFont);
  font-weight: 700;
  font-size: 36px;
  padding-bottom: 4px;
  border-bottom: 3px solid var(--primary500);
  margin-bottom: 36px;
`;

export default function SingleSection({ children, wide = false, id = '' }) {
  return (
    <Section id={id}>
      <div className={wide ? 'wider' : undefined}>
        {children}
        {/* {id !== 'top' && <ToTop />} */}
      </div>
    </Section>
  );
}
