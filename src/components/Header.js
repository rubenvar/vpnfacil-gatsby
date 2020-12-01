import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledHeader = styled.header`
  .inner {
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 0 var(--defSidePadding);
    height: var(--headerHeight);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <div className="inner">
        <h1>VPNFácil</h1>
        <nav>
          <Link to="/all">Todos</Link>
          <Link to="/blog">Blog</Link>
        </nav>
      </div>
    </StyledHeader>
  );
}
