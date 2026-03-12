import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { name: "Sarah Chen", role: "CEO, TechVault", text: "VarunTechStudio transformed our entire digital presence. Their attention to detail and strategic approach delivered results beyond our expectations." },
  { name: "Marcus Williams", role: "Founder, StreamLine", text: "Working with VarunTechStudio felt like having an elite team embedded in our company. The quality of their work is simply world-class." },
  { name: "Elena Rodriguez", role: "CMO, DataSphere", text: "Our conversion rates increased by 340% after VarunTechStudio redesigned our platform. They truly understand what drives business growth." },
  { name: "James Park", role: "CTO, QuantumLeap", text: "The app they built for us handles millions of users seamlessly. Their technical expertise is unmatched in the industry." },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-accent mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </motion.div>

        <div className="relative glass rounded-3xl p-8 md:p-12">
          <Quote size={48} className="text-primary/20 absolute top-6 left-6" />
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
                "{testimonials[current].text}"
              </p>
              <div>
                <p className="font-display font-semibold text-foreground">{testimonials[current].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button onClick={prev} className="p-2 rounded-full glass hover:bg-muted transition-colors">
              <ChevronLeft size={20} className="text-foreground" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-6 bg-accent" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <button onClick={next} className="p-2 rounded-full glass hover:bg-muted transition-colors">
              <ChevronRight size={20} className="text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
