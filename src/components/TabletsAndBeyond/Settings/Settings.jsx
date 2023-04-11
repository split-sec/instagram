import { Outlet, useParams } from 'react-router-dom';

import Navbar from '../../Navbar/Navbar';
import SettingsNavbar from './SettingsNavbar/SettingsNavbar';

import styles from './Settings.module.scss';

export default function Settings() {
    const {id}=useParams();
    console.log(id);

    return (
        <div className={`flex`}>
            <Navbar />
            <div className={`${styles.parentContainer} flex`}>
                <div className={`${styles.container} flex`}>
                    <div className={`${styles.leftContainer}`}>
                        <SettingsNavbar />
                    </div>
                    <div className={`${styles.rightContainer}`}>
                        {/* <Outlet /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}