import { Code2, Shield, Trophy } from "lucide-react";

const About = () => {
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
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">About Us</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
        
        <p className="text-lg md:text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16 leading-relaxed">
          AlgoKnights is an elite team of undergraduate students specializing in Software Engineering, 
          Computer Science, Cyber Security, and IT. We combine strategic thinking with technical expertise 
          to develop innovative solutions and compete at the highest levels.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-all duration-300 group"
              >
                <Icon className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
