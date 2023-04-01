import TopNavbar from '../TopNavbar/TopNavbar';
import StoryBar from '../StoryBar/StoryBar';
import Navbar from '../LeftNavbar/LeftNavbar';
import SuggestedForYou from '../SuggestedForYou/SuggestedForYou';
import styles from './Home.module.scss';

export default function Home() {
    return (
        <>
            <TopNavbar />
            <StoryBar />
            <h1>Home</h1>
            <SuggestedForYou />
            <Navbar />
        </>
    );
}