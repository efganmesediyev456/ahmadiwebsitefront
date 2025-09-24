import React from "react";
import styles from "./StartProject.module.scss";
import { Link } from "react-router-dom";

interface StartProjectProps{
  title?:string,
  color?:string
}

const StartProject:React.FC<StartProjectProps> = ({ title, color }) => {
  return (
    <div className={styles.button}>
      <span>(</span>
        <Link style={{ 'color': color || "#fff" }} to={""}>{title}</Link>
        <span>)</span>
    </div>
  );
};

export default StartProject;
