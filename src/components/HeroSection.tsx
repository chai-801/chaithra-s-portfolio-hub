import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container-narrow relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Greeting badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-soft" />
            Open to opportunities
          </motion.div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
            Hi, I'm{" "}
            <span className="gradient-text">Chaithra R</span>
          </h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 font-medium"
          >
            BCA Student • Web Developer • Data Analyst
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base sm:text-lg text-muted-foreground/80 mb-10 max-w-xl mx-auto"
          >
            Building data-driven and user-friendly web solutions that make a difference.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center justify-center gap-4"
          >
            <a
              href="https://linkedin.com/in/chaithra-r"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 text-muted-foreground hover:text-primary"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/chaithra-r"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 text-muted-foreground hover:text-primary"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:chaithra.r277@gmail.com"
              className="p-3 rounded-full bg-card shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 text-muted-foreground hover:text-primary"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs font-medium mb-2">Scroll down</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
