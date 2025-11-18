import { useEffect, useRef, useState } from "react";

interface ParallaxOptions {
  speed?: number;
  direction?: "up" | "down";
}

export const useParallax = ({ speed = 0.5, direction = "up" }: ParallaxOptions = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const scrollProgress = window.scrollY;
      const elementTop = rect.top + scrollProgress;
      const windowHeight = window.innerHeight;

      // Calculate parallax offset based on scroll position
      if (rect.top < windowHeight && rect.bottom > 0) {
        const distance = scrollProgress - elementTop + windowHeight;
        const movement = distance * speed;
        setOffset(direction === "up" ? -movement : movement);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [speed, direction]);

  return { ref, offset };
};
