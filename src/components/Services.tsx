import { motion } from "framer-motion";
import { Globe, ShoppingCart, Megaphone, Search, Palette, Smartphone } from "lucide-react";

const services = [
  { icon: Globe, title: "Website Development", desc: "Custom-built websites that deliver exceptional user experiences and drive conversions." },
  { icon: ShoppingCart, title: "E-Commerce Solutions", desc: "Scalable online stores with seamless checkout, inventory management, and analytics." },
  { icon: Megaphone, title: "Digital Marketing", desc: "Data-driven campaigns across paid, social, and content channels for maximum ROI." },
  { icon: Search, title: "SEO Optimization", desc: "Strategic search engine optimization to dominate rankings and organic traffic." },
  { icon: Palette, title: "UI/UX Design", desc: "Human-centered design that balances aesthetics with intuitive functionality." },
  { icon: Smartphone, title: "Payment Gateway Integration", desc: "Seamless payment processing solutions for e-commerce and online businesses." },
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-accent mb-3">What We Do</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            End-to-end digital solutions tailored to elevate your brand and accelerate growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass rounded-2xl p-8 glow-hover cursor-default"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                style={{ background: "var(--gradient-primary)" }}
              >
                <service.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
