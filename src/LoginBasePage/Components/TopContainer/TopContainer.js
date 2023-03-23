import styles from './TopContainer.module.scss';
import LeftContainer from './LeftContainer/LeftContainer';

export default function TopContainer() {
    return(
        <div className={`${styles.top_container} flex`}>
            <LeftContainer />
            <div>Right side</div>
        </div>
    );
}