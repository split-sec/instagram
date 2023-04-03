import { Link, NavLink } from 'react-router-dom';

import styles from './UserContentMobile.module.scss';

export default function UserContentMobile() {
    const postsSvg = (
        <svg aria-label="Posts" class="_ab6-" color="rgb(0, 149, 246)" fill="rgb(0, 149, 246)" height="24" role="img" viewBox="0 0 24 24" width="24">
            <rect fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="18" x="3" y="3"></rect><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="9.015" x2="9.015" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="14.985" x2="14.985" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="9.015" y2="9.015"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="14.985" y2="14.985"></line>
        </svg>
    );

    const feedSvg = (
        <svg aria-label="Feed" class="_ab6-" color="rgb(142, 142, 142)" fill="rgb(142, 142, 142)" height="24" role="img" viewBox="0 0 24 24" width="24">
            <rect fill="none" height="10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="12" x="6" y="7"></rect><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" x1="6.002" x2="18" y1="3.004" y2="3.004"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" x1="6.002" x2="18" y1="21" y2="21"></line>
        </svg>
    );

    const savedSvg = (
        <svg aria-label="Saved" class="_ab6-" color="rgb(142, 142, 142)" fill="rgb(142, 142, 142)" height="24" role="img" viewBox="0 0 24 24" width="24">
            <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon>
        </svg>
    );

    const taggedSvg = (
        <svg aria-label="Tagged" class="_ab6-" color="rgb(142, 142, 142)" fill="rgb(142, 142, 142)" height="24" role="img" viewBox="0 0 24 24" width="24">
            <path d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><circle cx="12.072" cy="11.075" fill="none" r="3.556" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle>
        </svg>
    )

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

            <div className={`${styles.userStatsContainer} flex`}>
                <div className={`${styles.userStatBox} flex flex-col`}>
                    <p className={`${styles.statNumber}`}>4</p>
                    <p className={`${styles.statDetail}`}>posts</p>
                </div>

                <div className={`${styles.userStatBox} flex flex-col`}>
                    <p className={`${styles.statNumber}`}>100</p>
                    <p className={`${styles.statDetail}`}>followers</p>
                </div>

                <div className={`${styles.userStatBox} flex flex-col`}>
                    <p className={`${styles.statNumber}`}>144</p>
                    <p className={`${styles.statDetail}`}>following</p>
                </div>
            </div>

            <div className={`${styles.linkNav} flex`}>
                <NavLink to='/'>
                    { (isActive) => isActive ? <div className={`${styles.icon} ${styles.iconActive} flex`}>{postsSvg}</div> : <div className={`${styles.icon} flex`}>{postsSvg}</div>}
                </NavLink>

                <NavLink to='/'>
                    { (isActive) => isActive ? <div className={`${styles.icon} ${styles.iconActive} flex`}>{feedSvg}</div> : <div className={`${styles.icon} flex`}>{feedSvg}</div>}
                </NavLink>

                <NavLink to='/'>
                    { (isActive) => isActive ? <div className={`${styles.icon} ${styles.iconActive} flex`}>{savedSvg}</div> : <div className={`${styles.icon} flex`}>{savedSvg}</div>}
                </NavLink>

                <NavLink to='/'>
                    { (isActive) => isActive ? <div className={`${styles.icon} ${styles.iconActive} flex`}>{taggedSvg}</div> : <div className={`${styles.icon} flex`}>{taggedSvg}</div>}
                </NavLink>
            </div>
        </>
    );
}