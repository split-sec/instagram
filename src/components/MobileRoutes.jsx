import { Routes, Route } from "react-router-dom";

import Home from './Home/Home';
import Explore from './Explore/Explore';
import Reels from './Reels/Reels';
import Inbox from './Inbox/Inbox';
import Profile from './Profile/Profile';
import Notifications from './Notifications/Notifications';
import ProfilePosts from './ProfilePosts/ProfilePosts';

import NewSignupLanding from './NewSignup/NewSignupLanding';
import NewSignUpPage from './NewSignup/NewSignUpPage/NewSignUpPage';
import NewSignUpPagePhone from './NewSignup/NewSignUpPagePhone/NewSignUpPagePhone';
import NewSignUpPageEmail from './NewSignup/NewSignUpPageEmail/NewSignUpPageEmail';
import EmailConfirmationMobile from './NewSignup/EmailConfirmationMobile/EmailConfirmationMobile';
import RegisterNameMobile from './NewSignup/RegisterNameMobile/RegisterNameMobile';

export default function MobileRoutes() {
    const loggedIn = false;

    return (
        <Routes>
            <Route path='/' element={loggedIn ? <Home /> : <NewSignupLanding />} />
            {!loggedIn ? 
            <>
                <Route path='accounts/signup' element={<NewSignUpPage />}>
                    <Route path='phone' element={<NewSignUpPagePhone />} />
                    <Route path='email' element={<NewSignUpPageEmail />} />
                </Route>
                <Route path='accounts/signup/emailConfirmation' element={<EmailConfirmationMobile />} />
                <Route path='accounts/signup/name' element={<RegisterNameMobile />} />
            </>
            :
            <></>}
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
