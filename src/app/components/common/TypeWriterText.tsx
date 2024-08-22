"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  texts: string[];
  speed: number;
  fontSize: string;
}

export default function TypeWriterText({ texts, speed, fontSize }: Props) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let index = 0;
    const interval = setInterval(() => {
      const text = texts.join("\n");
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [texts, speed, isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          opacity: 1,
          transition: {
            delayChildren: 0.5,
            staggerChildren: 0.05,
          },
        },
        hidden: { opacity: 0 },
      }}
      style={{
        fontFamily: "monospace",
        whiteSpace: "pre-wrap",
        overflow: "hidden",
        display: "inline-block",
        fontSize: fontSize,
      }}
    >
      {displayedText.split("\n").map((line, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          onAnimationComplete={(def) => {
            setCurrentIndex(index);
          }}
        >
          {line}
          {index === currentIndex && (
            <motion.span
              initial={{ opacity: 1 }}
              animate={{ opacity: [1, 0, 1] }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
            >
              |
            </motion.span>
          )}
          <br />
        </motion.span>
      ))}
    </motion.div>
  );
}
