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
        <footer className="w-full py-12 px-4 bg-background border-t border-border">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Logo and Description */}
                <div className="flex flex-col items-center md:items-start">
                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                    >
                        <img src={logo} alt="AlgoKnights" className="w-10 h-10" />
                        <span className="text-2xl font-bold font-mono">AlgoKnights</span>
                    </button>
                    <p className="text-muted-foreground mt-4 text-center md:text-left">
                        A team of passionate developers building amazing things.
                    </p>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col items-center">
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <button
                                    onClick={() => scrollToSection(item.href)}
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social Media */}
                <div className="flex flex-col items-center md:items-end">
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="flex gap-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button variant="outline" size="icon">
                                    <social.icon className="h-5 w-5" />
                                    <span className="sr-only">{social.label}</span>
                                </Button>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-12 text-center text-sm text-muted-foreground border-t border-border pt-8">
                <p className="font-mono">© {new Date().getFullYear()} AlgoKnights. All rights reserved.</p>
                <p className="mt-2">Built with passion by the AlgoKnights team</p>
            </div>
        </footer>
    );
};

export default Footer;