import { useState } from 'react';

import { miniDownChevronSvg } from '../assets/Icons';

import NewSignupOption from './NewSignupOption/NewSignupOption';
import NewLoginPage from './NewLoginPage/NewLoginPage';
import Footer from '../Footer/Footer';

import styles from './NewSignupLanding.module.scss';


export default function NewSignupLanding() {
    const [basePage, setBasePage] = useState(true);

    return (
        <div>
            <div className={`${styles.topNav} flex`}>
                <p>English (UK)</p>
                <div className={`${styles.downArrow}`}>{ miniDownChevronSvg() }</div>
            </div>


            { basePage ? <NewSignupOption setBasePage={setBasePage}/> : <NewLoginPage /> }

            <Footer />
        </div>
    )
}