import { motion } from "framer-motion";
import { Lightbulb, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  { icon: Lightbulb, title: "Strategy", desc: "Deep dive into your goals, audience, and competitive landscape." },
  { icon: PenTool, title: "Design", desc: "Wireframes, prototypes, and pixel-perfect visual design." },
  { icon: Code, title: "Development", desc: "Clean, scalable code with rigorous testing and QA." },
  { icon: Rocket, title: "Launch", desc: "Deployment, monitoring, and continuous optimization." },
];

const Process = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-accent mb-3">How We Work</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Our <span className="gradient-text">Process</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting line */}
          <div className="absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary via-secondary to-accent hidden md:block" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center relative"
            >
              <div className="w-20 h-20 rounded-full glass mx-auto flex items-center justify-center mb-6 relative z-10 gradient-border">
                <step.icon size={28} className="text-accent" />
              </div>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Step {i + 1}</span>
              <h3 className="text-xl font-display font-semibold mt-2 mb-2 text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
