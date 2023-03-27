import TopContainer from '../../components/TopContainer/TopContainer.jsx';
import BottomContainer from '../../components/BottomContainer/BottomContainer.jsx';

export default function LoginBasePage() {
    return(
        <div className={`flex flex-col`}>
            <TopContainer />
            <BottomContainer />
        </div>
    );
}