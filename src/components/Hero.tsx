import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import logo from "@/assets/algoknights-logo.png";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const lines = [
    "> Welcome to AlgoKnights Portfolio",
    "> Explore our projects, achievements, and team.",
    "> Where strategy meets code.",
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile || currentLine >= lines.length) return;

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
  }, [currentLine, isMobile]);

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
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 overflow-hidden">
      <div className="text-center">
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

        {!isMobile && (
          <div className="bg-card border border-border rounded-lg p-6 md:p-8 mb-8 max-w-2xl mx-auto font-mono text-left animate-fade-in" style={{ animationDelay: "400ms" }}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-destructive"></div>
              <div className="w-3 h-3 rounded-full bg-muted-foreground"></div>
              <div className="w-3 h-3 rounded-full bg-primary"></div>
            </div>
            <div className="text-sm md:text-base text-foreground space-y-2">
              {lines.slice(0, currentLine).map((line, i) => (
                <div key={i}>{line}</div>
              ))}
              <div className="flex">
                {displayText}
                {showCursor && currentLine < lines.length && (
                  <span className="inline-block w-2 h-5 bg-foreground ml-1"></span>
                )}
              </div>
            </div>
          </div>
        )}

        {isMobile && (
          <div className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto space-y-2 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <p>Where strategy meets code.</p>
            <p>Building the future, one algorithm at a time.</p>
          </div>
        )}

        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "600ms" }}>
          A team of passionate undergraduate developers pushing boundaries
        </p>
      </div>

      <button
        onClick={scrollToContent}
        className="absolute bottom-8 animate-bounce hover:text-primary transition-colors opacity-0 animate-fade-in"
        style={{ animationDelay: "800ms" }}
        aria-label="Scroll to content"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
