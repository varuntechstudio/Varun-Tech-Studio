import { motion } from "framer-motion";

const technologies = [
  "React.js",
  "HTML",
  "CSS",
  "Next.js",
  "Hostinger",
  "Razorpay",
  "PhonePe",
  "Tailwind CSS",
];

const TrustedBy = () => {
  return (
    <section className="py-16 border-t border-b border-border/50 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <p className="text-center text-sm text-muted-foreground uppercase tracking-widest">
          Technologies & Platforms We Work With
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <motion.div className="flex gap-16 items-center animate-marquee whitespace-nowrap">
          {[...technologies, ...technologies].map((tech, i) => (
            <span
              key={i}
              className="text-xl font-display font-semibold text-muted-foreground/40 hover:text-muted-foreground transition-colors duration-300 select-none"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;