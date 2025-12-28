import React, { useState } from 'react';
import { User, HelpCircle, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

// --- GSAP IMPORTS ---
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // --- GSAP ANIMATION ---
  // This animates the Navbar sliding down from the top on load
  useGSAP(() => {
    gsap.fromTo("nav", 
      { y: "-100%" }, 
      { y: 0, duration: 0.5, ease: "power2.out" }
    );
  });

  const isActive = (path) => location.pathname === path;

  // --- HELPER COMPONENT ---
  const NavItem = ({ to, label }) => {
    const active = isActive(to);
    return (
      <Link 
        to={to} 
        className="relative group flex flex-col items-center justify-center text-sm font-medium text-gray-400 hover:text-white transition-colors py-1"
      >
        <span className={active ? 'text-white font-bold' : ''}>{label}</span>
        <span 
          className={`absolute bottom-0 left-0 w-full h-[2px] bg-teal-400 origin-center transition-transform duration-300 ease-out
            ${active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
          `}
        ></span>
      </Link>
    );
  };

  return (
      <>
          {/* Increased py-4 to py-6 and px sizes */}
          <nav className="fixed top-0 z-50 flex bg-[#191A1B] items-center justify-between w-full py-6 px-6 md:px-20 lg:px-32 xl:px-44 backdrop-blur border-b text-white border-slate-800 min-h-20">
              <Link to={'/'} className="flex items-center gap-4">
                  {/* Increased logo height from h-8 to h-10 */}
                  <img src='logo.png' alt="VisionCast Logo" className="h-8 sm:h-10 w-auto object-contain" />
                  <span className="text-[#FEFFFF] font-bold tracking-tight text-xl sm:text-2xl">
                      VISIONCAST
                  </span>
              </Link>

              {/* Increased text size to text-lg and gap to 12 */}
              <div className="hidden md:flex items-center gap-12 transition duration-500">
                  {['Home', 'Upload Video', 'My Library', 'How it works'].map((item) => (
                      <Link 
                          key={item}
                          to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/ /g, '')}`} 
                          className="relative group py-2 text-lg text-gray-300 hover:text-white transition-colors"
                      >
                          {item}
                          <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>
                      </Link>
                  ))}
              </div>

              <div className="flex items-center gap-4">
                  {/* Bigger button padding and text */}
                  <button onClick={() => navigate('/auth/signin')} className="px-8 py-2.5 text-lg bg-primary active:scale-95 hover:bg-primary/80 transition rounded-lg font-medium">
                      Get started
                  </button>
              </div>

              <button className="md:hidden active:scale-90 transition" onClick={() => setMenuOpen(true)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
              </button>
          </nav>
          {/* ... Mobile Menu Logic stays the same ... */}
      </>
  );
};

export default Navbar;