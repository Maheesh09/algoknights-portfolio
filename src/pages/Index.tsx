import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Team from "@/components/Team";
import Merchandise from "@/components/Merchandise";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Achievements />
      <Team />
      <Merchandise />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
