import styles from './LoginForm.module.scss';
// import instaLogo from '../../../../'
import { useState, useRef } from 'react';

export default function LoginForm() {
    const [loginDetail, setLoginDetail] = useState('');
    const [password, setPassword] = useState('');

    const loginText = useRef();
    const loginPassword = useRef();

    function clickedSubmit() {
        setLoginDetail(loginText.current.value);
        setPassword(loginPassword.current.value);
        console.log(`Login info: ${loginDetail} \nLogin password: ${password}`);

        // try {
        // var data = {
        //     firstdata: `${loginDetail}`,
        //     password: `${password}`,
        //   };
      
        //   const url = new URL('http://192.168.1.149:3000/signin');
        //   url.search = new URLSearchParams(data).toString();
        //   var requestOptions = {
        //       method: "GET",
        //   };
      
        //   fetch(url, requestOptions)
        //     .then((response) => response.json())
        //     .then((result) => console.log(result))
        //     .catch((error) => console.log("Error shot ->", error));
        // } catch(err) {
        //     console.log('error-->', err);
        // }
    }



    return (
        <div className={`${styles.box} flex flex-col`}>
            <div className={`${styles.instaLogoPlaceholder} flex`}>
                <div className={`${styles.instaLogo}`}></div>
            </div>
            <div className={`${styles.formPlaceholder} flex flex-col`}>
                <div className={`${styles.inputPlaceholder}`}>
                    <input className={`${styles.input}`} type={'text'} ref={loginText}/>
                </div>
                
                <div className={`${styles.inputPlaceholder}`}>
                    <input className={`${styles.input}`} type={'password'} ref={loginPassword}/>
                </div>

                <button className={`${styles.loginButton}`} onClick={clickedSubmit}>Log in</button>
            </div>
        </div>
    );
}