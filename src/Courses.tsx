import { BookOpen, Code } from "lucide-react";
// import Shieldcheck from "lucide-react";
import { ShieldCheck} from 'lucide-react';
export default function Courses(){
    return(
        <div>
               {/* Courses Section */}
      <div id="courses" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Featured Courses</h2>
            <p className="mt-4 text-lg text-gray-600">Master cybersecurity with our comprehensive course catalog</p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Course 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80"
                  alt="Ethical Hacking"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  Beginner
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-blue-600 mb-2">
                  <BookOpen className="h-5 w-5 mr-2" />
                  <span className="text-sm">12 Weeks</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ethical Hacking Fundamentals</h3>
                <p className="text-gray-600 mb-4">Learn the basics of ethical hacking and penetration testing</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">$299</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>

            {/* Course 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80"
                  alt="Network Security"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  Intermediate
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-blue-600 mb-2">
                  <Code className="h-5 w-5 mr-2" />
                  <span className="text-sm">8 Weeks</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Network Security</h3>
                <p className="text-gray-600 mb-4">Master the art of securing networks and preventing breaches</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">$399</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>

            {/* Course 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80"
                  alt="Incident Response"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  Advanced
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-blue-600 mb-2">
                 
                  <ShieldCheck className="h-5 w-5 mr-2" />
                  <span className="text-sm">10 Weeks</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Incident Response</h3>
                <p className="text-gray-600 mb-4">Learn to handle and mitigate security incidents effectively</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">$499</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
        </div>
    )
}