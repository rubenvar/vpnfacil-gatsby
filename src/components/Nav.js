// ideas https://medium.com/swlh/create-a-menu-for-your-gatsby-website-without-libs-b7eb3a563fd2
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { useWindowWidth } from '@react-hook/window-size';
import { globalHistory } from '@reach/router';

import { MenuContext } from '../context/MenuContext';
import { StyledNav } from './styles/HeaderStyles';

export default function Nav() {
  const { isMenuOpen, toggleMenu, closeMenu } = useContext(MenuContext);
  const width = useWindowWidth();
  const [isMobile, setIsMobile] = useState(width ? width < 767 : false);

  // close menu on any route change 🎊 (https://stackoverflow.com/questions/61274365/allow-component-to-detect-route-change-in-gatsby)
  useEffect(() =>
    globalHistory.listen(({ action }) => {
      if (action === 'PUSH') closeMenu();
    })
  );

  useEffect(() => {
    if (width < 767) setIsMobile(true);
    if (width >= 767) setIsMobile(false);
  }, [width]);

  return (
    <StyledNav isMobile={isMobile} isOpen={isMenuOpen}>
      <button type="button" onClick={toggleMenu}>
        <div />
      </button>
      <ul>
        <li>
          <Link to="/guias/ofertas-vpn-2020/">Mejores Ofertas 2020</Link>
        </li>
        <li>
          <Link to="/guias/">Guias</Link>
        </li>
        <li>
          <Link to="/guias/preguntas-frecuentes/">FAQ</Link>
        </li>
      </ul>
    </StyledNav>
  );
}
