import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.scss';
import Home from './Pages/Home/Home';
import ThreePage from "./Pages/ThreePage/ThreePage";
import PageError from "./Components/PageError/PageError";
import ContactUs from "./Pages/ContactUs/ContactUs";
import AboutSet from "./Pages/AboutSet/AboutSet";
import VideoItems from "./Pages/VideoItems/VideoItems";
import BuyNow from "./Pages/BuyNow/BuyNow";
import SessionContact from "./Pages/SessionContact/SessionContact";
import Policy from "./Pages/Policy/Policy";
import TermsUsage from "./Pages/TermsUsage/TermsUsage";
import IamBook from "./Pages/IamBook/IamBook";
import Photos from "./Pages/Photos/Photos";
import EventLive from "./Pages/EventLive/EventLive";
import Recording from "./Pages/Recording/Recording";
import FormSubmit from "./Pages/FormSubmit/FormSubmit";
import BlogPost from "./Pages/BlogPost/BlogPost";
import SignUp from "./Dashboard/Pages/SignUp/SignUp";
import LoginArea from "./Dashboard/Pages/Login/LoginArea";
import Dashboard from "./Dashboard/Pages/Dashboard/Dashboard";
import Blogposter from "./Dashboard/Pages/Blogposter/Blogposter";
import BlogposterAdd from "./Dashboard/Pages/Blogposter/BlogposterAdd";
import DashboardMain from "./Dashboard/Pages/DashboardMain/DashboardMain";
import DashboardBanner from "./Dashboard/Pages/DashboardBanner/DashboardBanner";
import Addbanner from "./Dashboard/Pages/DashboardBanner/Addbanner";
import UserTarget from "./Dashboard/ComponentDashboard/UserTarget/UserTarget";


function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");

  return (
    <BrowserRouter>
      <Routes>
        <Route index="/" element={<Home />} />
        <Route path="/about-sri-ashish" element={<AboutSet />} />
        <Route path="/three-page" element={<ThreePage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/video-items" element={<VideoItems />} />
        <Route path="/BuyNow" element={<BuyNow />} />
        <Route path="/session-contact" element={<SessionContact />} />
        <Route path="/policy-details" element={<Policy />} />
        <Route path="/termsusage" element={<TermsUsage />} />
        <Route path="/i-am-book" element={<IamBook />} />
        <Route path="/live-events" element={<EventLive />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/recording" element={<Recording />} />
        <Route path="/success" element={<FormSubmit />} />
        <Route path="/poems" element={<BlogPost />} />


        <Route path="/login-dashboard" element={isLoggedIn === "true" ? <Dashboard /> : <LoginArea />}/>
        <Route path="/user-dashboard" element={isLoggedIn === "true" ? <UserTarget /> : <LoginArea />}/>
        <Route path="/signup-dashboard" element={isLoggedIn === "true" ? <Dashboard /> : <SignUp />} />
        <Route path="/dashboard" element={isLoggedIn === "true" ? <Dashboard /> : <LoginArea />} />
        <Route path="/blogposter" element={isLoggedIn === "true" ? <Blogposter /> : <LoginArea />} />
        <Route path="/blogposter-add" element={isLoggedIn === "true" ? <BlogposterAdd /> : <LoginArea />} />
        <Route path="/dashboard-area" element={isLoggedIn === "true" ? <DashboardMain /> : <LoginArea />} />
        <Route path="/dashboard-banner" element={isLoggedIn === "true" ? <DashboardBanner /> : <LoginArea />} />
        <Route path="/dashboard-banner-add" element={isLoggedIn === "true" ? <Addbanner /> : <LoginArea />} />
        

        <Route path="*" element={<PageError />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
