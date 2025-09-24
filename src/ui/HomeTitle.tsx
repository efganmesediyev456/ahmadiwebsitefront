import React from "react";
import styles from "./HomeTitle.module.scss";
import AutoTextAnimation from "../gsap/AutoTextAnimation";

interface HomeTitleProps {
  title?: string;
  content?: string;
  lang?: string;
}

const HomeTitle: React.FC<HomeTitleProps> = ({
  title,
  content,
  lang = "az",
}) => {
  return (
    <div className={styles.container}>
      <AutoTextAnimation key={`title-${lang}-${title}`}>
        <p className={styles.title}>{title}</p>
      </AutoTextAnimation>
      <AutoTextAnimation key={`content-${lang}-${content}`}>
        <p className={styles.content}>{content}</p>
      </AutoTextAnimation>
    </div>
  );
};

export default HomeTitle;
