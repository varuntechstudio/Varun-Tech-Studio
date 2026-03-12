import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 30, suffix: "+", label: "Projects Delivered" },
  { value: 19, suffix: "+", label: "Happy Clients" },
  { value: 2, suffix: "+", label: "Years Experience" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm uppercase tracking-widest text-accent mb-3">About Us</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              We Build <span className="gradient-text">Digital Futures</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              VarunTechStudio is a modern digital studio focused on building professional websites, web applications, and custom online solutions for startups, businesses, and personal brands.

We combine creative design, clean development, and practical strategy to deliver fast, user-friendly, and business-focused digital products that help our clients grow with confidence.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our multidisciplinary team of designers, developers, and strategists combines creativity
              with technical excellence to craft products that stand out in the digital landscape.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-3 gap-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="glass rounded-2xl p-6 text-center glow-hover">
                <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
