import { motion, MotionProps, HTMLMotionProps } from "framer-motion";
import React from "react";

type Direction = "up" | "down" | "left" | "right";

interface FadeProps extends Omit<HTMLMotionProps<"div">, keyof MotionProps> {
  children: React.ReactNode;
  direction?: Direction;
  distance?: number;
  delay?: number;
  duration?: number;
  triggerOnce?: boolean;
  className?: string;
  viewportAmount?: number;
  shouldAnimate?: boolean;
}

const FadeComponent = React.forwardRef<HTMLDivElement, FadeProps>(({
  children,
  direction = "up",
  distance = 50,
  delay = 0,
  duration = 0.8,
  triggerOnce = true,
  className = "",
  viewportAmount = 0.2,
  shouldAnimate = true,
  ...props
}, ref) => {
  const getDirectionalAnimation = (dir: Direction) => {
    switch (dir) {
      case "down":
        return { y: -distance };
      case "left":
        return { x: distance };
      case "right":
        return { x: -distance };
      case "up":
      default:
        return { y: distance };
    }
  };

  const variants = {
    hidden: {
      opacity: 0,
      ...getDirectionalAnimation(direction),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // Improved cubic-bezier easing
      },
    },
  };

  if (!shouldAnimate) {
    return (
      <div ref={ref} className={className} {...props}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: triggerOnce,
        amount: viewportAmount 
      }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
});

FadeComponent.displayName = "FadeComponent";

export default FadeComponent;