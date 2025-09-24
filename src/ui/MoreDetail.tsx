import React from "react";
import styles from "./MoreDetail.module.scss";
import { Link } from "react-router-dom";

interface MoreDetailProps {
  title?: string;
  url?: string;
}
const MoreDetail: React.FC<MoreDetailProps> = ({ title, url }) => {
  return (
    <Link to={url || ""}>
      <div className={styles.container}>
        <span>{title}</span>
        <span>
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 8L14.0002 8"
              stroke="#0038FF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 1L15 8L8 15"
              stroke="#0038FF"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
};

export default MoreDetail;
