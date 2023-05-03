import { Link } from 'react-router-dom';
import BlueButton from '../../BlueButton/BlueButton.jsx';
import InstaLogo from '../../InstaLogo/InstaLogo.jsx';
import FromMeta from '../../FromMeta/FromMeta.jsx';

import styles from './NewSignupOption.module.scss';

export default function NewSignupOption({ setBasePage }) {
    function handleChange() {
        setBasePage(false);
    }

    return (
        <div>
            <div className={`${styles.topContainer} flex flex-col`}>
               <InstaLogo />

                <div class={`${styles.textContainer}`}>
                    <div className={`${styles.text}`}>
                        Sign up to see <span className={`${styles.orangeColor}`}>photos</span> and
                        <span className={`${styles.pinkColor}`}> videos</span> from your friends.
                    </div>
                </div>

                <div className={`${styles.buttonPlaceholder} flex`}>
                    <BlueButton style={{padding: "13px 20px", lineHeight: "18px"}} placeholderText="Get the Instagram app"/>
                </div>

                <div className={`${styles.linksPlaceholder} flex`}>
                    <span className={`${styles.link}`} onClick={handleChange}>Log In</span>
                    <div className={`${styles.textWithin}`}>or</div>
                    <Link to='accounts/signup/phone' className={`${styles.link}`}>Sign Up</Link>
                </div>
            </div>

            <FromMeta />
        </div>
    );
}