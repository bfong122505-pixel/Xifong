import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ 
  children, 
  duration = "800ms", 
  distance = "40px", // How far down the element starts before sliding up
  delay = "0ms" 
}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Fade & slide up
        } else {
          setIsVisible(false); // Reset when it leaves the screen
        }
      },
      {
        threshold: 0.1, // Triggers as soon as 10% of the element enters the screen
        rootMargin: "0px 0px -40px 0px" // Triggers slightly before hitting the viewport line
      }
    );

    observer.observe(currentElement);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      style={{
        // Smooth hardware-accelerated transitions
        transitionProperty: 'opacity, transform',
        transitionDuration: duration,
        transitionDelay: isVisible ? delay : '0ms', // Instant reset when leaving screen
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        // Dynamic animation values based on state
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0px)' : `translateY(${distance})`,
        willChange: 'opacity, transform'
      }}
      className="w-full"
    >
      {children}
    </div>
  );
}