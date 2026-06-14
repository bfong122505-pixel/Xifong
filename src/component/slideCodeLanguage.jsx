import React from 'react'

function SlideCodeLanguage({ className = "" }) {
  return (
    <div className={`relative w-full overflow-hidden bg-white py-2 m-auto  ${className}`}>
    {/* The main slider track container */}
    <div className="flex w-max animate-slide-infinite mx-3 overflow-hidden">
      
      {/* Track Group 1: Original items */}
      <div className=" flex gap-4 px-2 md:[&>img]:h-20 md:[&>img]:w-20 md:[&>img]:object-contain [&>img]:h-15 [&>img]:w-15 [&>img]:object-contain">
        <img src="  /images/css-3.png" alt="CSS3" className="animate-cycle-ss"/> 
        <img src="  /images/email.png" alt="Email" />
        <img src="  /images/github-sign.png" alt="GitHub" />
        <img src="  /images/React.png" alt="React" />
        <img src="  /images/js.png" alt="JavaScript" />
        <img src="  /images/html-5.png" alt="HTML5" />
        <img src="  /images/Tailwind CSS.png" alt="Tailwind" />
        <img src="  /images/social.png" alt="Social" />
      </div>
      <div className="flex gap-4 px-2 md:[&>img]:h-20 md:[&>img]:w-20 md:[&>img]:object-contain [&>img]:h-15 [&>img]:w-15 [&>img]:object-contain">
        <img src="  /images/css-3.png" alt="CSS3" /> 
        <img src="  /images/email.png" alt="Email" />
        <img src="  /images/github-sign.png" alt="GitHub" />
        <img src="  /images/React.png" alt="React" />
        <img src="  /images/js.png" alt="JavaScript" />
        <img src="  /images/html-5.png" alt="HTML5" />
        <img src="  /images/Tailwind CSS.png" alt="Tailwind" />
        <img src="  /images/social.png" alt="Social" />
      </div>
      <div className="flex gap-4 px-2 md:[&>img]:h-20 md:[&>img]:w-20 md:[&>img]:object-contain [&>img]:h-15 [&>img]:w-15 [&>img]:object-contain">
        <img src="  /images/css-3.png" alt="CSS3" /> 
        <img src="  /images/email.png" alt="Email" />
        <img src="  /images/github-sign.png" alt="GitHub" />
        <img src="  /images/React.png" alt="React" />
        <img src="  /images/js.png" alt="JavaScript" />
        <img src="  /images/html-5.png" alt="HTML5" />
        <img src="  /images/Tailwind CSS.png" alt="Tailwind" />
        <img src="  /images/social.png" alt="Social" />
      </div>
      <div className="flex gap-4 px-2 md:[&>img]:h-20 md:[&>img]:w-20 md:[&>img]:object-contain [&>img]:h-15 [&>img]:w-15 [&>img]:object-contain">
        <img src="  /images/css-3.png" alt="CSS3" /> 
        <img src="  /images/email.png" alt="Email" />
        <img src="  /images/github-sign.png" alt="GitHub" />
        <img src="  /images/React.png" alt="React" />
        <img src="  /images/js.png" alt="JavaScript" />
        <img src="  /images/html-5.png" alt="HTML5" />
        <img src="  /images/Tailwind CSS.png" alt="Tailwind" />
        <img src="  /images/social.png" alt="Social" />
      </div>
    </div>
    </div>
    
  )
}

export default SlideCodeLanguage