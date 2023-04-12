import TopNavBackWithLink from '../../TopNavWithBackLink/TopNavWithBackLink';
import InputTextField from '../../InputTextField/InputTextField';

import styles from './EmailConfirmationMobile.module.scss';
import BlueButton from '../../BlueButton/BlueButton';

export default function EmailConfirmationMobile() {
    const emailaddress = "prathap@gmail.com";

    return (
        <>
            <TopNavBackWithLink rightLogo={<></>} middleText={"Register"} options={false}/>
            <div className={`${styles.container} flex flex-col`}>
                <div className={`${styles.header}`}>Enter confirmation code</div>

                <div className={`${styles.text}`}>
                    Enter the confirmation code that we sent to {emailaddress}.
                    <span className={`${styles.link}`}> Resend code.</span>
                </div>

                <InputTextField placeholder="Confirmation code" />

                <div className={`${styles.forMargin}`}>
                    <BlueButton placeholderText={"Next"}/>
                </div>
            </div>
        </>
    );
}