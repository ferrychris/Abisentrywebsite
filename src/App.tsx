// import React, { useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Courses from "./Courses";
import Features from "./Features";
import Contactus from "./Contactus";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import Hero from "./Hero";

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero/>
            <Courses/>
            <Features/>
            <Testimonial/>
            <Contactus/>
          </>
        } />
        <Route path="/courses" element={<Courses />} />
        <Route path="/features" element={<Features />} />
        <Route path="/testimonials" element={<Testimonial />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;