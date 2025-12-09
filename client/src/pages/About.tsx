import { motion } from "framer-motion";
import { BookOpen, Calendar, CheckCircle2, Award } from "lucide-react";
import neonProfile from "@assets/generated_images/profile_placeholder.png";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 75 },
  { name: "React (Learning)", level: 60 },
  { name: "Time Management", level: 100 },
];

const education = [
  {
    year: "Pursuing",
    title: "BCA",
    institution: "Arcade Business College, Patna",
    desc: "Focusing on Computer Applications and Programming."
  },
  {
    year: "2023",
    title: "12th Grade",
    institution: "LNB High School, Chapra",
    score: "69%",
    desc: "Completed Higher Secondary Education."
  },
  {
    year: "2021",
    title: "10th Grade",
    institution: "LNB High School, Chapra",
    score: "78%",
    desc: "Completed Secondary Education."
  }
];

const highlights = [
  "Time Management",
  "Fast Learner",
  "Curiosity to learn new things",
  "Focus on performance"
];

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-12 container mx-auto px-4">
      {/* About Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full border-2 border-primary animate-pulse-glow" />
            <div className="absolute inset-2 rounded-full border border-secondary/50" />
            <img 
              src={neonProfile} 
              alt="Hanny Kumari" 
              className="w-full h-full object-cover rounded-full p-4 grayscale hover:grayscale-0 transition-all duration-500"
            />
            {/* Rotating text or elements could go here */}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl font-orbitron font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">About Me</h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            I am a fresher with a strong desire to learn and grow in the tech industry. 
            My journey has just begun, but my passion for coding and problem-solving drives me every day.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (index * 0.1) }}
                className="flex items-center gap-3 p-3 border border-white/5 bg-white/5 rounded hover:border-primary/50 transition-colors"
              >
                <CheckCircle2 className="text-accent w-5 h-5" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Skills Section */}
      <div className="mb-24">
        <h2 className="text-3xl font-orbitron font-bold mb-12 text-center text-secondary">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 border border-white/10 rounded-lg bg-card/50 hover:border-primary hover:shadow-[0_0_15px_rgba(255,0,255,0.3)] transition-all group"
            >
              <div className="flex justify-between mb-2">
                <span className="font-bold group-hover:text-primary transition-colors">{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-primary to-secondary"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div>
        <h2 className="text-3xl font-orbitron font-bold mb-12 text-center text-primary">Education Journey</h2>
        <div className="relative border-l-2 border-white/10 ml-4 md:ml-1/2 space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-secondary box-glow" />
              
              <div className={`md:flex items-start justify-between gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2" /> {/* Spacer */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                  <div className="p-6 border border-white/10 rounded-lg bg-card/30 hover:bg-card/50 transition-colors">
                    <div className="flex items-center gap-2 text-accent mb-2 text-sm font-mono justify-start md:justify-inherit">
                      <Calendar className="w-4 h-4" />
                      {edu.year}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{edu.title}</h3>
                    <p className="text-primary mb-2">{edu.institution}</p>
                    {edu.score && <div className="text-sm text-white/80 mb-2">Score: {edu.score}</div>}
                    <p className="text-muted-foreground text-sm">{edu.desc}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
