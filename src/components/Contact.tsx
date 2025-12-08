import { useState } from "react";
import { Github, Linkedin, Mail, Twitter, Send, Youtube, X, Instagram } from "lucide-react";
import logo from "@/assets/algoknights-logo.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

 const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/algoknights" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: X, label: "X (Twitter)", href: "#" }, 
  { icon: Mail, label: "Email", href: "mailto:contact@algoknights.dev" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/algoknights" },
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@algoknights-sliit" },
];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res) => res.json());

      if (res.success) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  // Reusable styling for consistent dark inputs with white typing
  const inputStyles = "w-full px-4 py-3 rounded-lg bg-zinc-950 text-white border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground/40";

  return (
    <section id="contact" className="py-20 px-4 md:px-8 border-t border-border bg-background">
      <div className="max-w-4xl mx-auto">
        <div
          ref={sectionRef}
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <img
            src={logo}
            alt="AlgoKnights Logo"
            className="w-16 h-16 mx-auto mb-6 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-500 cursor-pointer"
          />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in collaboration? Send us a message or connect via social channels.
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-16">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                className="group relative"
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary transition-all duration-300 bg-card">
                  <Icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                </div>
              </a>
            );
          })}
        </div>

        <div className="bg-card/50 border border-border p-8 rounded-2xl shadow-2xl backdrop-blur-sm max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/90 ml-1">
                  Full Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your full name"
                  className={inputStyles}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/90 ml-1">
                  Email Address <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className={inputStyles}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/90 ml-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  className={inputStyles}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/90 ml-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="What's this about?"
                  className={inputStyles}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white/90 ml-1">
                Message <span className="text-primary">*</span>
              </label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="How can we help you?"
                className={`${inputStyles} resize-none`}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send className={`w-4 h-4 ${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1 group-hover:-translate-y-1'} transition-transform`} />
            </button>

            {status === "success" && (
              <p className="text-emerald-400 text-center text-sm font-medium animate-in fade-in slide-in-from-top-2">
                Message sent successfully! We'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-rose-400 text-center text-sm font-medium">
                Something went wrong. Please check your connection and try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;