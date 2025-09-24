import styles from "./SiteArrow.module.scss";

const SiteArrow = () => {
  return (
    <div className={styles.fixed}>
      <div className={styles.container}>
        <span>
          <svg className={styles.arrow}
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.0312 2.74219V41.7428"
              stroke="white"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M45.0156 23.7422L24.0156 44.7422L3.01562 23.7422"
              stroke="white"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
          </svg>
        </span>

        <div className={styles.human}>
          <video src="/4.mp4" muted autoPlay loop />
        </div>
      </div>
    </div>
  );
};

export default SiteArrow;
