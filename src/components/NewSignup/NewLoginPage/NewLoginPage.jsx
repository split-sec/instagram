import BlueButton from '../../BlueButton/BlueButton';
import InstaLogo from '../../InstaLogo/InstaLogo';
import FromMeta from '../../FromMeta/FromMeta';

import styles from './NewLoginPage.module.scss';

export default function NewLoginPage() {
    return (
        <>
            <div className={`${styles.container} flex flex-col`}>
                <div className={`${styles.logoContainer}`}>
                    <InstaLogo />
                </div>

                <div className={`${styles.buttonContainer}`}>
                    <BlueButton />
                </div>


            </div>

            <FromMeta />
        </>
    );
}