import { useState, useEffect } from "react";

import UserContentMobile from "../UserContentMobile/UserContentMobile";
import MobileSettings from "../MobileSettings/MobileSettings";
import Navbar from "../LeftNavbar/LeftNavbar";
import {
  settingsSvg,
  addFriendsSvg,
  downChevronSvg,
} from "../assets/Icons";

import styles from "./Profile.module.scss";

export default function Profile() {
  const [settingsState, setSettings] =
    useState(true);
  const [result, setResult] = useState([]);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjE2LCJpYXQiOjE2ODMxODY1ODgsImV4cCI6MTY4NjY0MjU4OH0.DH7WAqiwj-dSsJ7reVnZeZCVP8ZsbXXgGCQYjYDfZtM";

  useEffect(() => {
    getProfileInfo();
  }, []);

  useEffect(() => {
    setSettings(true);
  }, [result]);

  function getProfileInfo() {
    try {
      const url = new URL(
        `${process.env.REACT_APP_DOMAIN}/profileInfo`
      );

      let requestOptions = {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      };

      fetch(url, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data?.message) {
            setResult(data);
          }
        })
        .catch((error) =>
          console.log("Error shot ->", error)
        );
    } catch (err) {
      console.log("error-->", err);
    }
  }

  function handleSettingsState() {
    setSettings(true);
  }

  const ProfilePage = () => {
    return (
      <>
        <div className={`${styles.topNav} flex`}>
          <div
            className={`${styles.backIcon}`}
            onClick={handleSettingsState}
          >
            {settingsSvg()}
          </div>
          <div
            className={`${styles.namePlaceholder} flex`}
          >
            <div>{`sampleusername`}</div>
            <div
              className={`${styles.downChevronIcon}`}
            >
              {downChevronSvg()}
            </div>
          </div>
          <div
            className={`${styles.newMessageIcon}`}
          >
            <button
              className={`${styles.addFriend}`}
            >
              {addFriendsSvg()}
            </button>
          </div>
        </div>
        <UserContentMobile
          result={result.message}
        />
        <Navbar />
      </>
    );
  };

  return (
    <>
      {/* { settingsState === true ? <MobileSettings setSettings={setSettings}/> : ProfilePage() } */}
      <MobileSettings setSettings={setSettings} />
    </>
  );
}
