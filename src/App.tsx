import React, { useState, useRef } from "react";
import Navbar from "./Navbar";
import Courses from "./Courses";
import Features from "./Features";
import Contactus from "./Contactus";
import Testimonial from "./Testimonial";
import Footer from "./Footer";


// import { Link } from "react-router-dom";
// import HashLink from "react-router-hash-link";
import Hero from "./Hero";
function App() {


  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
     <Navbar />
     <Hero/>
     <Courses/>
     <Features/>
     <Testimonial/>
     <Contactus/>
     <Footer/>

     
    </div>
  );
}

export default App;
