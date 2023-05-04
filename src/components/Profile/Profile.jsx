import { useState, useEffect } from 'react';

import UserContentMobile from '../UserContentMobile/UserContentMobile';
import Navbar from '../LeftNavbar/LeftNavbar';
import { settingsSvg, addFriendsSvg, downChevronSvg } from '../assets/Icons'

import styles from './Profile.module.scss';

export default function Profile() {
    const [settingsState, setSettings] = useState(false);
    const [result, setResult] = useState([]);
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjE2LCJpYXQiOjE2ODMxODY1ODgsImV4cCI6MTY4NjY0MjU4OH0.DH7WAqiwj-dSsJ7reVnZeZCVP8ZsbXXgGCQYjYDfZtM";

    useEffect(() => {
        getProfileInfo();
    }, []);

    useEffect(() => {
        console.log(result.message);
    }, [result]);

    function getProfileInfo() {
        try {        
            const url = new URL(`${process.env.REACT_APP_DOMAIN}/profileInfo`);

            let requestOptions = {
                method: "GET",
                headers: { 'Authorization': `Bearer ${token}`},
            };
        
            fetch(url, requestOptions)
                .then((response) => response.json())
                .then((data) => {
                    if(data?.message) {
                        setResult(data);
                    }
                })
                .catch((error) => console.log("Error shot ->", error));
        } catch(err) {
            console.log('error-->', err);
        }
    }

    function handleSettingsState() {
        console.log("Clicked settings button");
        console.log(settingsState);
        setSettings(true);
    }

    const ProfilePage = () => { 
        return (
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
                <UserContentMobile result={result.message}/>
                <Navbar />
            </>
        )
    };

    const SettingsPage = () => { return (
        <>
            <div className={`${styles.fullPage}`}>
                <h1>Here</h1>
            </div>
        </>
    )};

    return (
        <>
            { settingsState === true ? SettingsPage() : ProfilePage() }
        </>
    );
}