import Posts from '../Posts/Posts';
import styles from './CenterContainer.module.scss';

export default function CenterContainer() {
    return (
        <div className={`${styles.centerContainer}`}>
            <Posts />
        </div>
    );
}