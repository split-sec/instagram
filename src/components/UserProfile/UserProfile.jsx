import { Link } from 'react-router-dom';

import styles from './UserProfile.module.scss';

export default function UserProfile({result}) {
    const background = result ? `url("${result[0].photourl}")` : "grey";
    const pfpStyle = {
        backgroundImage: background,
        backgroundRepeat: "no-repeat",
        height: "77px",
        width: "77px",
        borderRadius: "50%",
        backgroundSize: "cover",
    }

    return (
        <>
            <div className={`${styles.container} flex`}>
                <div className={`${styles.profilePictureContainer} flex flex-col`}>
                    <div style={pfpStyle}></div>
                </div>
                <div className={`${styles.sideTextContainer} flex flex-col`}>
                    <div className={`${styles.userNamePlaceholder}`}>
                        {result ? result[0].username : ""}
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
                    <h1 className={`${styles.userFullname}`}>{result ? result[0].fullname : ""}</h1>
                    <p className={`${styles.userAbout}`}>{result ? result[0].bio : ""}</p>
            </div>
        </>
    );
}