import { Shield, Mail, Phone, Twitter, Facebook, Linkedin   } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}

          <div>
            <div className="flex items-center">
              {/* <Shield className="h-8 w-8" /> */}
              <img src="https://www.abisentrytechnologies.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabisentry.1e2e2452.webp&w=64&q=75"/>
              <span className="ml-2 text-xl font-bold">Abisentry</span>
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
                  href="https://www.abisentrytechnologies.com"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="https://www.abisentrytechnologies.com/academy"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                 Academy  
                </a>
              </li>
              <li>
                <a
                  href="https://www.abisentrytechnologies.com/store"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                 Marketplace
                </a>
              </li>
              <li>
                <a
                  href="https://www.abisentrytechnologies.com/products"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Products
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
                <span>+234 (090) 941-83753</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>academy@abisentry.com</span>
              </div>
              <div className="flex space-x-4 mt-6">
                <a href="https://www.facebook.com/Abisentry?mibextid=ZbWKwL" className="hover:text-blue-300 transition-colors">
                  {/* <Facebook className="h-6 w-6" /> */}
                  
                  <Facebook color="#ffffff" />
                  
                   
                </a>
                <a href="https://x.com/abisentry?t=RIQSBT-Z3UAqsjyT4wVgsw&s=09" className="hover:text-blue-300 transition-colors">
                <Twitter color="#ffffff" />
                </a>
                <a href="https://www.linkedin.com/company/abisentry-technologies/" className="hover:text-blue-300 transition-colors">
                <Linkedin color="#ffffff" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-200">
          <p>
            &copy; {new Date().getFullYear()} Abisentry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
