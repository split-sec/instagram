import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

import BlueButton from '../../BlueButton/BlueButton';
import InstaLogo from '../../InstaLogo/InstaLogo';
import FromMeta from '../../FromMeta/FromMeta';

import styles from './NewLoginPage.module.scss';
import OrSeparator from '../../OrSeparator/OrSeparator';
import InputTextField from '../../InputTextField/InputTextField';

export default function NewLoginPage() {
    const [loginText, setLoginText] = useState("");
    const [passwordText, setPasswordText] = useState("");

    return (
        <>
            <div className={`${styles.container} flex flex-col`}>
                <div className={`${styles.logoContainer}`}>
                    <InstaLogo />
                </div>

                <div className={`${styles.buttonContainer}`}>
                    <BlueButton placeholderText="Continue using Facebook"/>
                </div>

                <OrSeparator />

                <InputTextField 
                    placeholder="Phone number, username or email address" 
                    button={false} 
                    inputText={loginText} 
                    setInputText={setLoginText}/>

                <InputTextField 
                    placeholder="Password" 
                    button={true} 
                    password={true}
                    inputText={passwordText} 
                    setInputText={setPasswordText}/>

                <Link to='/' className={`${styles.align}`}>
                    <div className={`${styles.forgotPlaceholder} flex`}>
                        Forgotten your password?
                    </div>
                </Link>

                <div className={`${styles.buttonContainer}`}>
                    <BlueButton placeholderText="Login" />
                </div>

                <div className={`${styles.signUp}`}>
                    Don't have an account? 
                    <Link to='/accounts/signup/phone' className={`${styles.link}`}> Sign up</Link>
                </div>

            </div>

            <FromMeta />
        </>
    );
}