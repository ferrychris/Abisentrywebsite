import { ChevronRight } from "lucide-react";
import Cyberimg from './images/Cyberillus.jpg'


export default function Hero() {
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
              Reliable Solutions for Every security issue
            </p>
            <div className="mt-8 flex space-x-4">
              <button className="bg-coral-500 text-white px-8 py-3 rounded-lg hover:bg-coral-600 transition-colors flex items-center group">
                START
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
          </div>
        </div>
      </section>
      )
}
