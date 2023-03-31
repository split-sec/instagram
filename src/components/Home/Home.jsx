import TopNavbar from '../TopNavbar/TopNavbar';
import StoryBar from '../StoryBar/StoryBar';
import styles from './Home.module.scss';

export default function Home() {
    return (
        <>
            <TopNavbar />
            <StoryBar />
            <h1>Home</h1>
        </>
    );
}