import { Link } from 'react-router-dom';

import { downChevronSvg, newMessageSvg, lesserSvg } from '../assets/Icons';

import styles from './TopNavWithBackLink.module.scss';

export default function TopNavBackWithLink({ leftLogo, rightLogo }) {
    return (
        <>
            <div className={`${styles.topNav} flex`}>
                <Link to='/'>
                    <div className={`${styles.backIcon}`}>
                        { leftLogo === undefined ? lesserSvg() : leftLogo }
                    </div>
                </Link>

                <div className={`${styles.namePlaceholder} flex`}>
                    <div>{`sampleusername`}</div>
                    <div className={`${styles.downChevronIcon}`}>
                        { downChevronSvg() }
                    </div>
                </div>
                <div className={`${styles.newMessageIcon}`}>
                    { rightLogo === undefined ? newMessageSvg() : rightLogo }
                </div>
            </div>
        </>
    );
}