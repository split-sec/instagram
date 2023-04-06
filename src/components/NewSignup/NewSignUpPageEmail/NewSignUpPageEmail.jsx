import BlueButton from '../../BlueButton/BlueButton';

import styles from './NewSignUpPageEmail.module.scss';

export default function NewSignUpPageEmail() {
    return (
        <>
            <div>
                <div className={`${styles.form}`}>
                    <input className={`${styles.formInput}`} placeholder="Phone number"></input>
                </div>
            </div>

            <BlueButton />
        </>
    );
}