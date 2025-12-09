import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/algoknights-logo.png";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "h-16 bg-[#0B0B0C]/80 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "h-20 bg-[#121212]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-4 hover:opacity-80 transition-opacity"
            >
              <img src={logo} alt="AlgoKnights" className="w-10 h-10" />
              <span className="text-2xl font-bold font-mono hidden sm:block text-white tracking-tight">
                AlgoKnights
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="px-5 py-2 text-base font-semibold text-white/80 hover:text-white transition-colors relative group tracking-wide"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-white/80 group-hover:h500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 border-b border-white/10" : "max-h-0"
          }`}
        >
          <div className="px-4 py-4 space-y-2 bg-[#0B0B0C] border-t border-white/5">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-4 text-base font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from being hidden under navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;