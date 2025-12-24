import { motion } from "framer-motion";
import { ExternalLink, Github, FileText, Package, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const project = {
    title: "Medical Store Billing Website",
    description:
      "A comprehensive cloud-based web application designed to streamline medical store operations. The system provides end-to-end billing management with features for invoice generation, inventory tracking, and sales reporting.",
    features: [
      { icon: FileText, label: "Invoice Generation" },
      { icon: Package, label: "Inventory Tracking" },
      { icon: BarChart, label: "Sales Reporting" },
    ],
    techStack: ["HTML", "CSS"],
    outcome:
      "Improved billing accuracy and operational efficiency for medical store management.",
  };

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing real-world projects that demonstrate my technical skills and problem-solving abilities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-elevated p-8 md:p-10"
        >
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Project Image Placeholder */}
            <div className="lg:col-span-2">
              <div className="aspect-[4/3] rounded-xl gradient-bg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                <div className="relative z-10 text-center text-primary-foreground p-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary-foreground/20 flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8" />
                  </div>
                  <p className="font-semibold">Medical Store</p>
                  <p className="text-sm opacity-80">Billing System</p>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-4">
                Cloud-based Application
              </div>
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-muted-foreground mb-6">{project.description}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-3 mb-6">
                {project.features.map((feature) => (
                  <div
                    key={feature.label}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm"
                  >
                    <feature.icon className="w-4 h-4 text-primary" />
                    {feature.label}
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <span className="text-sm font-medium text-foreground mb-2 block">
                  Tech Stack:
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Outcome */}
              <div className="p-4 rounded-lg bg-accent/5 border border-accent/20 mb-6">
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                  Outcome
                </span>
                <p className="text-sm text-muted-foreground mt-1">{project.outcome}</p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                <Button variant="default" asChild>
                  <a href="#" className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#" className="flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
