import { Link } from 'react-router-dom';
import { useState } from 'react';

import UserContentMobile from '../UserContentMobile/UserContentMobile';
import Navbar from '../LeftNavbar/LeftNavbar';
import { settingsSvg, addFriendsSvg, downChevronSvg } from '../assets/Icons'

import styles from './Profile.module.scss';

export default function Profile() {
    const [settingsState, setSettings] = useState("hidden");

    function handleSettingsState() {
        console.log("Clicked settings button");
        console.log(settingsState);
        setSettings("visible");
    }

    const ProfilePage = () => { return (
        <>
            <div className={`${styles.topNav} flex`}>
                <div className={`${styles.backIcon}`} onClick={handleSettingsState}>
                    { settingsSvg() }
                </div>
                <div className={`${styles.namePlaceholder} flex`}>
                    <div>{`sampleusername`}</div>
                    <div className={`${styles.downChevronIcon}`}>
                        { downChevronSvg() }
                    </div>
                </div>
                <div className={`${styles.newMessageIcon}`}>
                    <button className={`${styles.addFriend}`}>{ addFriendsSvg() }</button>
                </div>
            </div>
            <UserContentMobile />
            <Navbar />
        </>
    )};

    const SettingsPage = () => { return (
        <div className={`${styles.fullPage} ${settingsState}`}>
            <h1>Here</h1>
        </div>
    )};

    return (
        <>
            {/* { () => settingsState === true ? <SettingsPage /> : <ProfilePage /> } */}
            { <ProfilePage /> }
        </>
    );
}