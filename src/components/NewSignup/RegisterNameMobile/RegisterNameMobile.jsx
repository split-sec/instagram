import BlueButton from '../../BlueButton/BlueButton';
import TopNavBackWithLink from '../../TopNavWithBackLink/TopNavWithBackLink';
import InputTextField from '../../InputTextField/InputTextField';

import styles from './RegisterNameMobile.module.scss';

export default function RegisterNameMobile() {
    return (
        <>
            <TopNavBackWithLink rightLogo={<></>} options={false} middleText={"Register"}/>

            <div className={`${styles.container} flex flex-col`}>
            <div className={`${styles.header}`}>Enter name and password</div>
                <div className={`${styles.text}`}>
                    Add your name so that friends can find you.
                </div>

                <InputTextField placeholder="Full Name" password={false} button={false}/>

                <InputTextField placeholder="Password" password={true} button={true}/>

                {/* <InputTextField
                        placeholder="Password"
                        button={true}
                        password={true} */}

                <div className={`${styles.forMargin}`}>
                    <BlueButton placeholderText="Next" />
                </div>
            </div>
        </>
    );
}