import React from "react";
import {
    Shield,
    Brain,
    Lock,
    ChevronRight,
    // Facebook,
    // Instagram,
    // Youtube,
    Phone,
    Mail,
} from "lucide-react";
const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center">
                <Shield className="h-8 w-8" />
                <span className="ml-2 text-xl font-bold">CyberEdu</span>
              </div>
              <p className="mt-4 text-blue-200">
                Empowering individuals and organizations with cutting-edge
                cybersecurity education and training solutions.
              </p>
            </div>

            {/* Important Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Important Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    Support Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    Site Map
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>info@cyberedu.com</span>
                </div>
                <div className="flex space-x-4 mt-6">
                  <a href="#" className="hover:text-blue-300 transition-colors">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="hover:text-blue-300 transition-colors">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="hover:text-blue-300 transition-colors">
                    <Youtube className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-200">
            <p>
              &copy; {new Date().getFullYear()} CyberEdu. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      )
}

export default Footer