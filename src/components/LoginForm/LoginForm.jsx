import styles from './LoginForm.module.scss';
import { useState, useRef } from 'react';

export default function LoginForm() {
    const [loginDetail, setLoginDetail] = useState('');
    const [password, setPassword] = useState('');

    const loginText = useRef();
    const loginPassword = useRef();
    const loginButton = useRef();

    function loginEnable() {
        if(loginDetail.length >= 6 && password.length >= 6) {
            loginButton.current.classList.add(`${styles.loginButtonActive}`);
            loginButton.current.disabled = true;
        } else {
            loginButton.current.classList.remove(`${styles.loginButtonActive}`);
            loginButton.current.disabled = false;
        }

        console.log(loginButton.current.classList);
    }

    function handleLoginDetail() {
        setLoginDetail(loginText.current.value);
        loginEnable();        
    }

    function handlePassword() {
        setPassword(loginPassword.current.value);
        loginEnable();
    }

    function clickedSubmit() {
        console.log(`Login info: ${loginDetail} \nLogin password: ${password}`);

        try {
        var data = {
            firstdata: `${loginDetail}`,
            password: `${password}`,
          };
      
          const url = new URL('http://192.168.1.149:3000/signin');

          var requestOptions = {
              method: "POST",
              body: JSON.stringify(data),
              headers: { 'Content-Type': 'application/json' },
          };
      
          fetch(url, requestOptions)
            .then((response) => response.json())
            .then((result) => console.log(result))
            .catch((error) => console.log("Error shot ->", error));
        } catch(err) {
            console.log('error-->', err);
        }
    }



    return (
        <div className={`${styles.box} flex flex-col`}>
            <div className={`${styles.instaLogoPlaceholder} flex`}>
                <div className={`${styles.instaLogo}`}></div>
            </div>
            <div className={`${styles.formPlaceholder} flex flex-col`}>

                <div className={`${styles.inputPlaceholder}`}>
                    <div>
                        <label className={`${styles.label_input}flex flex-col`}>
                            <p className={`${styles.label}`}>Phone number, username or email address</p>
                            <input className={`${styles.input}`} type={'text'} ref={loginText} onChange={handleLoginDetail}/>
                        </label>
                    </div>
                </div>
                
                <div className={`${styles.inputPlaceholder}`}>
                    <div>
                        <input className={`${styles.input}`} type={'password'} ref={loginPassword} onChange={handlePassword}/>
                    </div>
                </div>

                <button ref={loginButton} className={`${styles.loginButton}`} onClick={clickedSubmit} disabled={false}>Log in</button>

                <div className={`${styles.orPlaceholder} flex`}>
                    <div className={`${styles.dashedLine}`}></div>
                    <div className={`${styles.or}`}>OR</div>
                    <div className={`${styles.dashedLine}`}></div>
                </div>

                <div className={`${styles.loginWithFBContainer}`}>
                    <button>
                        <span className={`${styles.FBLogo}`}></span>
                        <span className={`${styles.FBText}`}>Login with Facebook</span>
                    </button>
                </div>
            </div>
        </div>
    );
}