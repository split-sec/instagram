import { Route, Routes } from "react-router-dom";

import Home from "./TabletsAndBeyond/Home/Home";
import Explore from "./TabletsAndBeyond/Explore/Explore";
import Reels from './Reels/Reels';

export default function TabletRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='explore' element={<Explore />} />
            <Route path='reels' element={<Reels />} />
            <Route path='direct/inbox' element ={<h1>Inbox for Tablets and beyond</h1>} />
            <Route path='sampleName' element={<h1>Profile for Tablets and beyond</h1>} ></Route>
        </Routes>
    );
}