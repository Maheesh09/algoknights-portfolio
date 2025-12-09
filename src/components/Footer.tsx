import { Github, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/algoknights-logo.png";
import { Button } from "@/components/ui/button";

const Footer = () => {
    const navItems = [
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Achievements", href: "#achievements" },
        { label: "Team", href: "#team" },
        { label: "Contact", href: "#contact" },
    ];

    const socialLinks = [
        {
            label: "Github",
            icon: Github,
            href: "https://github.com/AlgoKnights",
        },
        {
            label: "LinkedIn",
            icon: Linkedin,
            href: "https://www.linkedin.com/company/algoknights",
        },
        {
            label: "Twitter",
            icon: Twitter,
            href: "https://twitter.com/AlgoKnights",
        },
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        // Increased horizontal padding (sm:px-6) and vertical padding (py-10) for a better feel
        <footer className="w-full py-10 sm:py-12 px-4 sm:px-6 bg-background border-t border-border">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-y-0 md:gap-x-12 lg:gap-x-16">

                {/* 1. Logo and Description */}
                {/* Alignment: Always center on mobile, left-align on tablet/desktop */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <button
                        onClick={scrollToTop}
                        className="flex items-center justify-center md:justify-start gap-3 hover:opacity-80 transition-opacity"
                    >
                        <img src={logo} alt="AlgoKnights" className="w-8 h-8 sm:w-10 sm:h-10" />
                        {/* Adjusted font size for better responsiveness */}
                        <span className="text-xl sm:text-2xl font-bold font-mono">AlgoKnights</span>
                    </button>
                    <p className="text-muted-foreground mt-3 sm:mt-4 text-sm max-w-xs mx-auto md:mx-0">
                        A team of passionate developers building amazing things.
                    </p>
                </div>

                {/* 2. Navigation Links */}
                {/* Alignment: Always center column content regardless of screen size */}
                <div className="flex flex-col items-center">
                    <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
                    <ul className="space-y-2">
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <button
                                    onClick={() => scrollToSection(item.href)}
                                    // Increased contrast and hover effect
                                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 3. Social Media - MODIFIED */}
                {/* Alignment: Center on mobile, RIGHT-ALIGN on desktop (md:items-end) */}
                <div className="flex flex-col items-center **md:items-end**">
                    {/* The inner div should remain simple, as the outer div controls the alignment */}
                    <div className="flex flex-col items-center **md:items-end**">
                        <h3 className="text-lg font-semibold mb-4 text-foreground">Follow Us</h3>
                        <div className="flex gap-3 sm:gap-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button variant="outline" size="sm" className="w-9 h-9">
                                            <Icon className="h-4 w-4" />
                                            <span className="sr-only">{social.label}</span>
                                        </Button>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="md:col-span-3 mt-10 md:mt-12 text-center text-xs sm:text-sm text-muted-foreground border-t border-border pt-6 sm:pt-8">
                    <p className="font-mono">© {new Date().getFullYear()} AlgoKnights. All rights reserved.</p>
                    <p className="mt-1 sm:mt-2 opacity-80">Built with passion by the AlgoKnights team</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;