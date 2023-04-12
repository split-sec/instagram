import BlueButton from '../../BlueButton/BlueButton';
import TopNavBackWithLink from '../../TopNavWithBackLink/TopNavWithBackLink';
import styles from './RegisterBirthdayMobile.module.scss';

export default function RegisterBirthdayMobile() {
    return (
        <div>
            <TopNavBackWithLink middleText={"Register"} rightLogo={<></>} options={false}/>

            <div className={`${styles.container} flex flex-col`}>
                <div className={`${styles.imagePlaceholder} flex`}>
                    <div className={`${styles.image}`}></div>
                </div>

                <div className={`${styles.boldText}`}>Add your date of birth</div>

                <div className={`${styles.info} flex flex-col`}>
                    <div>This won't be part of your public profile.</div>
                    <div className={`${styles.linkText}`}>Why do I need to provide my date of birth?</div>
                </div>

                <div>
                    Date selection
                </div>

                <div className={`${styles.info} ${styles.infoSmall}`}>
                    Use your own date of birth, even if this account is for a business, pet or something else.
                </div>

                <div className={`${styles.forMargin}`}>
                    <BlueButton placeholderText={"Next"} />
                </div>
            </div>
        </div>
    );
}