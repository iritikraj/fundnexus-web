import { useState } from "react";
import { FaGoogle, FaLinkedin } from "react-icons/fa";
import { SiX } from "react-icons/si";
// import StorageService from "../../services/storageService";
// import AppConstants from "../../constants/appConstants";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    console.log("Logging in with:", email, password);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 justify-center px-4">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Log in</h2>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <div>
          <input
            type="text"
            placeholder="Email or Mobile number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-md text-lg font-medium hover:bg-blue-700 transition cursor-pointer"
        >
          Continue
        </button>

        <div className="text-right">
          <a href="#" className="text-sm text-blue-600 hover:underline cursor-pointer">
            Forgot password?
          </a>
        </div>

        <div className="text-center text-gray-500">— OR —</div>

        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 py-3 bg-gray-300 text-gray-800 rounded-md font-medium hover:bg-gray-400 transition cursor-pointer"
        >
          <FaGoogle /> Google
        </button>
        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 py-3 bg-gray-300 text-gray-800 rounded-md font-medium hover:bg-gray-400 transition cursor-pointer"
        >
          <SiX /> X.com
        </button>
        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 py-3 bg-gray-300 text-gray-800 rounded-md font-medium hover:bg-gray-400 transition cursor-pointer"
        >
          <FaLinkedin /> LinkedIn
        </button>
      </form>
    </div>
  );
}
