import BlueButton from '../../BlueButton/BlueButton';
import TopNavBackWithLink from '../../TopNavWithBackLink/TopNavWithBackLink';
import InputTextField from '../../InputTextField/InputTextField';

import styles from './RegisterNameMobile.module.scss';
import { useState } from 'react';

export default function RegisterNameMobile() {
    const [fullname, setFullname] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <TopNavBackWithLink rightLogo={<></>} options={false} middleText={"Register"}/>

            <div className={`${styles.container} flex flex-col`}>
            <div className={`${styles.header}`}>Enter name and password</div>
                <div className={`${styles.text}`}>
                    Add your name so that friends can find you.
                </div>

                <InputTextField placeholder="Full Name" password={false} button={false}/>
                <div style={{marginTop: "10px"}} />
                <InputTextField placeholder="Password" password={true} button={true}/>

                <div className={`${styles.forMargin}`}>
                    <BlueButton style={{padding: "13px 20px", lineHeight: "18px"}} placeholderText="Next" />
                </div>
            </div>
        </>
    );
}