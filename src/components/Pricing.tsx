import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "₹2,999",
    desc: "Perfect for startups and small businesses",
    features: ["5-page responsive website", "Basic SEO setup", "Mobile optimization", "Contact form integration", "1 month support"],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "₹7,999",
    desc: "For growing businesses ready to scale",
    features: ["15-page custom website", "Advanced SEO & analytics", "E-commerce integration", "Custom animations", "CMS integration", "3 months support"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Full-scale digital transformation",
    features: ["Unlimited pages", "Full-stack development", "AI/ML integration", "Dedicated team", "24/7 priority support", "Ongoing maintenance"],
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-accent mb-3">Pricing</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Investment <span className="gradient-text">Plans</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`rounded-2xl p-8 relative ${
                tier.highlighted
                  ? "gradient-border glass-strong scale-105"
                  : "glass"
              } glow-hover`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold text-primary-foreground"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-display font-semibold text-foreground">{tier.name}</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-4">{tier.desc}</p>
              <div className="text-4xl font-display font-bold gradient-text mb-6">{tier.price}</div>
              <ul className="space-y-3 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check size={16} className="text-accent flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center py-3 rounded-xl font-semibold transition-all ${
                  tier.highlighted
                    ? "text-primary-foreground btn-glow"
                    : "glass text-foreground hover:bg-muted"
                }`}
                style={tier.highlighted ? { background: "var(--gradient-primary)" } : undefined}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
