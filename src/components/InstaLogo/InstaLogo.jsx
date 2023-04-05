import styles from './InstaLogo.module.scss';

export default function InstaLogo() {
    return (
        <div className={`${styles.logoContainer}`}>
            <div className={`${styles.logo}`}></div>
        </div>
    )
}