import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './App.css';
import Login from "./Login/Login";
import Register from "./Register/Register";
import FindExpert from './Dashboard/FindExpert';
import Search from './Dashboard/Search';
import ExpertProfile from "./Dashboard/ExpertProfile";
import Projects from "./Projects/Projects";
import ProjectsDetails from './Projects/ProjectsDetails';
import Collaborate from "./Collaborate/Collaborate";
import ProjectsDetailsMessage from "./Projects/ProjectsDetailsMessage";
import ProjectsDetailsExpert from "./Projects/ProjectsDetailsExpert";
import ExpertCell from "./Expert_cell/ExpertCell";
import Conversations from "./Conversations/Conversations";
import UserMangement from "./User_management/UserMangement";
import HelpSupport from "./Support/HelpSupport";
import News from "./News/News";
import Landing from './Landing/Landing';
import Home from "./Home/Home";
import Faq from "./Faq/Faq";
import ExpertCallHistory from './ExpertCall/ExpertCallHistory';
import ExpertPayment from './ExpertPayment.js/ExpertPayment';
import ExpertDashboard from './ExpertDashboard/ExpertDashboard';
import ExpertCompliance from './ExpertCompliance/ExpertCompliance';
import ExpertProjectDetails from './ExpertDashboard/ExpertProjectDetails';
import LandingRegister from './ExpertRegister/LandingRegister';
import ExpertRegister from "./ExpertRegister/ExpertRegister";
import StepFour from "./ExpertRegister/StepFour";
import ExpertLogin from "./ExpertLogin/ExpertLogin";
import WebsNews from "./WebsiteNews/WebsNews";
import BlogDetails from "./WebsiteNews/BlogDeatils";
import Contact from "./Contact/Contact";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";
import Compliance from "./Compliance/Compliance";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

import $ from "jquery";


function App() {
  return (
    <Router>
         

    <Routes>
        <Route exact="true" path="/"  element={<Login/>}/>
        <Route exact="true" path="/register" element={<Register/>}/>
        <Route exact="true" path="/findexpert" element={<FindExpert/>}/>
        <Route exact="true" path="/projects" element={<Projects/>}/>
        <Route exact="true" path="/search" element={<Search/>}/>
        <Route exact="true" path="/expertprofile" element={<ExpertProfile/>}/>
        <Route exact="true" path="/projectsdetails" element={<ProjectsDetails/>} />
        <Route exact="true" path="/collaborate" element={<Collaborate/>} />
        <Route exact="true" path="/projectsdetailsmessage" element={<ProjectsDetailsMessage/>} />
        <Route exact="true" path="/projectsdetailsexpert" element={<ProjectsDetailsExpert/>} />
        <Route exact="true" path="/conversations" element={<Conversations/>} />
        <Route exact="true" path="/expertcell" element={<ExpertCell/>} />
        <Route exact="true" path="/usermangement" element={<UserMangement/>} />
        <Route exact="true" path="/helpsupport" element={<HelpSupport/>} />
        <Route exact="true" path="/news" element={<News/>} />
        <Route exact="true" path="/landing" element={<Landing/>} />
        <Route exact="true" path="/home" element={<Home/>} />
        <Route exact="true" path="/faq" element={<Faq/>} />
        <Route exact="true" path="/expertdashboard" element={<ExpertDashboard/>} />
        <Route exact="true" path="/expertcallhistory" element={<ExpertCallHistory/>} />
        <Route exact="true" path="/expertpayment" element={<ExpertPayment/>} />
        <Route exact="true" path="/expertcompliance" element={<ExpertCompliance/>} />
        <Route exact="true" path="/expertprojectdetails" element={<ExpertProjectDetails/>} />
        <Route exact="true" path="/landingregister" element={<LandingRegister/>} />
        <Route exact="true" path="/expertregister" element={<ExpertRegister/>} />
        <Route exact="true" path="/stepfour" element={<StepFour/>} />
        <Route exact="true" path="/expertLogin" element={<ExpertLogin/>} />
        <Route exact="true" path="/websnews" element={<WebsNews/>} />
        <Route exact="true" path="/blogdetails" element={<BlogDetails/>} />
        <Route exact="true" path="/contact" element={<Contact/>} />
        <Route exact="true" path="/privacypolicy" element={<PrivacyPolicy/>} />
        <Route exact="true" path="/compliance" element={<Compliance/>} />
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    </Routes>
            
       
</Router>
  );
}

export default App;
