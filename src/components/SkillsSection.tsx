import { motion } from "framer-motion";

const skills = [
  { name: "Python", level: 80, category: "Programming" },
  { name: "HTML", level: 90, category: "Web Development" },
  { name: "CSS", level: 85, category: "Web Development" },
  { name: "Web Development", level: 85, category: "Development" },
  { name: "Power BI", level: 75, category: "Data Analysis" },
  { name: "Data Analysis", level: 75, category: "Data Analysis" },
  { name: "Data Visualization", level: 80, category: "Data Analysis" },
  { name: "MS Excel", level: 85, category: "Tools" },
  { name: "Microsoft Office", level: 90, category: "Tools" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Technical Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            My <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A diverse skill set spanning web development, data analysis, and essential tools for modern software development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="card-elevated p-6"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-foreground">{skill.name}</h3>
                <span className="text-sm text-primary font-medium">{skill.level}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.08, ease: "easeOut" }}
                  className="h-full gradient-bg rounded-full"
                />
              </div>
              <span className="text-xs text-muted-foreground mt-2 block">{skill.category}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
