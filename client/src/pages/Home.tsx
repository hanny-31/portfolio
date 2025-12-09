import { motion } from "framer-motion";
import GlitchText from "@/components/ui/GlitchText";
import ParticleWave from "@/components/3d/ParticleWave";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleWave />
      
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-block p-2 px-4 border border-primary/50 rounded-full bg-primary/10 backdrop-blur-md mb-4">
            <span className="text-primary font-mono text-sm tracking-widest">WELCOME_TO_MY_PORTFOLIO</span>
          </div>
          
          <div className="space-y-2">
            <h2 className="text-2xl md:text-4xl text-muted-foreground font-light">Hello, I'm</h2>
            <GlitchText 
              text="HANNY KUMARI" 
              className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary"
            />
            <h3 className="text-xl md:text-3xl text-secondary font-bold mt-2 tracking-[0.2em]">FRESHER</h3>
          </div>

          <p className="max-w-xl mx-auto text-muted-foreground text-lg leading-relaxed">
            Passionate about building digital experiences. 
            Focused on performance, learning, and creating unique visual interactions.
          </p>

          <div className="flex justify-center gap-4 mt-8">
            <Link href="/projects">
              <a className="px-8 py-3 bg-primary text-black font-bold rounded hover:bg-white transition-colors flex items-center gap-2 group">
                View Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Link>
            <Link href="/contact">
              <a className="px-8 py-3 border border-white/20 hover:border-primary text-white rounded transition-colors backdrop-blur-sm">
                Contact Me
              </a>
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-0 w-full flex justify-center animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2 animate-ping" />
        </div>
      </div>
    </div>
  );
}
