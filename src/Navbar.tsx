import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

export default function Navbar(){
    return(
        <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
<img src="https://www.abisentrytechnologies.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabisentry.1e2e2452.webp&w=64&q=75"/>              <span className="ml-2 text-xl font-bold text-gray-900">
               ABISENTRY  
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to ="/" className="text-blue-600 font-medium">
                Home
              </Link>
              <Link to ="features" className="text-gray-500 hover:text-gray-900">
                Features
              </Link>
              <Link to ="courses" className="text-gray-500 hover:text-gray-900">
                Courses
              </Link>
              <Link to ="contactus" className="text-gray-500 hover:text-gray-900">
                Contact Us
             </Link>
            </div>
            <Link to ="https://airtable.com/app0I12eC9BZg1HRc/pagYKUXZS42GJzqDE/form" className=" bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">Register for a Course</Link>
            
          </div>
        </div>
      </nav>
    )
}