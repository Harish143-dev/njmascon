import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const opacity = useMotionValue(0);

  const smoothX = useSpring(cursorX, { stiffness: 420, damping: 35, mass: 0.4 });
  const smoothY = useSpring(cursorY, { stiffness: 420, damping: 35, mass: 0.4 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      return undefined;
    }

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 24);
      cursorY.set(e.clientY - 24);
      opacity.set(1);
    };

    const handleMouseLeave = () => opacity.set(0);
    const handleMouseEnter = () => opacity.set(1);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, opacity]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-[100] hidden size-12 rounded-full border border-primary/20 lg:block"
      style={{ x: smoothX, y: smoothY, opacity }}
    />
  );
};

export default CustomCursor;
