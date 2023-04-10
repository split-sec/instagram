import { Routes, Route } from "react-router-dom";

import Home from './Home/Home';
import Explore from './Explore/Explore';
import Reels from './Reels/Reels';
import Inbox from './Inbox/Inbox';
import Profile from './Profile/Profile';
import Notifications from './Notifications/Notifications';
import ProfilePosts from './ProfilePosts/ProfilePosts';

export default function MobileRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} /> 
            <Route path='explore' element ={<Explore />} />
            <Route path='reels' element ={<Reels />} />
            <Route path='direct/inbox' element ={<Inbox />} />
            <Route path='sampleName' element={<Profile />} >
                <Route path='' element={<ProfilePosts /> } />
                <Route path='feed' element={<h1>Feed</h1>} />
                <Route path='tagged' element={<h1>Tagged</h1>} />
                <Route path='saved' element={<h1>Saved</h1>} />
            </Route>
            <Route path='/notifications' element={<Notifications />} />
        </Routes>
    );
}
