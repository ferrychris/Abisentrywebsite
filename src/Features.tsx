
import { Shield, Brain, Lock } from "lucide-react";

export default function Hero() {
    return (
        <section id="features" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive cybersecurity education for the modern world
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Brain className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Hands on Training
              </h3>
              <p className="mt-2 text-gray-600">
                Learn directly from industry experts 
                and gain practical experience with real-world scenarios
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Lock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Ethical and Sustainable Practices
              </h3>
              <p className="mt-2 text-gray-600">
Explore cybersecurity solutions that aligns with environmental sustainability and ethical standards              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Ai Driven Insights
              </h3>
              <p className="mt-2 text-gray-600">
Harness the power of cutting-edge Ai to solve modern cybersecurity challenges              </p>
            </div>
          </div>
        </div>
      </section>
    )
}