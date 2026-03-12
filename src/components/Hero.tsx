import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, hsl(265 90% 65%), transparent 70%)" }}
        />
        <motion.div
          animate={{ x: [0, -80, 0], y: [0, 60, 0], scale: [1.1, 0.9, 1.1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, hsl(220 70% 55%), transparent 70%)" }}
        />
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, -80, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 right-1/3 w-[400px] h-[400px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, hsl(185 80% 55%), transparent 70%)" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(210 40% 96%) 1px, transparent 1px), linear-gradient(90deg, hsl(210 40% 96%) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Premium Digital Agency
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
        >
          Helping Businesses Grow with{" "}
          <span className="gradient-text">Modern Digital Solutions</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          We design and develop modern websites, web apps, and digital solutions that help businesses build trust, attract customers, and grow online.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-primary-foreground font-semibold btn-glow transition-all"
            style={{ background: "var(--gradient-primary)" }}
          >
            Start Your Project
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold glass glow-hover text-foreground"
          >
            <Play size={18} />
            View Our Work
          </a>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-10 top-1/3 w-20 h-20 rounded-2xl glass rotate-12 hidden lg:block"
        />
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -right-5 top-1/2 w-16 h-16 rounded-full gradient-border hidden lg:block"
          style={{ background: "hsl(230 25% 11% / 0.5)" }}
        />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
