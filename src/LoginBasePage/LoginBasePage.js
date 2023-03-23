import styles from './LoginBasePage.module.scss';
import TopContainer from './Components/TopContainer/TopContainer';
import BottomContainer from './Components/BottomContainer/BottomContainer';

export default function LoginBasePage() {
    return(
        <div className={`${styles.login_page} flex flex-col`}>
            <TopContainer />
            <BottomContainer />
        </div>
    );
}