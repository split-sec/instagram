import TopNavBackWithLink from '../../TopNavWithBackLink/TopNavWithBackLink';
import { photoVideoSvg, interactionSvg, calendarSvg, downloadSvg, announcementSvg } from '../../assets/Icons';
import styles from './YourActivity.module.scss';

export default function YourActivity() {
    return (
        <>
            <TopNavBackWithLink rightLogo={<></>}
                middleText={"Your activity"}
                options={false}
            />

            <div className={`${styles.topContainer} flex flex-col`}>
                <p className={`${styles.heading1}`}>One place to manage your activity</p>
                <p className={`${styles.subText}`}>We've added more tools for you to review and manage photos, videos, account and activty on Instagram</p>
            </div>

            <div className={`${styles.buttonContainer} flex`}>
                <div className={`${styles.iconPlaceholder}`}>
                    {photoVideoSvg()}
                </div>
                <div className={`${styles.contentContainer} flex flex-col`}>
                    <div className={`${styles.heading2}`}>
                        Photos and Videos
                    </div>
                    <div className={`${styles.subText}`}>
                        View, archive or delete photos and videos you've shared.
                    </div>
                </div>
                <div className={`${styles.arrowContainer}`}>
                    <div
                        className={`${styles.greaterArrow}`}
                    ></div>
                </div>
            </div>

            <div className={`${styles.buttonContainer} flex`}>
                <div className={`${styles.iconPlaceholder}`}>
                    {interactionSvg()}
                </div>
                <div className={`${styles.contentContainer} flex flex-col`}>
                    <div className={`${styles.heading2}`}>
                        Interactions
                    </div>
                    <div className={`${styles.subText}`}>
                        Review and delete likes, comments and your other interactions.
                    </div>
                </div>
                <div className={`${styles.arrowContainer}`}>
                    <div
                        className={`${styles.greaterArrow}`}
                    ></div>
                </div>
            </div>

            <div className={`${styles.buttonContainer} flex`}>
                <div className={`${styles.iconPlaceholder}`}>
                    {calendarSvg()}
                </div>
                <div className={`${styles.contentContainer} flex flex-col`}>
                    <div className={`${styles.heading2}`}>
                        Account History
                    </div>
                    <div className={`${styles.subText}`}>
                        Review changes thay you have made to your account since you created it.
                    </div>
                </div>
                <div className={`${styles.arrowContainer}`}>
                    <div
                        className={`${styles.greaterArrow}`}
                    ></div>
                </div>
            </div>

            <div className={`${styles.buttonContainer} flex`}>
                <div className={`${styles.iconPlaceholder}`}>
                    {downloadSvg()}
                </div>
                <div className={`${styles.contentContainer} flex flex-col`}>
                    <div className={`${styles.heading2}`}>
                        Download Your Information
                    </div>
                    <div className={`${styles.subText}`}>
                        Download a copy of the information you've shared with Instagram.
                    </div>
                </div>
                <div className={`${styles.arrowContainer}`}>
                    <div
                        className={`${styles.greaterArrow}`}
                    ></div>
                </div>
            </div>

            <div className={`${styles.buttonContainer} flex`}>
                <div className={`${styles.iconPlaceholder}`}>
                    {announcementSvg()}
                </div>
                <div className={`${styles.contentContainer} flex flex-col`}>
                    <div className={`${styles.heading2}`}>
                        Ad activity
                    </div>
                    <div className={`${styles.subText}`}>
                        See which ads you've interacted with recently.
                    </div>
                </div>
                <div className={`${styles.arrowContainer}`}>
                    <div
                        className={`${styles.greaterArrow}`}
                    ></div>
                </div>
            </div>
        </>
    )
}