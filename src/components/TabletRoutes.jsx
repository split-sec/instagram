import { Route, Routes } from "react-router-dom";

import Home from "./TabletsAndBeyond/Home/Home";

export default function TabletRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='explore' element ={<h1>Explore for Tablets and beyond</h1>} />
            <Route path='reels' element ={<h1>Reels for Tablets and beyond</h1>} />
            <Route path='direct/inbox' element ={<h1>Inbox for Tablets and beyond</h1>} />
            <Route path='sampleName' element={<h1>Profile for Tablets and beyond</h1>} ></Route>
        </Routes>
    );
}