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
    // Use the X icon, but keep the Twitter label for clarity in aria-label
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
    // Adjusted padding for smaller screens (sm:py-16) and larger containers
    <section id="contact" className="py-16 sm:py-20 px-4 md:px-8 border-t border-border bg-background">
      <div className="max-w-5xl mx-auto"> 
        <div
          ref={sectionRef}
          // Added better animation class for the title section
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <img
            src={logo}
            alt="AlgoKnights Logo"
            className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-6 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-500 cursor-pointer"
          />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in collaboration? Send us a message or connect via social channels.
          </p>
        </div>

        {/* Social Links: Now uses flex-wrap for better mobile stacking */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12 md:mb-16 max-w-xl mx-auto">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                className="group relative flex-shrink-0" // flex-shrink-0 prevents icons from getting squished
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Adjusted size for better feel: w-10/h-10 on small screens, w-12/h-12 on medium */}
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-border flex items-center justify-center hover:border-primary transition-all duration-300 bg-card">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-primary transition-colors" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Form Container: Increased padding for a cleaner look on larger screens */}
        <div className="bg-card/50 border border-border p-6 sm:p-8 lg:p-10 rounded-2xl shadow-2xl backdrop-blur-sm max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
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
              // Adjusted button padding for better responsiveness
              className="w-full py-3.5 sm:py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className={`w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform`} />
                </>
              )}
            </button>

            {/* Status messages are already responsive */}
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