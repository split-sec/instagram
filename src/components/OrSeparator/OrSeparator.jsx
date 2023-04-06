import styles from './OrSeparator.module.scss';

export default function OrSeparator() {
    return (
        <div className={`${styles.ORContainer} flex`}>
            <div className={`${styles.emptyLine}`}></div>
            <div className={`${styles.OR}`}>OR</div>
            <div className={`${styles.emptyLine}`}></div>
        </div>
    );
}