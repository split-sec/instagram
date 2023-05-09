import TopNavBackWithLink from '../../TopNavWithBackLink/TopNavWithBackLink';
import styles from './WhatYouSee.module.scss';

export default function WhatYouSee() {
    return (
        <>
            <TopNavBackWithLink
                rightLogo={<></>}
                middleText={"What you see"}
            />

            <div className={`${styles.container}`}>
                <div className={`${styles.heading1}`}>What you see</div>

                <div className={`${styles.heading2}`}>Likes and views</div>
            </div>
        </>
    )
}