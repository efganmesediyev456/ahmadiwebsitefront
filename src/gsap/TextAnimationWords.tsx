// TextAnimationWords.tsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

interface TextAnimationWordsProps {
  text?: string;
}

const TextAnimationWords: React.FC<TextAnimationWordsProps> = ({ text }) => {
  const textRef = useRef<HTMLDivElement>(null);
  let split: any;

  useEffect(() => {
    if (textRef.current && text) {
      // Split text into words
      split = new SplitType(textRef.current, { types: "words" });

      // Animate each word
      gsap.from(split.words, {
        y: 50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1, // sözlər arasında gecikmə
        ease: "power3.out",
      });
    }

    // Cleanup
    return () => {
      if (split && typeof split.revert === "function") {
        split.revert();
      }
    };
  }, [text]);

  return <span ref={textRef}>{text}</span>;
};

export default TextAnimationWords;
