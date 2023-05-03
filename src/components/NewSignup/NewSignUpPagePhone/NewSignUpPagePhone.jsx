import BlueButton from '../../BlueButton/BlueButton';

import styles from './NewSignUpPagePhone.module.scss';

export default function NewSignUpPagePhone() {
    return (
        <>
            <div className={`${styles.numberContainer} flex`}>
                <div className={`${styles.countryCode}`}>
                    IN
                    +91
                </div>
                <div className={`${styles.form}`}>
                    <input className={`${styles.formInput}`} placeholder="Phone number"></input>
                </div>
            </div>

            <div className={`${styles.infoText}`}>You may receive SMS notifications from us for security and login purposes.</div>

            <div className={`${styles.buttonPlaceholder}`}>
                <BlueButton style={{padding: "13px 20px", lineHeight: "18px"}} placeholderText={"Next"}/>
            </div>
        </>
    );
}