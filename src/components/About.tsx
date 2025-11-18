import { Code2, Shield, Trophy } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation();
  const highlights = [
    {
      icon: Code2,
      title: "Innovation",
      description: "Building cutting-edge solutions with modern technologies",
    },
    {
      icon: Shield,
      title: "Security",
      description: "Prioritizing cybersecurity in every project we create",
    },
    {
      icon: Trophy,
      title: "Excellence",
      description: "Competing and winning in hackathons and coding contests",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          ref={headerRef}
          className={`transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">About Us</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
        </div>
        
        <div
          ref={textRef}
          className={`transition-all duration-700 delay-200 ${
            textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-lg md:text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            AlgoKnights is an elite team of undergraduate students specializing in Software Engineering, 
            Computer Science, Cyber Security, and IT. We combine strategic thinking with technical expertise 
            to develop innovative solutions and compete at the highest levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            const { ref, isVisible } = useScrollAnimation();
            return (
              <div
                key={index}
                ref={ref}
                className={`bg-card border border-border rounded-lg p-8 hover:border-primary transition-all duration-500 group cursor-pointer hover:scale-105 hover:-translate-y-2 card-glow-hover ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative">
                  <Icon className="w-12 h-12 mb-4 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 text-primary" />
                  <div className="absolute inset-0 bg-primary/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
