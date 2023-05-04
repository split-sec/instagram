import { NavLink, Outlet } from 'react-router-dom';

import { postsActiveSvg, postsSvg, feedActiveSvg, feedSvg, savedActiveSvg, savedSvg, taggedActiveSvg, taggedSvg } from '../assets/Icons';
import UserProfile from '../UserProfile/UserProfile';
import UserStats from '../UserStats/UserStats';

import styles from './UserContentMobile.module.scss';

export default function UserContentMobile({result}) {
    return (
        <>
            <UserProfile result={result}/>

            <UserStats result={result}/>

            <div className={`${styles.linkNav} flex`}>
                <NavLink to='/sampleName'
                end
                className={`${styles.icon} flex`}>
                    { ({isActive}) => isActive ? <div>{postsActiveSvg()}</div> : <div>{postsSvg()}</div>}
                </NavLink>

                <NavLink to='/sampleName/feed'
                end
                className={`${styles.icon} flex`}>
                    { ({isActive}) => isActive ? <div>{feedActiveSvg()}</div> : <div>{feedSvg()}</div>}
                </NavLink>

                <NavLink to='/sampleName/saved'
                end
                className={`${styles.icon} flex`}>
                    { ({isActive}) => isActive ? <div>{savedActiveSvg()}</div> : <div>{savedSvg()}</div>}
                </NavLink>

                <NavLink to='/sampleName/tagged'
                end
                className={`${styles.icon} flex`}>
                    { ({isActive}) => isActive ? <div>{taggedActiveSvg()}</div> : <div>{taggedSvg()}</div>}
                </NavLink>
            </div>
            
            <Outlet />
        </>
    );
}
