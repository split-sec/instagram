import { Link } from "react-router-dom";
import {
  closeSvg,
  metaSvg,
  userSvg,
  passwordSecuritySvg,
  adPreferencesSvg,
} from "../assets/Icons";

import styles from "./MobileSettings.module.scss";

export default function MobileSettings({
  setSettings,
}) {
  return (
    <div
      style={{
        backgroundColor: "rgb(250, 250, 250)",
      }}
    >
      <div className={`${styles.topNav} flex`}>
        <div
          className={`${styles.backIcon}`}
          onClick={setSettings(false)}
        >
          {closeSvg()}
        </div>
        <div
          className={`${styles.namePlaceholder} flex`}
        >
          <div>{`Settings and privacy`}</div>
        </div>
      </div>

      <div className={`${styles.container1}`}>
        <div className={`${styles.box1}`}>
          <div className={styles.metaContainer}>
            {metaSvg()}
          </div>
          <div>
            <p
              className={`${styles.accountCentre}`}
            >
              Accounts Centre
            </p>
          </div>
          <div>
            <p className={`${styles.subtext}`}>
              Manage your connected experiences
              and account settings across Meta
              technologies.
            </p>
          </div>
          <div
            className={`${styles.buttonContainer1} flex`}
          >
            <div>{userSvg()}</div>
            <div
              className={`${styles.subtext} ${styles.buttonText}`}
            >
              Personal details
            </div>
          </div>
          <div
            className={`${styles.buttonContainer1} flex`}
          >
            <div>{passwordSecuritySvg()}</div>
            <div
              className={`${styles.subtext} ${styles.buttonText}`}
            >
              Password and security
            </div>
          </div>
          <div
            className={`${styles.buttonContainer1} flex`}
          >
            <div>{adPreferencesSvg()}</div>
            <div
              className={`${styles.subtext} ${styles.buttonText}`}
            >
              Ad preferences
            </div>
          </div>
          <div
            className={`${styles.blueButtonText}`}
          >
            See more in Accounts Centre
          </div>
        </div>
      </div>

      <div
        className={`${styles.containerSeparator}`}
      >
        ACCOUNT
      </div>

      <div className={`flex flex-col`}>
        <div
          className={`${styles.buttonIndividualContainer} flex`}
        >
          <div
            className={`${styles.buttonInnerText}`}
          >
            Edit Profile
          </div>
          <div
            className={`${styles.greaterArrow}`}
          ></div>
        </div>

        <Link to='/youractivity'>
            <div
              className={`${styles.buttonIndividualContainer} flex`}
            >
              <div
                className={`${styles.buttonInnerText}`}
              >
                Your Activity
              </div>
              <div
                className={`${styles.greaterArrow}`}
              ></div>
            </div>
        </Link>

        <div
          className={`${styles.buttonIndividualContainer} flex`}
        >
          <div
            className={`${styles.buttonInnerText}`}
          >
            What you see
          </div>
          <div
            className={`${styles.greaterArrow}`}
          ></div>
        </div>

        <div
          className={`${styles.buttonIndividualContainer} flex`}
        >
          <div
            className={`${styles.buttonInnerText}`}
          >
            Who can see your content
          </div>
          <div
            className={`${styles.greaterArrow}`}
          ></div>
        </div>

        <div
          className={`${styles.buttonIndividualContainer} flex`}
        >
          <div
            className={`${styles.buttonInnerText}`}
          >
            How others can interact with you
          </div>
          <div
            className={`${styles.greaterArrow}`}
          ></div>
        </div>

        <div
          className={`${styles.buttonIndividualContainer} flex`}
        >
          <div
            className={`${styles.buttonInnerText} ${styles.specialButtonInnerText}`}
          >
            Language
          </div>
        </div>

        <div
          className={`${styles.buttonIndividualContainer} flex`}
        >
          <div
            className={`${styles.buttonInnerText}`}
          >
            QR code
          </div>
          <div
            className={`${styles.greaterArrow}`}
          ></div>
        </div>

        <div
          className={`${styles.buttonIndividualContainer} flex`}
        >
          <div
            className={`${styles.buttonInnerText}`}
          >
            Switch appearance
          </div>
        </div>

        <div
          className={`${styles.buttonIndividualContainer} flex`}
        >
          <div
            className={`${styles.buttonInnerText}`}
          >
            Apps and websites
          </div>
          <div
            className={`${styles.greaterArrow}`}
          ></div>
        </div>

        <div
          className={`${styles.buttonIndividualContainer} flex`}
        >
          <div
            className={`${styles.buttonInnerText}`}
          >
            Supervision
          </div>
          <div
            className={`${styles.greaterArrow}`}
          ></div>
        </div>

        <div
          className={`${styles.buttonIndividualContainer} flex`}
        >
          <div
            className={`${styles.buttonInnerText} ${styles.smallButtonInnerText}`}
          >
            Switch to Professional Account
          </div>
        </div>
      </div>

      <div
        className={`${styles.containerSeparator}`}
      >
        ABOUT
      </div>

      <div className={`flex flex-col`}>
        <div
          className={`${styles.buttonIndividualContainer} flex`}
        >
          <div
            className={`${styles.buttonInnerText}`}
          >
            Help
          </div>
          <div
            className={`${styles.greaterArrow}`}
          ></div>
        </div>

        <div
          className={`${styles.buttonIndividualContainer} flex`}
        >
          <div
            className={`${styles.buttonInnerText}`}
          >
            Report a problem
          </div>
          <div
            className={`${styles.greaterArrow}`}
          ></div>
        </div>

        <div
          className={`${styles.buttonIndividualContainer} flex`}
        >
          <div
            className={`${styles.buttonInnerText}`}
          >
            More
          </div>
          <div
            className={`${styles.greaterArrow}`}
          ></div>
        </div>

        <div
          className={`${styles.buttonIndividualContainer} ${styles.lastButton} flex`}
        >
          <div
            className={`${styles.buttonInnerText} ${styles.logoutText}`}
          >
            Log out
          </div>
          <div
            className={`${styles.greaterArrow}`}
          ></div>
        </div>
      </div>
    </div>
  );
}
