import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import BlueButton from '../../BlueButton/BlueButton';
import InstaLogo from '../../InstaLogo/InstaLogo';
import FromMeta from '../../FromMeta/FromMeta';
import OrSeparator from '../../OrSeparator/OrSeparator';
import InputTextField from '../../InputTextField/InputTextField';

import styles from './NewLoginPage.module.scss';

export default function NewLoginPage({setLoggedIn}) {
    const [loginText, setLoginText] = useState({
        username: "",
        password: "",
    });

    const [buttonState, setButtonState] = useState(false);
    
    function handleStateChange(e) {
        let obj = {...loginText};
        obj[e.target.name] = e.target.value;
        setLoginText(obj);
    }

    function handleClick() {
        try {
            var data = {
                firstdata: `${loginText.username}`,
                password: `${loginText.password}`,
            };
        
            const url = new URL(`${process.env.REACT_APP_DOMAIN}/signin`);

            var requestOptions = {
                method: "POST",
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
            };
        
            fetch(url, requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    if(result.message === 'Authorized user!') {
                        setLoggedIn(true);
                    }
                })
                .catch((error) => console.log("Error shot ->", error));
        } catch(err) {
            console.log('error-->', err);
        }
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
                        <BlueButton placeholderText="Log in" handleClick={handleClick}
                            style={!buttonState ? {backgroundColor:"rgba(0,149,246, 0.7"} : {}}
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