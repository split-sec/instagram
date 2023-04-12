import { Route, Routes } from "react-router-dom";

import Home from "./TabletsAndBeyond/Home/Home";
import Explore from "./TabletsAndBeyond/Explore/Explore";
import Reels from './TabletsAndBeyond/Reels/Reels';
import Profile from "./TabletsAndBeyond/Profile/Profile";
import Settings from "./TabletsAndBeyond/Settings/Settings";

export default function TabletRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='explore' element={<Explore />} />
            <Route path='reels' element={<Reels />} />
            <Route path='direct/inbox' element ={<h1>Inbox for Tablets and beyond</h1>} />
            <Route path='sampleName' element={<Profile />} />
            <Route path='accounts/:id' element={<Settings />}>
            </Route>
        </Routes>
    );
}