import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

export default function Navbar(){
    return(
        <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
               ABISENTRY  
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to ="#home" className="text-blue-600 font-medium">
                Home
              </Link>
              <Link to ="#about" className="text-gray-500 hover:text-gray-900">
                About
              </Link>
              <Link to ="#courses" className="text-gray-500 hover:text-gray-900">
                Services
              </Link>
              <Link to ="#contactus" className="text-gray-500 hover:text-gray-900">
                Contact Us
             </Link>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Register
            </button>
          </div>
        </div>
      </nav>
    )
}