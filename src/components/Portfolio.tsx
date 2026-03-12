import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Real Estate Website",
    category: "Landing Page",
    description: "Real estate premium website with property listings, search, and contact forms.",
    image: "/Images/KKE.png",
    liveDemo: "https://kke-luxury-living1.vercel.app/",
    color: "from-primary to-secondary",
  },
  {
    title: "Restaurant Website",
    category: "Website",
    description: "Classic restaurant website with menu, reservation system, and contact info.",
    image: "/Images/yadav.png",
    liveDemo: "https://yadav-restaurant1.vercel.app/",
    color: "from-accent to-primary",
  },
  {
    title: "E-Commerce Store",
    category: "Website",
    description: "An online shopping website with cart, checkout, and admin panel.",
    image: "/Images/shopkart.png",
    liveDemo: "https://shop-kart-psi.vercel.app/",
    color: "from-secondary to-accent",
  },
  {
    title: "Real Estate Website",
    category: "Premium Website",
    description: "Real estate premium Website with property listings, search, and contact forms.",
    image: "/Images/LuX.png",
    liveDemo: "https://lux-estate-seven.vercel.app/",
    color: "from-primary to-secondary",
  },
  {
    title: "Restaurant Website",
    category: "Website",
    description: "Modern restaurant website with reservation system.",
    image: "/Images/balaji.png",
    liveDemo: "https://balaji-restaurant.vercel.app/",
    color: "from-accent to-primary",
  },
  {
    title: "Gym Website",
    category: "Modern Website",
    description: "Modern gym website with class schedules and membership options.",
    image: "/Images/gym.png",
    liveDemo: "https://yes-fitness-time.vercel.app/",
    color: "from-accent to-primary",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-accent mb-3">
            Our Work
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-card border border-white/10 shadow-lg"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-30`} />
              </div>

              <div className="p-6">
                <span className="text-xs uppercase tracking-wider text-accent">
                  {project.category}
                </span>

                <h3 className="text-xl font-display font-semibold text-foreground mt-2">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mt-3 mb-5">
                  {project.description}
                </p>

                <div className="flex gap-3 flex-wrap">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:opacity-90 transition"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;