import { useEffect, useState } from 'react';

import './HomePage.css';

import MobileRoutes from '../../components/MobileRoutes';
import TabletRoutes from '../../components/TabletRoutes';

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }, []); 

    return windowSize;
}

export default function HomePage() {
    const { width, height } = useWindowSize();

    return (
      <>
        {
          width < 640 ? <MobileRoutes /> : <TabletRoutes />
        }
      </>
    );
}