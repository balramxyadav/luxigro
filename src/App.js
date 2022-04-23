import React from "react"
import './App.css';
import Navbar from "./navbar.js"
import Main from "./main.js"
import Footer from "./ui_component/footer/footer"
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Project from "./ui_component/projects/projects";
import AboutUs from "./ui_component/aboutUs/aboutUs";
import ContactUs from "./ui_component/contactUs/contactUs";
import PrivacyPolicy from "./ui_component/legal/privacyPolicy";
import TermsAndCondition from "./ui_component/legal/termsAndCondition";



function App() {
  return (
    <Router>

    <div className="App">
      <Navbar/>
      <Routes>

        <Route path="/"  element={<Main/>} />
        <Route path="/project"  element={<Project/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="/terms-and-condition" element={<TermsAndCondition/>}/>
        

      </Routes>
      
      <Footer/>
    </div>

    </Router>
  );
}

export default App;
