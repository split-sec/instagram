import Navbar from '../../Navbar/Navbar';
import CenterContainer from '../../CenterContainer/CenterContainer';
import RightContainer from '../../RightContainer/RightContainer';

import styles from './Home.module.scss';

export default function Home() {
    return (
        <div className="flex">
            <Navbar />
            <div className={`${styles.container} flex`}>
                <CenterContainer />
                <RightContainer />
            </div>
        </div>
    );
}