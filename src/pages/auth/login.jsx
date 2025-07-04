import { FaGoogle, FaLinkedin } from "react-icons/fa";
import { SiX } from "react-icons/si"; // X.com icon

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 justify-center px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Log in</h2>
      </div>

      {/* Form Fields */}
      <div className="w-full max-w-sm space-y-4">
        <input
          type="text"
          placeholder="Email or Mobile number"
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Continue Button */}
        <button className="w-full py-3 bg-blue-600 text-white rounded-md text-lg font-medium hover:bg-blue-700 transition cursor-pointer">
          Continue
        </button>

        {/* Forgot Password Link */}
        <div className="text-right">
          <a
            href="#"
            className="text-sm text-blue-600 hover:underline cursor-pointer"
          >
            Forgot password?
          </a>
        </div>

        {/* Divider */}
        <div className="text-center text-gray-500">— OR —</div>

        {/* Social Logins */}
        <button className="w-full flex items-center justify-center gap-2 py-3 bg-gray-300 text-gray-800 rounded-md font-medium hover:bg-gray-400 transition cursor-pointer">
          <FaGoogle /> Google
        </button>
        <button className="w-full flex items-center justify-center gap-2 py-3 bg-gray-300 text-gray-800 rounded-md font-medium hover:bg-gray-400 transition cursor-pointer">
          <SiX /> X.com
        </button>
        <button className="w-full flex items-center justify-center gap-2 py-3 bg-gray-300 text-gray-800 rounded-md font-medium hover:bg-gray-400 transition cursor-pointer">
          <FaLinkedin /> LinkedIn
        </button>
      </div>
    </div>
  );
}
