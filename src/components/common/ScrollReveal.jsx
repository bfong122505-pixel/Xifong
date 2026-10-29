import { useEffect, useRef, useState } from 'react';

export const ScrollReveal = ({ 
  children, 
  duration = "800ms", 
  distance = "40px",
  delay = "0ms",
  className = "w-full"
}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px"
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
        transitionProperty: 'opacity, transform',
        transitionDuration: duration,
        transitionDelay: isVisible ? delay : '0ms',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0px)' : `translateY(${distance})`,
        willChange: 'opacity, transform'
      }}
      className={className}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;

