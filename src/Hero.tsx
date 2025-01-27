import { ChevronRight } from "lucide-react";
import Cyberimg from "./images/Cyberillus.jpg";
import { Link } from "react-router-dom";
export default function Hero() {
<<<<<<< HEAD
  return (
    <section id="hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight align-center ">
            Connecting Knowledge 
            <br />
            knowledge with           
            <span className="text-blue-600">real-world application</span>
            <br />
            in the ever-evolving world of cybersecurity and Ai
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Designed for professionals, students and businesses. Our Academy
            Offers Tailored Education and Training to empower individuals and
            organizations to stay one step ahead of cyber threats.
          </p>
          <div className="mt-8 flex space-x-4">
            <Link to="https://airtable.com/app0I12eC9BZg1HRc/pagYKUXZS42GJzqDE/form" className="bg-coral-500 text-white px-8 py-3 rounded-lg hover:bg-coral-600 transition-colors flex items-center group">
            Apply Now
            <ChevronRight className="h-5 w-5 ml-2 group-hover:rotate-90 transition-transform duration-300" />
            </Link>
=======
    return (
        <section id="hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Empower
              <br />
              Your Defense with
              <br />
              <span className="text-blue-600">AI-driven</span> Cyber
              <br />
              security Training
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Unlock the power of cybersecurity with our cutting-edge AI-driven
              training solutions. Gain expert knowledge, master the latest
              cybersecurity techniques, and safeguard your digital assets from
            </p>
            <div className="mt-8 flex space-x-4">
              <button className="bg-coral-500 text-white px-8 py-3 rounded-lg hover:bg-coral-600 transition-colors flex items-center group">
                Get Started
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src={Cyberimg}
              alt="Cybersecurity Illustration"
              className="rounded-2xl shadow-2xl"
            />

            <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl">
            </div>
>>>>>>> 11e61bf86d2bef449abbaa637be7838b9cce4fac
          </div>
        </div>
        <div className="relative">
          <img
            src={Cyberimg}
            alt="Cybersecurity Illustration"
            className="rounded-2xl shadow-2xl"
          />

          <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
