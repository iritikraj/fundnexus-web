import { useNavigate } from 'react-router-dom';

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      {/* Logo and App Name */}
      <div className="text-center mb-10">
        <p className="text-2xl mb-10">Welcome to</p>
        <div className="flex items-center justify-center mb-4">
          {/* <img
            src="/auth/fundnexus-logo-name.svg"
            alt="FundNexus Logo"
            className="w-16 h-16 mr-3"
          /> */}
          <h1 className="text-6xl font-semibold">
            <span className="text-gray-800">FUND</span>
            <span className="text-gray-500">NEXUS</span>
          </h1>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="w-full max-w-xs space-y-4">
        <button
          onClick={() => navigate('login')}
          className="w-full py-3 bg-gray-300 text-gray-800 rounded-md text-lg font-medium hover:bg-gray-400 transition cursor-pointer">
          Log in
        </button>
        <div className="text-center text-gray-500">— Or —</div>
        <button
          onClick={() => navigate('signup')}
          className="w-full py-3 bg-gray-300 text-gray-800 rounded-md text-lg font-medium hover:bg-gray-400 transition cursor-pointer">
          Sign Up
        </button>
      </div>
    </div>
  );
}
