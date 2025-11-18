import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Projects = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const projects = [
    {
      title: "AI-Powered Code Analyzer",
      description: "Machine learning tool for detecting code vulnerabilities and suggesting optimizations",
      tags: ["Python", "TensorFlow", "React"],
      featured: true,
    },
    {
      title: "SecureVault",
      description: "End-to-end encrypted file storage system with blockchain verification",
      tags: ["Node.js", "Blockchain", "Cryptography"],
      featured: true,
    },
    {
      title: "AlgoVisualizer",
      description: "Interactive platform for visualizing data structures and algorithms in real-time",
      tags: ["TypeScript", "React", "D3.js"],
      featured: false,
    },
    {
      title: "DevOps Dashboard",
      description: "Comprehensive monitoring and deployment automation tool for cloud infrastructure",
      tags: ["Go", "Docker", "Kubernetes"],
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div
          ref={headerRef}
          className={`transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Our Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const { ref, isVisible } = useScrollAnimation();
            return (
              <div
                key={index}
                ref={ref}
                className={`bg-card border border-border rounded-lg p-8 hover:border-primary transition-all duration-700 group ${
                  project.featured ? "md:col-span-1" : ""
                } ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-secondary border border-border rounded-full text-sm font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="group/btn">
                  <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                  Code
                </Button>
                <Button variant="outline" size="sm" className="group/btn">
                  <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                  Demo
                </Button>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
