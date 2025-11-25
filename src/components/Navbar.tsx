// src/components/Navbar.tsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Github, Moon } from "lucide-react";

const logoSrc = "/mnt/data/56bfc5b6-6647-4928-a57b-859b90733b31.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/how-we-work", label: "How We Work" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-full flex justify-center pointer-events-auto -z-50">
      <nav
        aria-label="Primary navigation"
        className="w-full max-w-6xl mx-4 lg:mx-0"
      >
        {/* Pill container */}
        <div
          className="mx-auto rounded-full bg-white/72 backdrop-blur-md border border-white/60 shadow-[0_12px_40px_rgba(20,20,40,0.08)]
                      px-4 sm:px-5 md:px-6 py-2 flex items-center gap-4"
          role="navigation"
        >
          {/* Left: Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 shrink-0 no-underline"
            aria-label="BusinessFlow home"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-pink-50 to-teal-50 ring-1 ring-white/40">
              <img
                src={logoSrc}
                alt="BusinessFlow logo"
                className="w-8 h-8 object-contain"
                draggable={false}
              />
            </div>
            <span className="hidden sm:inline text-lg font-semibold text-slate-800">
              BusinessFlow
            </span>
          </Link>

          {/* Center: Links (desktop) */}
          <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors inline-block
                  ${isActive(l.to)
                    ? "bg-white/90 ring-1 ring-slate-100 text-teal-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]"
                    : "text-slate-700 hover:text-teal-600 hover:bg-white/40"}
                `}
                aria-current={isActive(l.to) ? "page" : undefined}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right: actions */}
          <div className="flex items-center gap-3 ">
            {/* Github glossy pill */}
            {/* <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-b from-rose-500 to-rose-600 text-white text-sm font-medium shadow-[0_8px_20px_rgba(220,38,38,0.14)] hover:scale-[1.02] transition-transform"
            >
              <Github className="w-4 h-4" />
              Github
            </a> */}

            {/* Theme toggle */}
            {/* <button
              type="button"
              aria-label="Toggle theme"
              className="w-10 h-10 rounded-full bg-white ring-1 ring-white/60 flex items-center justify-center drop-shadow-sm hover:scale-105 transition"
            >
              <Moon className="w-5 h-5 text-rose-500" />
            </button> */}

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 rounded-full text-slate-700 hover:bg-white/30 transition"
              onClick={() => setIsOpen((s) => !s)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {isOpen && (
          <div className="md:hidden mt-3 bg-white/84 backdrop-blur-sm rounded-xl py-3 px-4 shadow-md border border-white/60">
            <div className="flex flex-col gap-2 ">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors 
                    ${isActive(l.to) ? "text-teal-600" : "text-slate-700 hover:text-teal-600"}`}
                >
                  {l.label}
                </Link>
              ))}
            </div>

            <div className="mt-3 flex gap-2 ">
              {/* <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-rose-500 text-white text-sm font-medium"
              >
                <Github className="w-4 h-4" />
                Github
              </a> */}
              {/* <button
                className="w-10 h-10 rounded-full bg-white ring-1 ring-white/60 flex items-center justify-center"
                aria-label="Toggle theme"
                onClick={() => {}}
              >
                <Moon className="w-5 h-5 text-rose-500" />
              </button> */}
            </div>
            
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
