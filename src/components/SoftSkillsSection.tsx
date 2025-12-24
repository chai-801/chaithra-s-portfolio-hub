import { motion } from "framer-motion";
import { MessageSquare, Users, Presentation, Lightbulb } from "lucide-react";

const softSkills = [
  { name: "Communication", icon: MessageSquare, description: "Clear and effective verbal and written communication" },
  { name: "Teamwork", icon: Users, description: "Collaborative approach to achieve common goals" },
  { name: "Presentation Skills", icon: Presentation, description: "Confident delivery of ideas and concepts" },
  { name: "Problem Solving", icon: Lightbulb, description: "Analytical thinking to find innovative solutions" },
];

const languages = [
  { name: "Telugu", level: "Native", percentage: 100 },
  { name: "English", level: "Fluent", percentage: 90 },
  { name: "Tamil", level: "Conversational", percentage: 70 },
  { name: "Kannada", level: "Conversational", percentage: 75 },
];

const SoftSkillsSection = () => {
  return (
    <section id="soft-skills" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Soft Skills */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Soft Skills
              </span>
              <h2 className="text-3xl font-bold mt-2">
                Personal <span className="gradient-text">Strengths</span>
              </h2>
            </motion.div>

            <div className="space-y-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="card-elevated p-5 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <skill.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Languages
              </span>
              <h2 className="text-3xl font-bold mt-2">
                Multilingual <span className="gradient-text">Proficiency</span>
              </h2>
            </motion.div>

            <div className="space-y-5">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="card-elevated p-5"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold text-foreground">{lang.name}</h3>
                    <span className="text-sm text-primary font-medium">{lang.level}</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                      className="h-full gradient-bg rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftSkillsSection;
