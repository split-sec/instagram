import { useState, useRef } from 'react';
import axios from 'axios';

export default function LoginForm() {
    const [loginDetail, setLoginDetail] = useState('');
    const [password, setPassword] = useState('');

    const loginText = useRef();
    const loginPassword = useRef();

    function clickedSubmit() {
        setLoginDetail(loginText.current.value);
        setPassword(loginPassword.current.value);
        console.log(`Login info: ${loginDetail} \nLogin password: ${password}`);

        axios.get('http://localhost:3000/signin', {
            'firstdata': `${loginDetail}`, 
            'password': `${password}`
        })
        .then(res => console.log(res.data))
        .catch((err) => console.log("Error has occured --->", err));


    }



    return (
        <div>
            <h1>Vanakam da</h1>
            <input type={'text'} ref={loginText}/>
            <input type={'password'} ref={loginPassword}/>
            <button onClick={clickedSubmit}>Submit</button>
        </div>
    );
}