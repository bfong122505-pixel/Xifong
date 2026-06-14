import React from 'react'
import { useState, useEffect } from "react"

function Header({ className = "" }) {

  const [open, setOpen] = useState(false);

  return (
  <>
    <nav className={`border-b  backdrop-blur-md text-white fixed top-0 right-0 left-0 z-100 ${className}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <h1 className="text-xl font-bold cursor-target">FONG</h1>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 md:flex">
          <li className="cursor-pointer hover:text-rose-500">
            <a href="#home">Home</a>
          </li>
          <li className="cursor-pointer hover:text-rose-500">
            <a href="#about">About</a>
          </li>
          <li className="cursor-pointer hover:text-rose-500">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="relative flex h-6 w-6 flex-col justify-center md:hidden cursor-target"
        >
          <span
            className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${
              open ? "rotate-45" : "-translate-y-2"
            }`}
          ></span>

          <span
            className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          ></span>

          <span
            className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${
              open ? "-rotate-45" : "translate-y-2"
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden z-50 ${
          open ? "max-h-60" : "max-h-0"
        }`}
      >
        <ul className="space-y-4 backdrop-blur-md px-4 py-4 z-50">
          <li
            className="cursor-pointer hover:text-rose-500 "
            onClick={() => setOpen(false)}
          >
            <a href="#home" className="block w-full">Home</a>
          </li>
          <li
            className="cursor-pointer hover:text-rose-500"
            onClick={() => setOpen(false)}
          >
            <a href="#about" className="block w-full">About</a>
          </li>
            
          <li
            className="cursor-pointer hover:text-rose-500"
            onClick={() => setOpen(false)}
          >
            <a href="#contact" className="block w-full">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  
    
  </>
  )
}

export default Header