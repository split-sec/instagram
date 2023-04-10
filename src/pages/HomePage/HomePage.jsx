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



            {/********
            **********
            **********
            **********
            ****** */}

  // import Landing from '../Landing/Landing';
  // import NewSignupLanding from '../../components/NewSignup/NewSignupLanding';
  // import NewSignUpPage from '../../components/NewSignup/NewSignUpPage/NewSignUpPage';
  // import NewSignUpPagePhone from '../../components/NewSignup/NewSignUpPagePhone/NewSignUpPagePhone';
  // import NewSignUpPageEmail from '../../components/NewSignup/NewSignUpPageEmail/NewSignUpPageEmail';
  // import EmailConfirmationMobile from '../../components/NewSignup/EmailConfirmationMobile/EmailConfirmationMobile';
  // import RegisterNameMobile from '../../components/NewSignup/RegisterNameMobile/RegisterNameMobile';

            {/* <Routes>
              <Route path='/' element={<NewSignupLanding />} />
              <Route path='accounts/signup' element={<NewSignUpPage />}>
                <Route path='phone' element={<NewSignUpPagePhone />} />
                <Route path='email' element={<NewSignUpPageEmail />} />
              </Route>
              <Route path='accounts/signup/emailConfirmation' element={<EmailConfirmationMobile />} />
              <Route path='accounts/signup/name' element={<RegisterNameMobile />} />
              
            </Routes> */}