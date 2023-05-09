import BlueButton from '../../BlueButton/BlueButton';
import TopNavBackWithLink from '../../TopNavWithBackLink/TopNavWithBackLink';
import styles from './EditProfile.module.scss';

export default function EditProfile() {
    return (
        <>
            <TopNavBackWithLink
                rightLogo={<></>}
                middleText={"Edit Profile"}
            />

            <div className={`${styles.heading1}`}>
                Edit Profile
            </div>

            <div className={`${styles.editContainer} flex`}>
                <div className={`${styles.pfpContainer}`}>
                    <div className={`${styles.pfpImage}`}></div>
                </div>
                <div className={`${styles.doubleStepContainer} flex flex-col`}>
                    <div className={`${styles.usernameText}`}>sampleusername</div>
                    <div className={`${styles.blueButtonText}`}>Change profile photo</div>
                </div>
            </div>

            <form className={`${styles.form}`}>
                <div className={`${styles.label}`}>
                    Website
                </div>

                <div className={`${styles.inputPlaceholder}`}>
                    <input 
                        className={`${styles.disabledInput}`}
                        disabled
                        placeholder='Website'
                    />

                    <div className={`${styles.content}`}>
                        Editing your links is only available on mobile. Visit the Instagram app and edit your profile to change the websites in your bio.
                    </div>
                </div>

                <div className={`${styles.label}`}>
                    Bio
                </div>

                <div className={`${styles.inputPlaceholder}`}>
                    <textarea
                        className={`${styles.textarea}`}
                    />
                </div>

                <div className={`${styles.label}`}>
                    Gender
                </div>

                <div className={`${styles.inputPlaceholder}`}>
                    <div className={`${styles.buttonDiv}`}>Prefer not to say</div>
                </div>

                <div style={{margin: "0 20px"}}>
                    <div className={`${styles.content}`}>
                        This won't be part of your public profile.
                    </div>
                </div>

                <div className={`${styles.label}`}>
                    Show account suggestions on profiles
                </div>

                <div style={{margin: "16px 20px 0", width: "80px"}}>
                    <BlueButton placeholderText={"Submit"} disabled={true}/>
                </div>
            </form>
        </>
    )
}