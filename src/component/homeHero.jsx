import React from 'react'
import BlurText from "./BlurText ";
import TextType from './TextType';


 


function HomeHero() {
  return (
    <div id ="home" className=" absolute top-[65px] bottom-0 left-0 right-0 bg-transparent flex md:flex-row z-2 items-center justify-center flex-col-reverse mb-2">
    
    

    {/* Left side: Where the magic happens */}
    <div className="w-full mb-5 md:mb-1 md:w-1/2 flex flex-col justify-center px-6 md:px-16 text-white z-2 items-center md:items-baseline">
        
        {/* Greeting */}
        <span >
           
        </span>
        <BlurText
            text=" Welcome to my portfolio"
            delay={200}
            animateBy="words"
            direction="top"
            
            className="text-purple-400 font-semibold tracking-wide uppercase text-sm mb-2 block"
            />
        {/* Your Name */}
         
        <TextType 
  text={["Hi, I'm Sivfong", " Build modern websites", "Happy coding!"]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor
  cursorCharacter="_"
  texts={["Welcome to React Bits! Good to see you!","Build some amazing experiences!"]}
  deletingSpeed={50}
  variableSpeedEnabled={false}
  variableSpeedMin={60}
  variableSpeedMax={120}
  cursorBlinkDuration={0.5}

  className = "text-2xl md:text-3xl font-bold text-amber-50 mb-3"
/>

        {/* Headline */}
        <h1 className="text-[15px] md:text-5xl font-extrabold tracking-tight mb-4 leading-tight   md:whitespace-normal ">
            Building High Performance  <span className="text-purple-500 shadow-sm">Web Experiences.</span>
        </h1>
 
        
        {/* Sub-headline Description */}
        <p className="text-base md:text-lg text-gray-300 mb-8 max-w-md text-justify">
            I am a web developer passionate about turning complex ideas into clean, fast, and interactive websites.
        </p>

        
        {/* Call to Action Buttons */}
        <div className="flex items-center gap-4">
            <a href="#about" className=" cursor-target px-6 py-3 bg-purple-600 hover:bg-purple-700 font-medium rounded-lg transition duration-300 shadow-lg shadow-purple-600/30 text-center">
            Personality
            </a>
             
            
            
<a href="#contact"
  class=" cursor-target px-6 py-3 overflow-hidden relative w-max p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
>
Contact Me
  <span
    class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
  ></span>
  <span
    class="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
  ></span>
  <span
    class="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"
  ></span>
  <span
    class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
    >Explore!</span>
</a>

        </div>

    </div>

    {/* Right side: Kept empty on big screens so the lightning is fully visible */}
    <div className=" md:flex md:w-1/2 justify-center items-center ">
        <div className="hover-3d relative cursor-target">
        {/* content */}
        <figure className="max-w-100 rounded-2xl">
            <img src=" /images/wmremove-transformed__1_-removebg-preview.png" alt="3D card" />
        </figure>
        {/* 8 empty divs needed for the 3D effect */}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className="w-10 h-10 absolute top-1 right-1 z-20 animate-load-down">
            <img src=" /images/React.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-10 h-10 absolute top-16 cursor-target left-1 z-20 animate-load-down">
            <img src=" /images/js.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-10 h-10 absolute top-25 right-4 z-20 animate-load-down">
            <img src=" /images/Tailwind CSS.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-10 h-10 absolute bottom-5 left-4 z-20 animate-load-down">
            <img src=" /images/social.png" alt="" className="w-full h-full object-cover" />
        </div>
        </div>
        
        
        
    </div>
    

</div>
  )
}

export default HomeHero