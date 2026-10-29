import { useState } from "react";
import { navigationData } from "../../data/navigation";

export const Header = ({ className = "" }) => {
  const [open, setOpen] = useState(false);
  const { brand, navLinks } = navigationData;

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <nav className={`border-b border-neutral-800/80 backdrop-blur-md text-white fixed top-0 right-0 left-0 z-[100] ${className}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <a href="#home" className="text-xl font-bold cursor-target tracking-wider">
          {brand}
        </a>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href} className="cursor-pointer hover:text-rose-500 transition-colors">
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="relative flex h-6 w-6 flex-col justify-center md:hidden cursor-target"
          aria-label="Toggle navigation menu"
        >
          <span
            className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${
              open ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${
              open ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden z-50 ${
          open ? "max-h-60" : "max-h-0"
        }`}
      >
        <ul className="space-y-4 backdrop-blur-md bg-[#120F17]/90 px-4 py-4 z-50 border-t border-neutral-800">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="cursor-pointer hover:text-rose-500 transition-colors"
              onClick={handleLinkClick}
            >
              <a href={link.href} className="block w-full">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;

