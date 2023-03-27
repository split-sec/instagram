import styles from './TopContainer.module.scss';
import LeftContainer from './LeftContainer/LeftContainer.jsx';
import RightContainer from './RightContainer/RightContainer.jsx';

export default function TopContainer() {
    return(
        <div className={`${styles.top_container} flex`}>
            <LeftContainer />
            <RightContainer />
        </div>
    );
}