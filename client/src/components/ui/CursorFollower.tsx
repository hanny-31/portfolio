import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === "A" || (e.target as HTMLElement).tagName === "BUTTON") {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 border-2 border-primary rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
      animate={{
        x: position.x - 16,
        y: position.y - 16,
        scale: hovering ? 1.5 : 1,
        borderColor: hovering ? "var(--accent)" : "var(--primary)",
      }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
    >
      <div className="absolute inset-0 bg-primary opacity-20 rounded-full blur-sm" />
    </motion.div>
  );
}
