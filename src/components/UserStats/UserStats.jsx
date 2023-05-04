import { useEffect } from 'react';
import styles from './UserStats.module.scss';

export default function UserStats({result}) {
    useEffect(() => {
        console.log("Inside stats:", result);
    }, [result]);

    return (
        <div className={`${styles.userStatsContainer} flex`}>
            <div className={`${styles.userStatBox} flex flex-col`}>
                <p className={`${styles.statNumber}`}>{result ? result[0].postcount : ""}</p>
                <p className={`${styles.statDetail}`}>posts</p>
            </div>

            <div className={`${styles.userStatBox} flex flex-col`}>
                <p className={`${styles.statNumber}`}>{result ? result[0].followerscount : ""}</p>
                <p className={`${styles.statDetail}`}>followers</p>
            </div>

            <div className={`${styles.userStatBox} flex flex-col`}>
                <p className={`${styles.statNumber}`}>{result ? result[0].followingcount : ""}</p>
                <p className={`${styles.statDetail}`}>following</p>
            </div>
        </div>
    );
}