// from https://reedbarger.com/how-to-create-a-usewindowsize-react-hook/
import { useEffect, useState } from 'react';

export function useWindowSize() {
  // not doable because of rule-of-hooks, so workaround with isSSR
  // if (typeof window !== "undefined") {
  //  return { width: 1200, height: 800 };
  // }
  const isSSR = typeof window !== 'undefined';

  const [windowSize, setWindowSize] = useState({
    width: isSSR ? 1200 : window.innerWidth,
    height: isSSR ? 800 : window.innerHeight,
  });

  const changeWindowSize = () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener('resize', changeWindowSize);

    // remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', changeWindowSize);
    };
  }, []);

  return windowSize;
}
