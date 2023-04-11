import styles from './PostTopContainer.module.scss';
import { tripleDotSvg } from '../../assets/Icons';

export default function PostTopContainer() {
    return (
        <div className={`${styles.topContainer} flex`}>
            <div className={`${styles.detailsContainer} flex`}>
                <div className={`${styles.profilePicture}`}></div>
                <div className={`${styles.profileContainer} flex flex-col`}>
                    <div className={`${styles.row1} flex`}>
                        <div className={`${styles.usernameHead}`}>
                            virat.kohli
                        </div>
                        <div className={`${styles.verified}`}></div>
                        <div className={`${styles.dividerDot}`}>
                            •
                        </div>
                        <div>
                            2 d
                        </div>
                        <div className={`${styles.dividerDot}`}>
                            •
                        </div>
                        <div className={`${styles.followText}`}>
                            Follow
                        </div>
                    </div>
                    <div className={`${styles.location}`}>
                        Delhi, India
                    </div>
                </div>
            </div>

            <div className={`${styles.optionsContainer} flex`}>
                <button>
                    {tripleDotSvg()}
                </button>
            </div>
        </div>
    );
}