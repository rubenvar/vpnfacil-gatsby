import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  cursor: pointer;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.15), 0 0 10px 4px rgba(0, 0, 0, 0.05);
  border-radius: var(--buttonRadius);
  border: none;
  padding: 14px 36px;
  margin: 10px 0;
  transition: all 0.3s;
  font-size: 21px;
  &.main {
    background: var(--primary700);
    color: var(--grey100);
  }
  &.light {
    background: var(--primary300);
    color: var(--grey800);
  }
  &:hover {
    opacity: 0.8;
  }
`;

export default function Button({ link, main, text }) {
  return (
    <a href={link}>
      <StyledButton type="button" className={main ? 'main' : 'light'}>
        {text}
      </StyledButton>
    </a>
  );
}

Button.propTypes = {
  link: PropTypes.string,
  main: PropTypes.bool,
  text: PropTypes.string,
};
