import AnimatedBackground from "@/components/AnimatedBackground";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useParallax } from "@/hooks/useParallax";

const Merchandise = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: parallaxRef, offset } = useParallax({ speed: 0.2, direction: "up" });

  const items = [
    {
      name: "AlgoKnights Official Jersey",
      frontImage: "/Front.png",
      backImage: "/Back.png",
      description:
        "Premium performance fabric with breathable panels and a tailored fit, designed for long ICPC sessions and late-night coding sprints.",
      details: "Available in multiple sizes • Unisex fit • Limited founding team edition",
    },
  ];

  return (
    <section id="merchandise" className="py-20 px-4 md:px-8 bg-background relative overflow-hidden">
      <AnimatedBackground />
      <div
        ref={parallaxRef}
        className="absolute -top-40 right-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        style={{ transform: `translate(50%, ${offset}px)` }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            AlgoKnights Official Merchandise
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Represent the AlgoKnights squad on and off the contest floor with our official team
            jersey — built for comfort, focus, and style during every problem-solving battle.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-[1.2fr,0.9fr] items-center">
          <div className="flex flex-col gap-4 md:gap-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 md:flex-row md:gap-6"
              >
                <div className="flex w-full flex-col gap-4 md:flex-row">
                  <div className="relative flex-1 overflow-hidden rounded-xl border border-border bg-card/80 backdrop-blur-sm shadow-lg group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <img
                      src={item.frontImage}
                      alt={`${item.name} front`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <span className="absolute bottom-3 left-3 rounded-full bg-background/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground shadow-sm">
                      Front
                    </span>
                  </div>
                  <div className="relative flex-1 overflow-hidden rounded-xl border border-border bg-card/80 backdrop-blur-sm shadow-lg group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <img
                      src={item.backImage}
                      alt={`${item.name} back`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <span className="absolute bottom-3 left-3 rounded-full bg-background/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground shadow-sm">
                      Back
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4 md:space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold">
              Gear up like a competitive programming squad
            </h3>
            <p className="text-muted-foreground">
              This jersey is crafted to keep you comfortable through regionals, mock contests,
              and marathon debugging sessions. Lightweight, breathable, and finished with the
              official AlgoKnights branding on both front and back.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• High-quality print that withstands countless washes and contests</li>
              <li>• Subtle yet bold design that stands out in team photos and on stage</li>
              <li>• Designed with input from the AlgoKnights team for a perfect coder fit</li>
            </ul>
            <p className="text-xs text-muted-foreground/80">
              (For now this is a showcase of our official team merch. Public ordering and size
              charts will be shared once we open limited drops.) 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Merchandise;


