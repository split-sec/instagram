import { NavLink } from 'react-router-dom';

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

            <BlueButton />
        </>
    );
}