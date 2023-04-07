import styles from './FollowTextButton.module.scss';

export default function FollowTextButton({ followed, setFollowed }) {
    return (
        <>
            {followed ?
                <div className={`${styles.container} flex`}>
                    <div className={styles.separator}>•</div>
                    <button className={`${styles.button}`}>
                        Follow
                    </button>
                </div>
                :
                <></>
            }
        </>
    );
}