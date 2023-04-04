import { Link } from 'react-router-dom';

import styles from './UserProfile.module.scss';

export default function UserProfile() {
    return (
        <>
            <div className={`${styles.container} flex`}>
                <div className={`${styles.profilePictureContainer} flex flex-col`}>
                    <div className={`${styles.profilePicture}`}></div>
                </div>
                <div className={`${styles.sideTextContainer} flex flex-col`}>
                    <div className={`${styles.userNamePlaceholder}`}>
                        sampleusername
                    </div>
                    <Link to='/'>
                        <div className={`${styles.greyButton} flex`}>
                            <div>Edit Profile</div>
                        </div>
                    </Link>
                    <Link to='/'>
                        <div className={`${styles.greyButton} ${styles.greyButtonLast} flex`}>
                            <div>Ad tools</div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className={`${styles.userDetailsContainer}`}>
                    <h1 className={`${styles.userFullname}`}>Sample Fullname</h1>
                    <p className={`${styles.userAbout}`}>Here is a sample about provided by the user to tell about themselves</p>
            </div>
        </>
    );
}