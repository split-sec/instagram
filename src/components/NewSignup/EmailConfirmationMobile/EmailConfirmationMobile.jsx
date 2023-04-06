import TopNavBackWithLink from '../../TopNavWithBackLink/TopNavWithBackLink';
import InputTextField from '../../InputTextField/InputTextField';

import styles from './EmailConfirmationMobile.module.scss';
import BlueButton from '../../BlueButton/BlueButton';

export default function EmailConfirmationMobile() {
    const emailaddress = "prathap@gmail.com";

    return (
        <>
            <TopNavBackWithLink />
            <div className={`${styles.container} flex flex-col`}>
                <div className={`${styles.header}`}>Enter confirmation code</div>

                <div className={`${styles.text}`}>
                    Enter the confirmation code that we sent to {emailaddress}.
                    <span className={`${styles.link}`}> Resend code.</span>
                </div>

                <InputTextField placeholder="Confirmation code" />

                <BlueButton />
            </div>
        </>
    );
}