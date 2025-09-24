import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className="container">
        <div className={styles.banner_top}>
          <p>Our Works</p>
        </div>
        <div className={styles.banner_right}>
          <div className={styles.banner_bottom}>
            Only — digital–агентство с фокусом на сильную аналитику, дизайн и
            разработку. В основе наших проектов лежат идеи, создаваемые на стыке
            стратегии, креатива и технологий.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
