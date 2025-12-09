import { Github, Linkedin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useParallax } from "@/hooks/useParallax";
import AnimatedBackground from "@/components/AnimatedBackground";

const Team = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: parallaxRef, offset } = useParallax({ speed: 0.2, direction: "down" });

  const members = [
    { name: "Shageeshan Thamodharam", image: "https://github.com/ShageeshanT.png", github: "https://github.com/ShageeshanT", linkedin: "https://www.linkedin.com/in/shageeshan/" },
    { name: "Maheesha Pramuditha", image: "https://github.com/Maheesh09.png", github: "https://github.com/Maheesh09", linkedin: "https://www.linkedin.com/in/maheeshapramuditha/" },
    { name: "Shajeeve Balakrishnan", image: "/Shajeeve.jpeg", github: "https://github.com/ShajeeveB", linkedin: "https://www.linkedin.com/in/shajeeve-balakrishnan-a43237249/" },
    { name: "Rithish Kaanth", image: "/Rithish.jpeg", github: "#", linkedin: "#" },
    { name: "Gayuth Waidyarathne", image: "/Gayuth.jpeg", github: "#", linkedin: "#" },
    { name: "Gunitha Rathnayake", image: null, github: "#", linkedin: "#" },
    { name: "Virul Methdinu", image: "https://github.com/MrVirul.png", github: "https://github.com/MrVirul", linkedin: "https://www.linkedin.com/in/virul-meemana-4597292a0/" },
    { name: "Achira Pathiraja", image: "/Achira.jpeg", github: "#", linkedin: "#" },
    { name: "Member 9", image: null, github: "#", linkedin: "#" },
    { name: "Member 10", image: null, github: "#", linkedin: "#" },
    { name: "Member 11", image: null, github: "#", linkedin: "#" },
    { name: "Member 12", image: null, github: "#", linkedin: "#" },
  ];

  return (
    <section id="team" className="py-20 px-4 md:px-8 bg-secondary/30 relative overflow-hidden">
      <AnimatedBackground />
      <div
        ref={parallaxRef}
        className="absolute bottom-0 left-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl"
        style={{ transform: `translate(-50%, ${offset}px)` }}
      ></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div
          ref={headerRef}
          className={`transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Our Team</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
        </div>

        {/* Updated Grid: Single column on mobile, strictly 3 columns on tablet/desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((member, index) => {
            const { ref, isVisible } = useScrollAnimation();
            return (
              <div
                key={index}
                ref={ref}
                /* Increased padding (p-8) for a larger footprint */
                className={`bg-card border border-border rounded-xl p-8 hover:border-primary transition-all duration-500 group cursor-pointer hover:scale-105 hover:-translate-y-2 card-glow-hover relative overflow-hidden ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
                  }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative z-10">
                  {/* Larger Image container: w-24 h-24 */}
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-border mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-all duration-500 group-hover:border-primary relative overflow-hidden">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      /* Larger placeholder initials */
                      <span className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-500">
                        {member.name.charAt(0)}
                      </span>
                    )}
                    <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Scaled up text sizing */}
                  <h3 className="text-xl font-bold text-center group-hover:text-primary transition-colors duration-300 leading-tight mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-mono text-sm text-center mb-6 group-hover:scale-105 transition-transform duration-300">
                    Developer
                  </p>

                  {/* Larger social icons */}
                  <div className="flex justify-center gap-6">
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                      aria-label="GitHub"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;