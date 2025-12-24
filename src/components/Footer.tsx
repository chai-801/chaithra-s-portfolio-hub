import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-narrow section-padding">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-2">Chaithra R</h3>
            <p className="text-primary-foreground/70">Web Developer & Data Analyst</p>
          </motion.div>

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>

          {/* Back to top */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onClick={scrollToTop}
            className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Divider */}
        <div className="h-px bg-primary-foreground/10 my-8" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-sm text-primary-foreground/60 flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-destructive fill-destructive" /> by Chaithra R © {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
