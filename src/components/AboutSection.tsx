import { motion } from "framer-motion";
import { GraduationCap, Code, BarChart3, Sparkles } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    { icon: GraduationCap, label: "BCA Student", description: "KLE Society's Degree College" },
    { icon: Code, label: "Web Developer", description: "HTML, CSS, JavaScript" },
    { icon: BarChart3, label: "Data Analyst", description: "Power BI & Python" },
    { icon: Sparkles, label: "Problem Solver", description: "Creative solutions" },
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Passionate about{" "}
            <span className="gradient-text">Technology</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm a dedicated BCA student at{" "}
              <span className="text-foreground font-medium">
                KLE Society's Degree College, Bangalore
              </span>{" "}
              (2023–2026), with a strong passion for building innovative digital solutions.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              My journey in technology spans across{" "}
              <span className="text-foreground font-medium">Web Development</span> and{" "}
              <span className="text-foreground font-medium">Data Analytics</span>. I specialize in 
              creating responsive web applications and transforming raw data into meaningful insights 
              using tools like Python and Power BI.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I believe in the power of data-driven decisions and user-centric design to solve 
              real-world problems. Currently seeking opportunities to contribute my skills in 
              software development and data analysis roles.
            </p>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="card-elevated p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
