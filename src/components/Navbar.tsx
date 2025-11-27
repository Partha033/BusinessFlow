// src/components/Navbar.tsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon } from "lucide-react";

const logoSrc = "/mnt/data/56bfc5b6-6647-4928-a57b-859b90733b31.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/how-we-work", label: "How We Work" },
  // { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  // Smooth hide on scroll
  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 80) {
        setHidden(true); // hide
      } else {
        setHidden(false); // show
      }

      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 w-full flex justify-center z-[999]
        transition-all duration-500 
        ${hidden ? "-translate-y-20 opacity-0" : "translate-y-0 opacity-100"}
      `}
    >
      <nav className="w-full max-w-7xl px-4 mt-4">
        <div
          className="
            mx-auto rounded-full bg-white/80 backdrop-blur-xl
            border border-white/70 
            shadow-[0_12px_40px_rgba(20,20,40,0.08)]
            px-6 py-3 flex items-center justify-between
          "
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <div className="w-11 h-11 rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-pink-50 to-rose-50 ring-1 ring-white/40">
              <img src={logoSrc} className="w-7 h-7 object-contain" draggable={false} />
            </div>
            <span className="text-lg font-semibold text-[#007b78] tracking-wide">
              BusinessFlow
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`
                  px-3 py-1 rounded-full text-sm font-medium transition
                  ${
                    isActive(l.to)
                      ? "bg-white/90 text-[#007b78] ring-1 ring-rose-100 shadow"
                      : "text-slate-700 hover:text-[#007b78] hover:bg-white/40"
                  }
                `}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-3">
            {/* Theme Button (as in reference) */}
            {/* <button
              className="hidden md:flex w-10 h-10 rounded-full bg-white ring-1 ring-rose-100 items-center justify-center"
            >
              <Moon className="w-5 h-5 text-rose-500" />
            </button> */}

            {/* Mobile menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-full text-slate-700 hover:bg-white/30"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-3 bg-white/90 backdrop-blur-md rounded-xl py-3 px-4 shadow border border-white/60">
            <div className="flex flex-col gap-2">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setIsOpen(false)}
                  className={`
                    px-3 py-2 rounded-md text-sm
                    ${
                      isActive(l.to)
                        ? "text-rose-600 font-medium"
                        : "text-slate-700 hover:text-rose-600"
                    }
                  `}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
