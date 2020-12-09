import styled, { css } from 'styled-components';

export const Nav = styled.nav`
  height: 100%;
  display: flex;
  font-size: 20px;
  align-items: center;
  button {
    display: block;
    @media only screen and (min-width: 767px) {
      display: none;
    }
  }
  ul {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    width: 100%;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    @media only screen and (min-width: 767px) {
      display: flex;
    }
    ${({ isMobile }) =>
      isMobile &&
      css`
        background-color: #fffd;
        position: fixed;
        height: calc(100% - var(--headerHeight));
        bottom: 0;
        left: 0;
        z-index: 99;
      `}
    li {
      list-style-type: none;
      position: relative;
      padding: 0 0 0 20px;
      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #ccc;
        display: ${({ isMobile }) => (isMobile ? 'block' : 'none')};
      }
      a {
        text-decoration: none;
        display: flex;
        height: 45px;
        align-items: center;
        padding: 0 10px;
        color: var(--primary500);
        transition: all 0.3s;
        &:hover {
          color: var(--secondary300);
        }
        @media only screen and (min-width: 767px) {
          display: inline-flex;
          color: var(--primary300);
        }
      }
    }
  }
`;
