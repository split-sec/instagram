import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import BlueButton from '../../BlueButton/BlueButton';
import InstaLogo from '../../InstaLogo/InstaLogo';
import FromMeta from '../../FromMeta/FromMeta';
import OrSeparator from '../../OrSeparator/OrSeparator';
import InputTextField from '../../InputTextField/InputTextField';

import styles from './NewLoginPage.module.scss';

export default function NewLoginPage() {
    const [loginText, setLoginText] = useState({
        username: "",
        password: "",
    });

    const [buttonState, setButtonState] = useState(false);
    
    function handleStateChange(e) {
        let obj = {...loginText};
        console.log(e.target.name);
        obj[e.target.name] = e.target.value;
        setLoginText(obj);
    }

    useEffect(() => {
        if(loginText.username.length > 5 &&
            loginText.password.length > 5) {
            setButtonState(true);
        } else {
            setButtonState(false);
        }
    }, [loginText])

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
                        password={false}
                        name="username"
                        handleStateChange={handleStateChange}
                        />

                    <InputTextField
                        placeholder="Password"
                        button={true}
                        password={true}
                        name="password"
                        handleStateChange={handleStateChange}
                        />

                    <Link to='/' className={`${styles.align}`}>
                        <div className={`${styles.forgotPlaceholder} flex`}>
                            Forgotten your password?
                        </div>
                    </Link>

                    <div className={`${styles.buttonContainer}`}>
                        <BlueButton placeholderText="Log in" url={`${process.env.REACT_APP_DOMAIN}`}
                            style={!buttonState ? {backgroundColor:"rgba(0,149,246, 0.7"} : {}}
                            disabled={buttonState}
                        />
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