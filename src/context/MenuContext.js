import PropTypes from 'prop-types';
import React, { useState } from 'react';

const initialState = {
  isMenuOpen: false,
  toggleMenu: () => {},
  closeMenu: () => {},
};

// init Context
const MenuContext = React.createContext(initialState);

function MenuProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(initialState.isMenuOpen);
  return (
    <MenuContext.Provider
      value={{
        isMenuOpen,
        toggleMenu: () => setIsMenuOpen(!isMenuOpen),
        closeMenu: () => setIsMenuOpen(false),
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

MenuProvider.propTypes = {
  children: PropTypes.object,
};

export { MenuContext, MenuProvider };
