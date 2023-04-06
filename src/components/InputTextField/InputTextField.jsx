import { useEffect, useState, useRef } from 'react';

import styles from './InputTextField.module.scss';

export default function InputTextField(props) {
    let { placeholder, button, password } = props;

    const input = useRef();
    const label = useRef();
    const buttonRef = useRef();

    const [inputText, setInputText] = useState("");
    const [show, setShow] = useState(true);

    function handleChange() {
        setInputText(input.current.value);
    }

    function handleClick() {
        //correction needed
        //For changing text from show to hide
        setShow((prev) => !prev);
        console.log(setShow);
        password = !password;
        console.log("password: ", password);
    }

    useEffect(() => {
        //correction needed
        //For showing and hiding show button
        if(inputText.length > 0) {
            console.log("greater than 0");
            label.current.classList.add(`${styles.placeholderTextActive}`);
            // if(password) {
            //     buttonRef.current.classList.add(`${styles.buttonActive}`);            
            // }
        } else {
            label.current.classList.remove(`${styles.placeholderTextActive}`);
            // buttonRef.current.classList.remove(`${styles.buttonActive}`);
        }
    }, [inputText])

    return (
        <>
            <div className={`${styles.placeholder} flex`}>
                <div className={`${styles.label}`}>
                    <p className={`${styles.placeholderText}`} ref={label}>{placeholder}</p>
                </div>

                <input className={`${styles.inputPlaceholder}`} type={password ? "password" : "text"} onChange={handleChange} ref={input}></input>

                {button ? <button className={`${styles.button}`} onClick={handleClick} ref={buttonRef}>{show ? "Show" : "Hide"}</button> : <></>}
            </div>
        </>
    );
}