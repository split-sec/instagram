import styles from './TopContainer.module.scss';
import LeftContainer from './LeftContainer/LeftContainer';
import RightContainer from './RightContainer/RightContainer';

export default function TopContainer() {
    return(
        <div className={`${styles.top_container} flex`}>
            <LeftContainer />
            <RightContainer />
        </div>
    );
}