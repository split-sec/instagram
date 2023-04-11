import { metaSvg } from '../../../assets/Icons';
import SettingsNavlink from '../SettingsNavlink/SettingsNavlink';

import styles from './SettingsNavbar.module.scss';

export default function SettingsNavbar() {
    return (
        <div className={`${styles.parentContainer} flex flex-col`}>
            <div className={`${styles.settingsInfo} flex flex-col`}>
                <div>{metaSvg()}</div>
                <div className={`${styles.row1}`}>
                    Some account settings are moving
                </div>
                <div className={`${styles.row2}`}>
                    Soon, Accounts Centre will be the primary place to manage your account info and settings.
                </div>
                <div className={`${styles.row3}`}>
                    Learn more
                </div>
            </div>

            <SettingsNavlink />

            <div className={`${styles.settingsInfoFooter} flex flex-col`}>
                <div>{metaSvg()}</div>
                <div className={`${styles.fRow1}`}>Accounts Centre</div>
                <div className={`${styles.fRow2}`}>
                    Control settings for connected experiences across Instagram, the Facebook app and Messenger, including story and post sharing, and logging in.
                </div>
            </div>
        </div>
    )
}