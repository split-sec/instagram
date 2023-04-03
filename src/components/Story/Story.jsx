import styles from './Story.module.scss';
// import TickIcon from '../assets/illo-confirm-refresh-light.png';

export default function Story() {
    return (
        <>
            <button>
                <div className={`${styles.fullContainer}`}>
                    <div className={`${styles.imgContainer}`}>
                        <div className={`${styles.image}`}>

                        </div>
                    </div>
                    <p className={`${styles.username}`}>sampleusername</p>
                </div>
            </button>
        </>
    );
}