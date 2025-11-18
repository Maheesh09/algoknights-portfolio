import { Award, Trophy, Medal, Target } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Achievements = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const achievements = [
    {
      icon: Trophy,
      title: "Hackathon Champions",
      event: "National Tech Summit 2024",
      description: "First place in cybersecurity challenge",
    },
    {
      icon: Award,
      title: "Best Innovation Award",
      event: "University Innovation Challenge",
      description: "Recognized for AI-powered code analysis tool",
    },
    {
      icon: Medal,
      title: "Top 10 Finish",
      event: "International Coding Competition",
      description: "Competed against 500+ teams worldwide",
    },
    {
      icon: Target,
      title: "Research Publication",
      event: "IEEE Conference 2024",
      description: "Published paper on algorithmic optimization",
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          ref={headerRef}
          className={`transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Competitions & Awards
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            const { ref, isVisible } = useScrollAnimation();
            return (
              <div
                key={index}
                ref={ref}
                className={`bg-card border border-border rounded-lg p-8 hover:border-primary transition-all duration-700 group ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Icon className="w-10 h-10 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-primary font-mono text-sm mb-3">{achievement.event}</p>
                <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
