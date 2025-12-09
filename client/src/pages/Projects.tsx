import { motion } from "framer-motion";
import { FolderGit2, Github, ExternalLink, Code2 } from "lucide-react";

// Placeholder projects since none were provided in the prompt
const projects = [
  {
    title: "Portfolio Website",
    desc: "A neon-themed personal portfolio built with React, Three.js, and Tailwind CSS. Features custom animations and 3D elements.",
    tags: ["React", "Three.js", "Tailwind"],
    link: "#"
  },
  {
    title: "E-Commerce UI",
    desc: "A modern, responsive e-commerce interface with product grids, cart functionality, and smooth transitions.",
    tags: ["HTML", "CSS", "JS"],
    link: "#"
  },
  {
    title: "Task Dashboard",
    desc: "Productivity dashboard featuring drag-and-drop tasks, dark mode, and data visualization.",
    tags: ["React", "Recharts", "Framer Motion"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 pb-12 container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
          Featured Projects
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Here are some of the projects I've worked on to hone my skills in web development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-card border border-white/10 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 h-full flex flex-col"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-0" />
            
            {/* Project Image Placeholder */}
            <div className="h-48 bg-muted/20 w-full flex items-center justify-center border-b border-white/5 group-hover:bg-muted/30 transition-colors">
              <Code2 className="w-12 h-12 text-muted-foreground/50 group-hover:text-primary transition-colors" />
            </div>

            <div className="p-6 relative z-10 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 flex-1">{project.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-white/70">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto">
                <a href={project.link} className="flex items-center gap-2 text-sm font-bold text-white hover:text-secondary transition-colors">
                  <Github className="w-4 h-4" /> Code
                </a>
                <a href={project.link} className="flex items-center gap-2 text-sm font-bold text-white hover:text-secondary transition-colors">
                  <ExternalLink className="w-4 h-4" /> Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
