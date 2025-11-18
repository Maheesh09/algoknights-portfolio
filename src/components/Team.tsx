import { Github, Linkedin, Mail } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Team = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const members = [
    {
      name: "Shageeshan Thamodharam",
      role: "Software Engineer",
      specialty: "Full-Stack Development",
    },
    {
      name: "Maheesha Pramuditha",
      role: "Computer Scientist",
      specialty: "Machine Learning",
    },
    {
      name: "Shajeeve Balakrishnan",
      role: "Cyber Security Specialist",
      specialty: "Network Security",
    },
    {
      name: "Rithish Kaanth",
      role: "Software Engineer",
      specialty: "Cloud Architecture",
    },
    {
      name: "Gayuth Waidyarathne",
      role: "IT Specialist",
      specialty: "DevOps & Infrastructure",
    },
    {
      name: "Gunitha Rathnayake",
      role: "Computer Scientist",
      specialty: "Algorithms & Data Structures",
    },
  ];

  return (
    <section id="team" className="py-20 px-4 md:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div
          ref={headerRef}
          className={`transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Our Team</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, index) => {
            const { ref, isVisible } = useScrollAnimation();
            return (
              <div
                key={index}
                ref={ref}
                className={`bg-card border border-border rounded-lg p-8 hover:border-primary transition-all duration-500 group cursor-pointer hover:scale-105 hover:-translate-y-3 card-glow-hover relative overflow-hidden ${
                  isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-border mx-auto mb-6 flex items-center justify-center group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 group-hover:border-primary relative">
                  <span className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-500">
                    {member.name.charAt(0)}
                  </span>
                  <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <h3 className="text-xl font-bold text-center mb-2 group-hover:text-primary transition-colors duration-300">{member.name}</h3>
                <p className="text-primary font-mono text-sm text-center mb-2 group-hover:scale-105 transition-transform duration-300">{member.role}</p>
                <p className="text-muted-foreground text-sm text-center mb-6 group-hover:text-foreground/80 transition-colors duration-300">{member.specialty}</p>

                <div className="flex justify-center gap-4">
                  <a
                    href="#"
                    className="hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
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
