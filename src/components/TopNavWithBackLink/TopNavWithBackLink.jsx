import { Link } from 'react-router-dom';

import styles from './TopNavWithBackLink.module.scss';

export default function TopNavBackWithLink({ leftLogo, rightLogo }) {

    const lesserSvg = (
        <svg aria-label="Back" className="x1lliihq x1n2onr6" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)" height="24" role="img" viewBox="0 0 24 24" width="24">
            <title>Back</title><path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
        </svg>
    );

    const newMessageSvg = (
        <svg aria-label="New message" className="x1lliihq x1n2onr6" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)" height="24" role="img" viewBox="0 0 24 24" width="24">
        <title>New message</title><path d="M12.202 3.203H5.25a3 3 0 0 0-3 3V18.75a3 3 0 0 0 3 3h12.547a3 3 0 0 0 3-3v-6.952" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M10.002 17.226H6.774v-3.228L18.607 2.165a1.417 1.417 0 0 1 2.004 0l1.224 1.225a1.417 1.417 0 0 1 0 2.004Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="16.848" x2="20.076" y1="3.924" y2="7.153"></line>
        </svg>
    )

    const downChevronSvg = (
        <svg aria-label="Down Chevron Icon" className="x1lliihq x1n2onr6" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)" height="16" role="img" viewBox="0 0 24 24" width="16">
            <title>Down Chevron Icon</title><path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
        </svg>
    );

    return (
        <>
            <div className={`${styles.topNav} flex`}>
                <Link to='/'>
                    <div className={`${styles.backIcon}`}>
                        { leftLogo === undefined ? lesserSvg : leftLogo }
                    </div>
                </Link>

                <div className={`${styles.namePlaceholder} flex`}>
                    <div>{`sampleusername`}</div>
                    <div className={`${styles.downChevronIcon}`}>
                        { downChevronSvg }
                    </div>
                </div>
                <div className={`${styles.newMessageIcon}`}>
                    { rightLogo === undefined ? newMessageSvg : rightLogo }
                </div>
            </div>
        </>
    );
}