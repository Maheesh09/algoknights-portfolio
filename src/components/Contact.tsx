import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import logo from "@/assets/algoknights-logo.png";

const Contact = () => {
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "#",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "#",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:contact@algoknights.dev",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 md:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <img
            src={logo}
            alt="AlgoKnights Logo"
            className="w-16 h-16 mx-auto mb-6 opacity-80"
          />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in collaboration or want to learn more about our work? 
            Connect with us through our social channels.
          </p>
        </div>

        <div className="flex justify-center gap-8 mb-12">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                className="group"
                aria-label={link.label}
              >
                <div className="w-14 h-14 rounded-full border border-border flex items-center justify-center hover:border-primary hover:scale-110 transition-all duration-300">
                  <Icon className="w-6 h-6 group-hover:text-primary transition-colors" />
                </div>
              </a>
            );
          })}
        </div>

        <div className="text-center text-sm text-muted-foreground border-t border-border pt-8">
          <p className="font-mono">© 2024 AlgoKnights. All rights reserved.</p>
          <p className="mt-2">Built with passion by the AlgoKnights team</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
