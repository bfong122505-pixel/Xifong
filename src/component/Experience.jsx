import React from "react";
import GradientWaveText from "./Text";
import { useSnapCarousel } from "react-snap-carousel";
import DepthCarousel from "./DepthCarousel";
function Experience() {
  const { scrollRef, pages, activePageIndex, next, goTo } = useSnapCarousel();
  return (
    <div className="my-2.5">
      <div className="w-full flex justify-center items-center ">
        <GradientWaveText
          text="Experience"
          className="text-3xl md:text-7xl font-black tracking-tighter cursor-target w-max m-auto"
          fromColor="#ff007f"
          viaColor="#7f00ff"
          toColor="#00ffff"
          speed="4s" // Moving slightly faster
        />
      </div>
      <div>
        {/* 1. The Scroll View Track */}
        <ul
          ref={scrollRef}
          style={{
            display: "flex",

            scrollSnapType: "x mandatory",
          }}
        >
          <li
            style={{ flexShrink: 0, width: "100%", scrollSnapAlign: "start" }}
            className="p-4"
          >
            <div className="w-full max-w-7xl mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Visual / Image Container */}
                <div className="  lg:col-span-6 bg-slate-100 dark:bg-slate-800/50 rounded-2xl p-6 flex items-center justify-center gap-4 relative overflow-hidden group">
                  {/* Mobile Image */}
                  <img
                    className="h-[220px] sm:h-[270px] w-auto object-contain drop-shadow-xl transform group-hover:-translate-y-1 transition-transform duration-300"
                    src="/images/iPhone-14-PRO-note-web-app-frontend.onrender.com.png"
                    alt="Note App Mobile Preview"
                  />
                  {/* Desktop Image */}
                  <img
                    className="h-[200px] sm:h-[240px] w-auto object-contain drop-shadow-xl transform group-hover:translate-y-1 transition-transform duration-300 hidden sm:block"
                    src="/images/Macbook-Air-note-web-app-frontend.onrender.com.png"
                    alt="Note App Desktop Preview"
                  />
                </div>

                {/* Details Section */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                        React
                      </span>
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                        Node.js & Express
                      </span>
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">
                        MongoDB
                      </span>
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">
                        Cloudinary
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                      Full-Stack Note App
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                      A responsive, secure note-taking application featuring
                      user authentication, custom category and priority
                      filtering, full text search, and cloud image attachments.
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex items-center gap-4">
                    <a
                      href="https://note-web-app-frontend.onrender.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-all shadow-md shadow-blue-500/20 active:scale-95"
                    >
                      Live Demo
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            style={{ flexShrink: 0, width: "100%", scrollSnapAlign: "start" }}
          >
            Slide 2
          </li>
          <li
            style={{ flexShrink: 0, width: "100%", scrollSnapAlign: "start" }}
          >
            Slide 3
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
