import Navbar from '../../Navbar/Navbar';
import { settingsSvg } from '../../assets/Icons';

import styles from './Profile.module.scss';

export default function Profile() {
    const username = 'sampleuesername';

    return (
        <div className='flex'>
            <Navbar />
            
            <div className={`${styles.container}`}>
                <div className={`${styles.topContainer} flex flex-col`}>
                    <div className={`${styles.header} flex`}>
                        <div className={`${styles.headerLeft} flex`}>
                            <div className={`${styles.picturePlaceholder}`}>

                            </div>
                        </div>

                        <div className={`${styles.headerRight} flex flex-col`}>
                            <div className={`${styles.row1} flex`}>
                                <div className={`${styles.username}`}>{username}</div>
                                <button>
                                    <div className={`${styles.greyButton} flex`}>
                                        Edit Profile
                                    </div>
                                </button>
                                <div className={`${styles.settingsButton}`}>{settingsSvg()}</div>
                            </div>

                            <div className={`${styles.row2} flex`}>
                                <div className={`${styles.userStat}`}>
                                    <span>0</span> posts
                                </div>
                                <div className={`${styles.userStat}`}>
                                    <span>111</span> followers
                                </div>
                                <div className={`${styles.userStat}`}>
                                    <span>144</span> following
                                </div>
                            </div>

                            <div className={`${styles.row3}`}>
                                <p><span>Shyam Venkatesh</span></p>
                                <p>Here is an about</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.bottomContainer}`}>
                    footer text
                </div>
            </div>
        </div>
    );
}