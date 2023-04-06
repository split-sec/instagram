import BlueButton from '../../BlueButton/BlueButton';
import TopNavBackWithLink from '../../TopNavWithBackLink/TopNavWithBackLink';
import InputTextField from '../../InputTextField/InputTextField';

import styles from './RegisterNameMobile.module.scss';

export default function RegisterNameMobile() {
    return (
        <>
            <TopNavBackWithLink />

            <div className={`${styles.container} flex flex-col`}>
            <div className={`${styles.header}`}>Enter name and password</div>
                <div className={`${styles.text}`}>
                    Add your name so that friends can find you.
                </div>

                <InputTextField placeholder="Full Name" password={false}/>

                <InputTextField placeholder="Password" password={true} />

                <BlueButton placeholderText="Next" />
            </div>
        </>
    );
}