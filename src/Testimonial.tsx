import React from "react";
import { Star } from "lucide-react";
const Testimonial = () => {
    return (
        <div id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">What Our Students Say</h2>
            <p className="mt-4 text-lg text-gray-600">Hear from our successful graduates</p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg relative">
              <div className="absolute -top-4 left-8">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mt-4">
                "The ethical hacking course was incredibly comprehensive. I landed a job as a security analyst right after completion!"
              </p>
              <div className="mt-6 flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
                  alt="Student"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Alex Thompson</h4>
                  <p className="text-gray-500 text-sm">Security Analyst at TechCorp</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg relative">
              <div className="absolute -top-4 left-8">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mt-4">
                "The practical labs and hands-on experience were invaluable. I feel confident handling real-world security challenges."
              </p>
              <div className="mt-6 flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
                  alt="Student"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Sarah Chen</h4>
                  <p className="text-gray-500 text-sm">Cybersecurity Engineer</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg relative">
              <div className="absolute -top-4 left-8">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mt-4">
                "The instructors are industry experts who bring real-world experience to the classroom. Best investment in my career!"
              </p>
              <div className="mt-6 flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
                  alt="Student"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Michael Rodriguez</h4>
                  <p className="text-gray-500 text-sm">Penetration Tester</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )};
    export default Testimonial