import { motion } from "framer-motion";
import { MessageCircle, CheckCircle } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = "917793988153";

    const message = `Hello Varun Tech Studio,

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Project Details:
${formData.project}`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    setSubmitted(true);

    setTimeout(() => {
      window.open(whatsappURL, "_blank");
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        project: "",
      });
    }, 800);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-accent mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Let's <span className="gradient-text">Talk</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Fill out the form below and send your
            details directly to us on WhatsApp.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 md:p-10 space-y-6 border border-white/10 shadow-xl max-w-3xl mx-auto"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">
                Full Name
              </label>
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
              />
            </div>

            <div>
              <label className="text-sm text-muted-foreground mb-2 block">
                Email Address
              </label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-muted-foreground mb-2 block">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 7793988153"
              className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
            />
          </div>

          <div>
            <label className="text-sm text-muted-foreground mb-2 block">
              Project Details
            </label>
            <textarea
              required
              rows={5}
              name="project"
              value={formData.project}
              onChange={handleChange}
              placeholder="Tell us about your website, app, design, or business idea..."
              className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl font-semibold text-primary-foreground flex items-center justify-center gap-2 transition-all btn-glow"
            style={{ background: "var(--gradient-primary)" }}
          >
            {submitted ? (
              <>
                <CheckCircle size={18} />
                Redirecting to WhatsApp...
              </>
            ) : (
              <>
                <MessageCircle size={18} />
                Send on WhatsApp
              </>
            )}
          </button>

          <p className="text-xs text-muted-foreground text-center">
            By clicking the button, your message will open directly in WhatsApp.
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;