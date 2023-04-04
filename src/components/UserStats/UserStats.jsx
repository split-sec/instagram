import styles from './UserStats.module.scss';

export default function UserStats() {
    return (
        <div className={`${styles.userStatsContainer} flex`}>
            <div className={`${styles.userStatBox} flex flex-col`}>
                <p className={`${styles.statNumber}`}>4</p>
                <p className={`${styles.statDetail}`}>posts</p>
            </div>

            <div className={`${styles.userStatBox} flex flex-col`}>
                <p className={`${styles.statNumber}`}>100</p>
                <p className={`${styles.statDetail}`}>followers</p>
            </div>

            <div className={`${styles.userStatBox} flex flex-col`}>
                <p className={`${styles.statNumber}`}>144</p>
                <p className={`${styles.statDetail}`}>following</p>
            </div>
        </div>
    );
}