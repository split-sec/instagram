import BottomContainer from '../../components/BottomContainer/BottomContainer';
import RightContainer from '../../components/TopContainer/RightContainer/RightContainer';

import styles from './Signup.module.scss';

export default function Signup() {
    return ( 
        <div className={`flex flex-col ${styles.signupContainer}`}>
            <RightContainer />
            <BottomContainer />
        </div>
    );
} 