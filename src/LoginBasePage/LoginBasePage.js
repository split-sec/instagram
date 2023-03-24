// import styles from './LoginBasePage.module.scss';
import TopContainer from './Components/TopContainer/TopContainer';
import BottomContainer from './Components/BottomContainer/BottomContainer';

export default function LoginBasePage() {
    return(
        <div className={`flex flex-col`}>
            <TopContainer />
            <BottomContainer />
        </div>
    );
}