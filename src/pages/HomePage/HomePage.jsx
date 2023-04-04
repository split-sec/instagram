import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './HomePage.css';
import Home from '../../components/Home/Home';
import Explore from '../../components/Explore/Explore';
import Reels from '../../components/Reels/Reels';
import Inbox from '../../components/Inbox/Inbox';
import Profile from '../../components/Profile/Profile';
import Notifications from '../../components/Notifications/Notifications';

import ProfilePosts from '../../components/ProfilePosts/ProfilePosts';

import { useViewport } from '../../helper/useViewport.jsx';
import { ViewportProvider } from '../../helper/ViewPortContext.jsx';

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }, []); 

    return windowSize;
}

export default function HomePage() {
    const { width, height } = useWindowSize();

    return (
        <ViewportProvider>
            <Routes>
                <Route path='/' element={
                    width < 480 ? <Home /> : <h1>Here</h1>
                } />
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
        </ViewportProvider>
    );
}