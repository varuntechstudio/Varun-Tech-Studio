import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center"
        >
          {/* Background glow */}
          <div className="absolute inset-0" style={{ background: "var(--gradient-primary)", opacity: 0.15 }} />
          <div className="absolute inset-0 glass" />

          {/* Animated orb */}
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
            style={{ background: "radial-gradient(circle, hsl(265 90% 65% / 0.3), transparent 70%)" }}
          />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-foreground">
              Ready to <span className="gradient-text">Transform</span> Your Business?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Book a free consultation and discover how we can elevate your digital presence.
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-10 py-4 rounded-xl text-primary-foreground font-semibold btn-glow text-lg"
              style={{ background: "var(--gradient-primary)" }}
            >
              Book Free Consultation
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
