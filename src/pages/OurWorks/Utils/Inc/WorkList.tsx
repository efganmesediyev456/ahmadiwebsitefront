import styles from "./WorkList.module.css";
import { Link } from "react-router-dom";

const WorkList = () => {
  return (
    <div className={styles.grid_lists}>
      <Link className={styles.grid_item} to="/ourworks/korporative">
        <img src="/home/project1.jpg" alt="" />
        <p>Корпоративный сайт Сибура </p>
      </Link>
      <Link className={styles.grid_item} to="/ourworks/korporative">
        <img src="/home/project2.jpg" alt="" />
        <p>Корпоративный сайт Сибура </p>
      </Link>
      <Link className={styles.grid_item} to="/ourworks/korporative">
        {" "}
        <img src="/home/project2.jpg" alt="" />
        <p>Корпоративный сайт Сибура </p>
      </Link>
      <Link className={styles.grid_item} to="/ourworks/korporative">
        {" "}
        <img src="/home/project1.jpg" alt="" />
        <p>Корпоративный сайт Сибура </p>
      </Link>

      <Link className={styles.grid_item} to="/ourworks/korporative">
        <img src="/home/project1.jpg" alt="" />
        <p>Корпоративный сайт Сибура </p>
      </Link>
      <Link className={styles.grid_item} to="/ourworks/korporative">
        {" "}
        <img src="/home/project2.jpg" alt="" />
        <p>Корпоративный сайт Сибура </p>
      </Link>

      <div className={styles.grid_item}>
        <img src="/home/project2.jpg" alt="" />
        <p>Корпоративный сайт Сибура </p>
      </div>
      <div className={styles.grid_item}>
        <img src="/home/project1.jpg" alt="" />
        <p>Корпоративный сайт Сибура </p>
      </div>

      <div className={styles.grid_item}>
        <img src="/home/project1.jpg" alt="" />
        <p>Корпоративный сайт Сибура </p>
      </div>
      <div className={styles.grid_item}>
        <img src="/home/project2.jpg" alt="" />
        <p>Корпоративный сайт Сибура </p>
      </div>

      <div className={styles.grid_item}>
        <img src="/home/project2.jpg" alt="" />
        <p>Корпоративный сайт Сибура </p>
      </div>
      <div className={styles.grid_item}>
        <img src="/home/project1.jpg" alt="" />
        <p>Корпоративный сайт Сибура </p>
      </div>
    </div>
  );
};

export default WorkList;
