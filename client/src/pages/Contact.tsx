import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Send, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24 pb-12 container mx-auto px-4 flex items-center">
      <div className="w-full grid lg:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-orbitron font-bold mb-6 text-white">Let's Connect</h2>
          <p className="text-muted-foreground text-lg mb-12">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="text-primary w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground font-mono">Email</h3>
                <a href="mailto:hannykri.31@gmail.com" className="text-xl text-white font-bold hover:text-primary transition-colors">hannykri.31@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full bg-secondary/10 border border-secondary/30 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                <Phone className="text-secondary w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground font-mono">Phone</h3>
                <p className="text-xl text-white font-bold">7903366900</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Linkedin className="text-accent w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground font-mono">LinkedIn</h3>
                <a href="https://www.linkedin.com/public-profile/settings" target="_blank" rel="noopener noreferrer" className="text-xl text-white font-bold hover:text-accent transition-colors">View Profile</a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card/30 backdrop-blur-md p-8 rounded-2xl border border-white/10"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-bold text-muted-foreground">Name</label>
              <input 
                id="name"
                required
                type="text" 
                className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-bold text-muted-foreground">Email</label>
              <input 
                id="email"
                required
                type="email" 
                className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold text-muted-foreground">Message</label>
              <textarea 
                id="message"
                required
                rows={4}
                className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                placeholder="Your message here..."
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-primary to-secondary rounded-lg font-bold text-black hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? "Sending..." : (
                <>
                  Send Message <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
}
