export const ProjectCard = ({ project }) => {
  const { title, description, tags, liveUrl, previewImages } = project;

  return (
    <div className="max-w-7xl mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 mb-6 last:mb-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Visual / Image Container */}
        <div className="lg:col-span-6 bg-slate-100 dark:bg-slate-800/50 rounded-2xl p-6 flex items-center justify-center gap-4 relative overflow-hidden group">
          {/* Mobile Image */}
          <img
            className="h-[220px] sm:h-[270px] w-auto object-contain drop-shadow-xl transform group-hover:-translate-y-1 transition-transform duration-300"
            src={previewImages.mobile.src}
            alt={previewImages.mobile.alt}
          />
          {/* Desktop Image */}
          <img
            className="h-[200px] sm:h-[240px] w-auto object-contain drop-shadow-xl transform group-hover:translate-y-1 transition-transform duration-300 hidden sm:block"
            src={previewImages.desktop.src}
            alt={previewImages.desktop.alt}
          />
        </div>

        {/* Details Section */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
          <div>
            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1 text-xs font-semibold rounded-full ${tag.badgeClass}`}
                >
                  {tag.name}
                </span>
              ))}
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              {title}
            </h3>

            {/* Description */}
            <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex items-center gap-4">
            <a
              href={liveUrl}
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
  );
};

export default ProjectCard;

