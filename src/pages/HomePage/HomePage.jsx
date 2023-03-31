import { Routes, Route } from 'react-router-dom';

import './HomePage.css';
import TopNavbar from '../../components/TopNavbar/TopNavbar';
import Navbar from '../../components/LeftNavbar/LeftNavbar';
import Home from '../../components/Home/Home';
import Explore from '../../components/Explore/Explore';
import Reels from '../../components/Reels/Reels';
import Inbox from '../../components/Inbox/Inbox';
import Profile from '../../components/Profile/Profile';
import Notifications from '../../components/Notifications/Notifications';
import StoryBar from '../../components/StoryBar/StoryBar';

export default function HomePage() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/explore' element ={<Explore />} />
                <Route path='/reels' element ={<Reels />} />
                <Route path='/direct/inbox' element ={<Inbox />} />
                <Route path='/:id' element={<Profile />} />
                <Route path='/notifications' element={<Notifications />} />
            </Routes>

            <Navbar />
        </div>
    );
}