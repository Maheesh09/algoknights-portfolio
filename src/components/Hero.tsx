import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import logo from "@/assets/algoknights-logo.png";
import AnimatedBackground from "@/components/AnimatedBackground";
import { useParallax } from "@/hooks/useParallax";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const { ref: parallaxRef1, offset: offset1 } = useParallax({ speed: 0.3 });
  const { ref: parallaxRef2, offset: offset2 } = useParallax({ speed: 0.5, direction: "down" });
  const { ref: contentRef, offset: contentOffset } = useParallax({ speed: 0.15 });

  const lines = [
    "> Welcome to AlgoKnights Portfolio",
    "> Explore our projects, achievements, and team.",
    "> Where strategy meets code.",
  ];

  useEffect(() => {
    if (currentLine >= lines.length) return;

    const currentText = lines[currentLine];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex <= currentText.length) {
        setDisplayText(currentText.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          if (currentLine < lines.length - 1) {
            setCurrentLine(currentLine + 1);
            setDisplayText("");
          }
        }, 500);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [currentLine]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const scrollToContent = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-2 overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Gradient Orbs with Parallax */}
      <div
        ref={parallaxRef1}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"
        style={{ transform: `translateY(${offset1}px)` }}
      ></div>
      <div
        ref={parallaxRef2}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"
        style={{
          animationDelay: "1s",
          transform: `translateY(${offset2}px)`
        }}
      ></div>

      <div
        ref={contentRef}
        className="text-center relative z-10 mt-16"
        style={{ transform: `translateY(${contentOffset}px)` }}
      >
        <div className="animate-fade-in">
          <img
            src={logo}
            alt="AlgoKnights Logo"
            className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight animate-fade-in" style={{ animationDelay: "200ms" }}>
          AlgoKnights
        </h1>

        <div className="bg-card border border-border rounded-lg p-4 md:p-6 lg:p-8 mb-8 max-w-2xl mx-auto font-mono text-left animate-fade-in" style={{ animationDelay: "400ms" }}>
          <div className="flex items-center gap-1.5 md:gap-2 mb-3 md:mb-4">
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-destructive"></div>
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-muted-foreground"></div>
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-primary"></div>
          </div>
          <div className="text-xs sm:text-sm md:text-base text-foreground space-y-1 md:space-y-2">
            {lines.slice(0, currentLine).map((line, i) => (
              <div key={i} className="break-words">{line}</div>
            ))}
            <div className="flex break-words">
              {displayText}
              {showCursor && currentLine < lines.length && (
                <span className="inline-block w-1.5 h-4 md:w-2 md:h-5 bg-foreground ml-1"></span>
              )}
            </div>
          </div>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "600ms" }}>
          A team of passionate undergraduate developers pushing boundaries
        </p>
      </div>

      <button
        onClick={scrollToContent}
        className="absolute bottom-8 animate-bounce hover:text-primary transition-colors opacity-0 animate-fade-in z-10"
        style={{ animationDelay: "800ms" }}
        aria-label="Scroll to content"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
