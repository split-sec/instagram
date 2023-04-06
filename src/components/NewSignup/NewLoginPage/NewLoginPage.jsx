import BlueButton from '../../BlueButton/BlueButton';
import InstaLogo from '../../InstaLogo/InstaLogo';
import FromMeta from '../../FromMeta/FromMeta';

import styles from './NewLoginPage.module.scss';
import OrSeparator from '../../OrSeparator/OrSeparator';
import InputTextField from '../../InputTextField/InputTextField';

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

                <OrSeparator />

                <InputTextField placeholder="Phone number, username or email address" button={false}/>

                <InputTextField placeholder="Password" button={true} password={true}/>

            </div>

            <FromMeta />
        </>
    );
}