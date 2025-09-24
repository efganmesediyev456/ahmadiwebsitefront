import styles from "./WorkPageDetailBanner.module.css";
import { Link } from "react-router-dom";

const WorkPageDetailBanner = () => {
  return (
    <div className={styles.container}>
      <div className="container">
        <p className={styles.title}>Вебсайт компании ahmadiagency</p>
        <div className={styles.story_menus}>
          <ul>
            <li>
              <Link to="">
                <span>
                  <svg
                    width="30"
                    height="31"
                    viewBox="0 0 30 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.0078 1.57812V26.4952"
                      stroke="white"
                      strokeWidth="2.875"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M28.4193 14.9922L15.0026 28.4089L1.58594 14.9922"
                      stroke="white"
                      strokeWidth="2.875"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span>Story</span>
              </Link>
            </li>
            <li>
              <Link to="">
                <span>
                  <svg
                    width="30"
                    height="31"
                    viewBox="0 0 30 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.0078 1.57812V26.4952"
                      stroke="white"
                      strokeWidth="2.875"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M28.4193 14.9922L15.0026 28.4089L1.58594 14.9922"
                      stroke="white"
                      strokeWidth="2.875"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span>Our Values</span>
              </Link>
            </li>
            <li>
              <Link to="">
                <span>
                  <svg
                    width="30"
                    height="31"
                    viewBox="0 0 30 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.0078 1.57812V26.4952"
                      stroke="white"
                      strokeWidth="2.875"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M28.4193 14.9922L15.0026 28.4089L1.58594 14.9922"
                      stroke="white"
                      strokeWidth="2.875"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span>Our Values</span>
              </Link>
            </li>
          </ul>
          <div className={styles.rounded}>
            <img src="/ui/human.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPageDetailBanner;
