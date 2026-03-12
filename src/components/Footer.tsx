import { Mail, Phone, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 pt-14 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <a href="#" className="text-2xl font-display font-bold gradient-text">
              Varun Tech Studio
            </a>
            <p className="text-sm text-muted-foreground mt-4 leading-6">
              We build modern websites, web apps, and digital solutions for
              startups, businesses, and growing brands.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4 text-foreground">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Services
              </a>
              <a href="#portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Portfolio
              </a>
              <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Services / Tech */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4 text-foreground">
              Services
            </h4>
            <div className="flex flex-col gap-3">
              <p className="text-sm text-muted-foreground">React.js Development</p>
              <p className="text-sm text-muted-foreground">Next.js Websites</p>
              <p className="text-sm text-muted-foreground">Tailwind CSS UI</p>
              <p className="text-sm text-muted-foreground">Razorpay & PhonePe Integration</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4 text-foreground">
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:varuntechstudio@gmail.com"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail size={16} />
                varuntechstudio9@gmail.com
              </a>

              <a
                href="tel:+917793988153"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone size={16} />
                +91 7793988153
              </a>

              <div className="flex gap-4 pt-2">
                <a
                  href="https://wa.me/917793988153"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={18} />
                </a>

                <a
                  href="https://instagram.com/varuntechstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2026 Varun Tech Studio. All rights reserved.
          </p>

          <p className="text-sm text-muted-foreground text-center md:text-right">
            Designed & Developed by <span className="text-foreground font-medium">Varun Tech Studio</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;