import { NavLink, Link } from "react-router-dom";

import styles from './SettingsNavlink.module.scss';

export default function SettingsNavlink() {
    return (
        <div className={`${styles.container} flex flex-col`}>
            <NavLink to='accounts/edit' end>
                <div className={`${styles.link} flex`}>
                    {({isActive}) => !isActive ?
                    <div className={`${styles.linkText} flex`}>
                        Edit Profile
                    </div>

                    :

                    <div className={`${styles.linkText} ${styles.linkActive} flex`}>
                        Edit Profile
                    </div>
                    }
                </div>
            </NavLink>

            <NavLink to='accounts/password/change' end>
                <div className={`${styles.link} flex`}>
                    {({isActive}) => !isActive ?
                        <div className={`${styles.linkText}`}>
                            Change password
                        </div>

                        :

                        <div className={`${styles.linkText} ${styles.linkActive}`}>
                            Change password
                        </div>
                    }
                </div>
            </NavLink>

            <NavLink to='accounts/manage_access' end>
                <div className={`${styles.link} flex`}>
                    {({isActive}) => !isActive ?
                        <div className={`${styles.linkText}`}>
                            Apps and websites
                        </div>

                        :

                        <div className={`${styles.linkText} ${styles.linkActive}`}>
                            Apps and websites
                        </div>
                    }
                </div>
            </NavLink>

            <NavLink to='emails/settings' end>
                <div className={`${styles.link} flex`}>
                    {({isActive}) => !isActive ?
                        <div className={`${styles.linkText}`}>
                            Email notifications
                        </div>

                        :

                        <div className={`${styles.linkText} ${styles.linkActive}`}>
                            Email notifications
                        </div>
                    }
                </div>
            </NavLink>

            <NavLink to='push/web/settings' end>
                <div className={`${styles.link} flex`}>
                    {({isActive}) => !isActive ?
                        <div className={`${styles.linkText}`}>
                            Push notifications
                        </div>

                        :

                        <div className={`${styles.linkText} ${styles.linkActive}`}>
                            Push notifications
                        </div>
                    }
                </div>
            </NavLink>

            <NavLink to='accounts/contact_history' end>
                <div className={`${styles.link} flex`}>
                    {({isActive}) => !isActive ?
                        <div className={`${styles.linkText}`}>
                            Manage contacts
                        </div>

                        :

                        <div className={`${styles.linkText} ${styles.linkActive}`}>
                            Manage contacts
                        </div>
                    }
                </div>
            </NavLink>

            <NavLink to='accounts/privacy_and_security' end>
                <div className={`${styles.link} flex`}>
                    {({isActive}) => !isActive ?
                        <div className={`${styles.linkText}`}>
                            Privacy and security
                        </div>

                        :

                        <div className={`${styles.linkText} ${styles.linkActive}`}>
                            Privacy and security
                        </div>
                    }
                </div>
            </NavLink>

            <NavLink to='ads/settings' end>
                <div className={`${styles.link} flex`}>
                    {({isActive}) => !isActive ?
                        <div className={`${styles.linkText}`}>
                            Ads
                        </div>

                        :

                        <div className={`${styles.linkText} ${styles.linkActive}`}>
                            Ads
                        </div>
                    }
                </div>
            </NavLink>

            <NavLink to='' end>
                <div className={`${styles.link} flex`}>
                    {({isActive}) => !isActive ?
                        <div className={`${styles.linkText}`}>
                            Supervision
                        </div>

                        :

                        <div className={`${styles.linkText} ${styles.linkActive}`}>
                            Supervision
                        </div>
                    }
                </div>
            </NavLink>

            <NavLink to='session/login_activity' end>
                <div className={`${styles.link} flex`}>
                    {({isActive}) => !isActive ?
                        <div className={`${styles.linkText}`}>
                            Login activity
                        </div>

                        :

                        <div className={`${styles.linkText} ${styles.linkActive}`}>
                            Login activity
                        </div>
                    }
                </div>
            </NavLink>

            <NavLink to='accounts/edit' end>
                <div className={`${styles.link} flex`}>
                    {({isActive}) => !isActive ?
                        <div className={`${styles.linkText}`}>
                            Emails from Instagram
                        </div>

                        :

                        <div className={`${styles.linkText} ${styles.linkActive}`}>
                            Emails from Instagram
                        </div>
                    }
                </div>
            </NavLink>

            <NavLink to='settings/help' end>
                <div className={`${styles.link} flex`}>
                    {({isActive}) => !isActive ?
                        <div className={`${styles.linkText}`}>
                            Help
                        </div>

                        :

                        <div className={`${styles.linkText} ${styles.linkActive}`}>
                            Help
                        </div>
                    }
                </div>
            </NavLink>

            <Link to=''
                className={`${styles.professionalAccount}`}>
                Switch to professional account
            </Link>
        </div>
    )
}