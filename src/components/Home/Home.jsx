import axios from "axios";

import TopNavbar from "../TopNavbar/TopNavbar";
import StoryBar from "../StoryBar/StoryBar";
import Navbar from "../LeftNavbar/LeftNavbar";
import SuggestedForYou from "../SuggestedForYou/SuggestedForYou";
import CompletelyCaughtUp from "../CompletelyCaughtUp/CompletelyCaughtUp";
import MobilePost from "../MobilePost/MobilePost";

import styles from "./Home.module.scss";

export default function Home() {
  return (
    <>
      <TopNavbar />
      <StoryBar />
      <h1>Home</h1>
      <SuggestedForYou />
      <CompletelyCaughtUp />
      <MobilePost />
      <Navbar />
    </>
  );
}
