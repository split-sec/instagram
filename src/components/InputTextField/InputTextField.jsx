import { useEffect, useState, useRef, useContext } from 'react';

import styles from './InputTextField.module.scss';

export default function InputTextField(props) {
    let { placeholder, button, password, handleStateChange, name} = props;

    const input = useRef();
    const label = useRef();
    const buttonRef = useRef();

    const [inputText, setInputText] = useState("");
    const [show, setShow] = useState(true);

    function handleChange() {
        setInputText(input.current.value);
    }

    function handleClick() {
        setShow((prev) => !prev);
    }

    useEffect(() => {
        if(inputText.length > 0) {
            label.current.classList.add(`${styles.placeholderTextActive}`);
            if(password) {
                buttonRef.current.classList.add(`${styles.buttonActive}`);            
            }
        } else {
            label.current.classList.remove(`${styles.placeholderTextActive}`);
            if(password) {
                buttonRef.current.classList.remove(`${styles.buttonActive}`);
            }
        }
    }, [inputText, password]);

    return (
        <>
            <div className={`${styles.placeholder} flex`}>
                <div className={`${styles.label}`}>
                    <p className={`${styles.placeholderText}`} ref={label}>{placeholder}</p>
                </div>

                <input className={`${styles.inputPlaceholder}`} name={name} type={password ? show ? "password" : "text" : "text"} onChange={(e) => {handleStateChange(e);handleChange()}} ref={input}></input>

                {button ? <button className={`${styles.button}`} onClick={handleClick} ref={buttonRef}>{show ? "Show" : "Hide"}</button> : <></>}
            </div>
        </>
    );
}