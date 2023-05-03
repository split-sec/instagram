import TopNavBackWithLink from '../../TopNavWithBackLink/TopNavWithBackLink';
import InputTextField from '../../InputTextField/InputTextField';

import styles from './EmailConfirmationMobile.module.scss';
import BlueButton from '../../BlueButton/BlueButton';
import { useState } from 'react';

export default function EmailConfirmationMobile() {
    const emailaddress = "prathap@gmail.com";
    
    const [otp, setOtp] = useState("");
    const [buttonState, setButtonState] = useState(false);

    function handleStateChange(e) {
        setOtp(e.target.value);
    }

    return (
        <>
            <TopNavBackWithLink rightLogo={<></>} middleText={"Register"} options={false}/>
            <div className={`${styles.container} flex flex-col`}>
                <div className={`${styles.header}`}>Enter confirmation code</div>

                <div className={`${styles.text}`}>
                    Enter the confirmation code that we sent to {emailaddress}.
                    <span className={`${styles.link}`}> Resend code.</span>
                </div>

                <InputTextField handleStateChange={handleStateChange} placeholder="Confirmation code" />

                <div className={`${styles.forMargin}`}>
                    <BlueButton placeholderText={"Next"}
                        style={!buttonState ? {backgroundColor:"rgba(0,149,246, 0.7", padding:"13px 20px"} : {padding:"13px 120px"}}
                    />
                </div>
            </div>
        </>
    );
}