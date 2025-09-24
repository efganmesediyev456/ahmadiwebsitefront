import React, { useEffect, useState } from "react";
import "./PrettyLoader.css";
import gsap from "gsap";

interface PrettyLoaderProps{
  loading:boolean,
  children:React.ReactNode,
  pageName:String,
}

const PrettyLoader:React.FC<PrettyLoaderProps> = ({ loading, children, pageName }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (loading) {
      const tl = gsap.timeline();

      gsap.to({}, {
        duration: 2,
        onUpdate: () => {
          setProgress((prev) => Math.min(prev + 1, 100));
        },
      });

      tl.fromTo(
        ".loader",
        { x: "-100%" },
        { x: "0%", duration: 0.8, ease: "power2.inOut" }
      )
        .to(".loader", {
          x: "100%", 
          duration: 0.8,
          ease: "power2.inOut",
          delay: 1, 
          onComplete: () => {
            gsap.set(".loader", { display: "none" });
          },
        });


     
    }




  }, [loading]);

  return (
    <div>
      <div className="loader">
        <div className="loader-content">
          <div className="mt-4">{pageName}</div>
          <div className="progress-container">
            <div className="progress-text">{progress}</div>
            <span>%</span>
          </div>
        </div>
      </div>
      {loading === false ? <div>{children}</div> : ""}
    </div>
  );
};

export default PrettyLoader;
