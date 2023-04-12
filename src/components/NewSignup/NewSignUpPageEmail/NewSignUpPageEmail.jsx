import InputTextField from '../../InputTextField/InputTextField';
import BlueButton from '../../BlueButton/BlueButton';

import styles from './NewSignUpPageEmail.module.scss';

export default function NewSignUpPageEmail() {
    return (
        <>
            <div>
                <div className={`${styles.form}`}>
                    <InputTextField placeholder="Email address" password={false}/>
                </div>
            </div>

            <div className={`${styles.forMargin}`}>
                <BlueButton placeholderText={"Next"}/>
            </div>
        </>
    );
}