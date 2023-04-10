import { NavLink } from 'react-router-dom';

import { homeSvgActive, homeSvgInactive, searchSvgActive, searchSvgInactive,
        reelsSvgActive, reelsSvgInactive,
        inboxSvgInactive
} from '../assets/Icons';

import styles from './LeftNavbar.module.scss';

export default function LeftNavbar() {
    

    return (
        <div className={`${styles.left_nav}`}>
            <NavLink to='/'>
                {( { isActive } ) => isActive ? homeSvgActive() : homeSvgInactive()}
            </NavLink>

            <NavLink to='/explore'>
                {( { isActive } ) => isActive ? searchSvgActive() : searchSvgInactive()}
            </NavLink>

            <NavLink to='/reels'>
                {( { isActive } ) => isActive ? reelsSvgActive() : reelsSvgInactive()}
            </NavLink>

            <NavLink to='/direct/inbox'>
                {inboxSvgInactive()}
            </NavLink>

            <NavLink to={`sampleName`}>
                { ({ isActive }) => isActive ? <div className={`${styles.profile_button} ${styles.borderActive}`}></div> : <div className={`${styles.profile_button}`}></div>}
            </NavLink>
        </div>
    )
}