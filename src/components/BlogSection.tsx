import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";

const posts = [
  { title: "The Future of AI in Web Development", category: "Technology", date: "Mar 5, 2026", color: "from-primary to-secondary" },
  { title: "Why Your Business Needs a Mobile App in 2026", category: "Strategy", date: "Feb 28, 2026", color: "from-secondary to-accent" },
  { title: "10 UX Trends Reshaping Digital Products", category: "Design", date: "Feb 20, 2026", color: "from-accent to-primary" },
];

const BlogSection = () => {
  return (
    <section id="blog" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-accent mb-3">Insights</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Latest from the <span className="gradient-text">Blog</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass rounded-2xl overflow-hidden glow-hover cursor-pointer"
            >
              <div className={`h-48 bg-gradient-to-br ${post.color} opacity-60`} />
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Calendar size={12} />
                  {post.date}
                  <span className="ml-auto text-accent">{post.category}</span>
                </div>
                <h3 className="font-display font-semibold text-foreground group-hover:text-accent transition-colors flex items-start gap-2">
                  {post.title}
                  <ArrowUpRight size={16} className="flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
