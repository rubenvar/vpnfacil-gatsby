import styled, { css } from 'styled-components';

export const StyledHeader = styled.header`
  position: relative;
  z-index: 99;
  .inner {
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 0 var(--defSidePadding);
    height: var(--headerHeight);
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1,
    h2 {
      font-size: 26px;
      margin: 0;
      font-family: 'Audiowide', cursive;
      a {
        text-decoration: none;
        opacity: 0.5;
        transition: all 0.3s;
        color: var(--secondary300);
        &:hover {
          opacity: 0.95;
        }
      }
    }
  }
`;

export const StyledNav = styled.nav`
  height: 100%;
  display: flex;
  font-size: 20px;
  align-items: center;
  button {
    display: block;
    background: none;
    border: none;
    box-shadow: none;
    width: 25px;
    height: 19px;
    position: relative;
    cursor: pointer;
    @media only screen and (min-width: 767px) {
      display: none;
    }
    &::before,
    &::after,
    div {
      content: '';
      position: absolute;
      right: 0;
      width: 100%;
      height: 2px;
      background-color: var(--secondary500);
      transition: all 0.4s;
      transform-origin: center;
    }
    &:hover {
      &::before,
      &::after,
      div {
        background-color: var(--primary500);
      }
    }
    &::before {
      top: 0;
      width: 50%;
      ${({ isOpen }) =>
        isOpen &&
        css`
          width: 100%;
          top: 50%;
          transform: rotate(-45deg);
        `}
    }
    &::after {
      bottom: 0;
      width: 75%;
      ${({ isOpen }) =>
        isOpen &&
        css`
          width: 100%;
          top: 50%;
          transform: rotate(45deg);
        `}
    }
    div {
      top: 0;
      bottom: 0;
      margin: auto;
      ${({ isOpen }) =>
        isOpen &&
        css`
          width: 100%;
          opacity: 0;
        `}
    }
  }
  ul {
    /* display: ${({ isOpen }) => (isOpen ? 'block' : 'none')}; */
    display: block;
    width: 100%;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    @media only screen and (min-width: 767px) {
      display: flex;
      opacity: 1;
    }
    ${({ isMobile, isOpen }) =>
      isMobile &&
      css`
        background-color: #fffd;
        position: fixed;
        padding-top: var(--headerHeight);
        /* height: calc(100% - var(--headerHeight)); */
        height: 100%;
        bottom: 0;
        left: 0;
        /* z-index: 99; */
        z-index: -1;
        transform: translateY(${isOpen ? 0 : '-1999px'});
        opacity: ${isOpen ? 1 : 0};
        transition: all 0.4s;
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
        color: var(--secondary500);
        padding: 0 10px;
        transition: all 0.3s;
        @media only screen and (min-width: 767px) {
          color: var(--primary500);
          display: inline-flex;
          &:hover {
            color: var(--secondary300);
          }
        }
      }
    }
  }
`;
