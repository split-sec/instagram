import { Routes, Route } from 'react-router-dom';

import './HomePage.css';
import Home from '../../components/Home/Home';
import Explore from '../../components/Explore/Explore';
import Reels from '../../components/Reels/Reels';
import Inbox from '../../components/Inbox/Inbox';
import Profile from '../../components/Profile/Profile';
import Notifications from '../../components/Notifications/Notifications';

export default function HomePage() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/explore' element ={<Explore />} />
                <Route path='/reels' element ={<Reels />} />
                <Route path='/direct/inbox' element ={<Inbox />} />
                <Route path='/sampleName' element={<Profile />} />
                <Route path='/notifications' element={<Notifications />} />
            </Routes>
        </div>
    );
}