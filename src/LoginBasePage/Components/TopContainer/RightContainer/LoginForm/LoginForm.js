import styles from './LoginForm.module.scss';
import { useState, useRef } from 'react';

export default function LoginForm() {
    const [loginDetail, setLoginDetail] = useState('');
    const [password, setPassword] = useState('');

    const loginText = useRef();
    const loginPassword = useRef();

    function handleLoginDetail() {
        setLoginDetail(loginText.current.value);
    }

    function handlePassword() {
        setPassword(loginPassword.current.value);
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
                            <span>Phone number, username or email address</span>
                            <input className={`${styles.input}`} type={'text'} ref={loginText} onChange={handleLoginDetail}/>
                        </label>
                    </div>
                </div>
                
                <div className={`${styles.inputPlaceholder}`}>
                    <div>
                        <input className={`${styles.input}`} type={'password'} ref={loginPassword} onChange={handlePassword}/>
                    </div>
                </div>

                <button className={`${styles.loginButton}`} onClick={clickedSubmit}>Log in</button>
            </div>
        </div>
    );
}