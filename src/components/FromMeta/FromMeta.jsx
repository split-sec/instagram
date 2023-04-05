import styles from './FromMeta.module.scss';

export default function FromMeta() {
    return (
        <div className={`${styles.fromMetaContainer}`}>
            <img className={`${styles.fromMeta}`} src='https://static.cdninstagram.com/rsrc.php/yb/r/SxCWlJznXoy.svg'></img>
        </div>
    );
}