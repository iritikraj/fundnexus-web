import React, { useState } from 'react';
import { FiBell } from 'react-icons/fi';
import { BsCheck } from 'react-icons/bs';
import { FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import { ApiService } from '../../services/apiService';

const ComingSoon = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const getUserLocationData = async () => {
    try {
      const data = await ApiService.get('https://ipapi.co/json/', '');
      return {
        ip: data.ip,
        city: data.city,
        region: data.region,
        country: data.country_name,
        timezone: data.timezone,
      };
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');

    const locationData = await getUserLocationData();

    const payload = {
      email,
      ...locationData,
      submittedAt: new Date().toISOString(),
    };

    console.log(payload);

    try {
      const url = import.meta.env.VITE_EARLY_ACCESS_SHEET;
      await ApiService.post(url, payload);
      setSubmitted(true);
    } catch (error) {
      console.log(error);
      setSubmitted(false);
    } finally {
      setEmail('');
    }
  };

  const featureList = [
    'Founder & Investor Dashboards',
    'Microvest Section for Small-Stores',
    'Startup Discovery & Trust Scoring',
    'Podcast Hub for Students',
    'University & Innovation Program Access',
    'Legal Toolkits (NDAs, Equity Agreements)',
  ];

  const teamMembers = [
    { name: 'Omkar Haldavnekar', role: 'Founder & CEO', img: '/core-team/Omkar-Founder.webp' },
    { name: 'Parth Pawar', role: 'Co-founder - Marketing Associate', img: '/core-team/Parth-Marketing.webp' },
    { name: 'Ritik', role: 'Vice President of Engineering', img: '/core-team/Raj-VPofEngg.webp' },
    { name: 'Pratyush Desai', role: 'UI/UX Designer', img: '/core-team/Pratyush-UIUX.webp' },
    { name: 'Prasoon Sahu', role: 'Product Manager', img: '/core-team/Prasoon-PM.webp' },
    { name: 'Karishma', role: 'Full Stack Developer', img: '/core-team/Karishma-fullstack.webp' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 p-8 flex flex-col items-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-wide text-center text-black drop-shadow-lg mb-6 break-words">
        <span className="text-black">FUND</span><span className="text-gray-500">NEXUS</span>
      </h1>

      <h2 className="text-center text-3xl md:text-5xl font-extrabold text-slate-800 max-w-3xl leading-tight drop-shadow-md">
        India&apos;s First LinkedIn-Style Platform for Founders, Investors, Students & Micro-Entrepreneurs
      </h2>

      <p className="text-center text-lg text-slate-600 mt-5 max-w-3xl">
        We&apos;re building a trusted ecosystem where startups can raise funds, students launch ideas,
        investors discover potential, and small stores access community capital.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 flex flex-col md:flex-row items-center gap-4 max-w-md w-full"
      >
        <input
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`flex-grow px-5 py-3 rounded-lg shadow-md border ${error ? 'border-red-500 focus:ring-red-500' : 'border-emerald-400 focus:ring-emerald-500'
            } focus:outline-none focus:ring-2 transition`}
        />
        <button
          type="submit"
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition flex items-center gap-3 text-lg"
          aria-label="Notify me"
        >
          <FiBell className="w-6 h-6" />
          Notify Me
        </button>
      </form>

      {error && <p className="text-red-600 mt-3 font-medium">{error}</p>}
      {submitted && !error && (
        <p className="text-emerald-600 mt-5 font-semibold text-lg animate-pulse">
          Thanks! You&apos;ll be notified once we launch 🎉
        </p>
      )}

      <div className="mt-14 text-left max-w-3xl w-full bg-white rounded-xl p-8 shadow-xl">
        <h3 className="text-2xl font-bold text-slate-800 mb-5 flex items-center gap-3">
          <span className="text-3xl">🚀</span> MVP Launch Soon - Be Among the First
        </h3>
        <ul className="space-y-4 text-gray-800 text-base sm:text-lg">
          {featureList.map((item, index) => (
            <li key={index} className="flex items-center gap-3 sm:gap-4">
              <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 bg-green-600 text-white rounded-full shadow-md shrink-0">
                <BsCheck className="w-4 h-4 sm:w-5 sm:h-5" />
              </span>
              <span className="flex-1">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-16 max-w-5xl w-full">
        <h3 className="text-3xl font-extrabold text-center mb-8 text-slate-800 drop-shadow-md">
          Meet the Core Team
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map(({ name, role, img }, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-2xl"
            >
              <img src={img} alt={name} className="w-24 h-24 rounded-full object-cover mb-4 shadow-md" />
              <p className="font-semibold text-lg text-slate-800">{name}</p>
              <p className="text-gray-600">{role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* <footer className="mt-20 mb-10 text-sm text-slate-400 text-center select-none">
        FundNexus™ | All rights reserved © 2025
      </footer> */}

      <footer className="mt-20 mb-10 text-center text-sm text-slate-500 select-none">
        <div className="flex justify-center gap-6 mb-4 text-xl">
          <a
            href="https://www.linkedin.com/company/fundnexus-org/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/fundnexus_/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
            aria-label="Instagram"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a onClick={getUserLocationData}
            // href="https://youtube.com/@fundnexus?si=ajv08KFlfAcYDc_x"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition"
            aria-label="YouTube"
          >
            <FaYoutube className="w-6 h-6" />
          </a>
        </div>

        <p>FundNexus™ | All rights reserved © 2025</p>
      </footer>
    </div>
  );
};

export default ComingSoon;
