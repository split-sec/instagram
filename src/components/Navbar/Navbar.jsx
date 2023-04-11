import { NavLink, Navigate } from 'react-router-dom';

import { instaNameSvg, homeSvgActive, homeSvgInactive, 
    searchSvgActive, searchSvgInactive,
    reelsSvgActive, reelsSvgInactive,
    inboxSvgInactive, 
    exploreSvgInactive, exploreSvgActive, likeUnfilledSvg,
    createInactiveSvg, createActiveSvg, moreInactiveSvg } from '../assets/Icons';


import styles from './Navbar.module.scss';

export default function Navbar() {
    return (
        <div className={`${styles.container} flex flex-col`}>
            <div className={`${styles.instaLogo} flex`}>
                {instaNameSvg()}
            </div>

            <div className={`${styles.navlinkContainer}`}>
                <div className={`${styles.nav}`}>
                    <NavLink
                        to="/">
                        {({isActive}) => !isActive ? 
                        <div className={`${styles.navlinkButton} flex`}>
                            <div className={`${styles.navlinkIcon}`}>
                                {homeSvgInactive()}
                            </div>
                            <div className={`${styles.navlinkText}`}>
                                Home
                            </div>
                        </div>
                        :
                        <div className={`${styles.navlinkButton} flex`}>
                            <div className={`${styles.navlinkIcon}`}>
                                {homeSvgActive()}
                            </div>
                            <div className={`${styles.navlinkText} ${styles.navlinkTextActive}`}>
                                Home
                            </div>
                        </div>
                        }
                    </NavLink>
                </div>

                <div className={`${styles.nav}`}>
                    <div className={`${styles.navlinkButton} flex`}>
                        <div className={`${styles.navlinkIcon}`}>
                            {searchSvgInactive()}
                        </div>
                        <div className={`${styles.navlinkText}`}>
                            Search
                        </div>
                    </div>
                </div>

                <div className={`${styles.nav}`}>
                    <NavLink to='explore'>
                        {({isActive}) => !isActive ?
                            <div className={`${styles.navlinkButton} flex`}>
                                <div className={`${styles.navlinkIcon}`}>
                                    {exploreSvgInactive()}
                                </div>
                                <div className={`${styles.navlinkText}`}>
                                    Explore
                                </div>
                            </div>
                            :
                            <div className={`${styles.navlinkButton} flex`}>
                                <div className={`${styles.navlinkIcon}`}>
                                    {exploreSvgActive()}
                                </div>
                                <div className={`${styles.navlinkText} ${styles.navlinkTextActive}`}>
                                    Explore
                                </div>
                            </div>
                        }
                    </NavLink>
                </div>

                <div className={`${styles.nav}`}>
                    <NavLink to='reels'>
                        {({isActive}) => !isActive ?
                            <div className={`${styles.navlinkButton} flex`}>
                                <div className={`${styles.navlinkIcon}`}>
                                    {reelsSvgInactive()}
                                </div>
                                <div className={`${styles.navlinkText}`}>
                                    Reels
                                </div>
                            </div>
                            :
                            <div className={`${styles.navlinkButton} flex`}>
                                <div className={`${styles.navlinkIcon}`}>
                                    {reelsSvgActive()}
                                </div>
                                <div className={`${styles.navlinkText} ${styles.navlinkTextActive}`}>
                                    Reels
                                </div>
                            </div>

                        }
                    </NavLink>
                </div>

                <div className={`${styles.nav}`}>
                    <NavLink to='direct/inbox'>
                        <div className={`${styles.navlinkButton} flex`}>
                            <div className={`${styles.navlinkIcon}`}>
                            {inboxSvgInactive()}
                            </div>
                            <div className={`${styles.navlinkText}`}>
                                Messages
                            </div>
                        </div>
                    </NavLink>
                </div>

                <div className={`${styles.nav}`}>
                    <div className={`${styles.navlinkButton} flex`}>
                        <div className={`${styles.navlinkIcon}`}>
                        {likeUnfilledSvg()}
                        </div>
                        <div className={`${styles.navlinkText}`}>
                            Notifications
                        </div>
                    </div>
                </div>

                <div className={`${styles.nav}`}>
                    <div className={`${styles.navlinkButton} flex`}>
                        <div className={`${styles.navlinkIcon}`}>
                        {createInactiveSvg()}
                        </div>
                        <div className={`${styles.navlinkText}`}>
                            Create
                        </div>
                    </div>
                </div>

                <div className={`${styles.nav}`}>
                    <NavLink to='sampleName'>
                        {({isActive}) => !isActive ? 
                            <div className={`${styles.navlinkButton} flex`}>
                                <div className={`${styles.navlinkProfile}`}></div>
                                <div className={`${styles.navlinkText}`}>
                                    Profile
                                </div>
                            </div>
                            :
                            <div className={`${styles.navlinkButton} flex`}>
                                <div className={`${styles.navlinkProfile} ${styles.navlinkProfileActive}`}></div>
                                <div className={`${styles.navlinkText} ${styles.navlinkTextActive}`}>
                                    Profile
                                </div>
                            </div>
                        }
                    </NavLink>
                </div>

            </div>

            <div className={`${styles.bottomContainer}`}>
                <div className={`${styles.nav}`}>
                    <div className={`${styles.navlinkButton} flex`}>
                        <div className={`${styles.navlinkIcon}`}>
                            {moreInactiveSvg()}
                        </div>
                        <div className={`${styles.navlinkText}`}>
                            More
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}