import InputTextField from '../../InputTextField/InputTextField';
import BlueButton from '../../BlueButton/BlueButton';

import styles from './NewSignUpPageEmail.module.scss';
import { useState } from 'react';

export default function NewSignUpPageEmail() {
    const [email, setEmail] = useState();

    function handleStateChange(e) {
        setEmail(e.target.value);
    }

    return (
        <>
            <div>
                <div className={`${styles.form}`}>
                    <InputTextField
                        placeholder="Email address"
                        button={false}
                        password={false}
                        name="emailaddress"
                        handleStateChange={handleStateChange}
                    />
                </div>
            </div>

            <div className={`${styles.forMargin}`}>
                <BlueButton style={{padding: "13px 20px", lineHeight: "18px"}} placeholderText={"Next"}/>
            </div>
        </>
    );
}