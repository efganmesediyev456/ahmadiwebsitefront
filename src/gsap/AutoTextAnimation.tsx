import React, { useEffect, Children, cloneElement, ReactNode, ReactElement } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

interface AutoTextAnimationProps {
  children: ReactNode;
  options?: Record<string, any>; // İstəyə bağlı animasiya parametrləri
}

const AutoTextAnimation: React.FC<AutoTextAnimationProps> = ({ children, options = {} }) => {
 
  useEffect(() => {
  const elements = document.querySelectorAll<HTMLElement>(".auto-animate-text");

  elements.forEach((el) => {
    const text = new SplitType(el, { types: "words" });

    const animationOptions: gsap.TweenVars = {
      y: 30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power3.out",
      ...options,
    };

    if (text.words && text.words.length > 0) {
      gsap.from(text.words, {
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "bottom 20%",
        },
        ...animationOptions,
      });
    }

    gsap.to(el, { opacity: 1, duration: 0.5 });
  });

      ScrollTrigger.refresh();

}, [options]);

  return (
    <>
      {Children.map(children, (child) => {
        if (React.isValidElement<{ className?: string }>(child)) {
          return cloneElement(child as ReactElement<{ className?: string }>, {
            className: `${child.props?.className ?? ""} auto-animate-text opacity-0`,
          });
        }
        return child;
      })}
    </>
  );
};

export default AutoTextAnimation;
