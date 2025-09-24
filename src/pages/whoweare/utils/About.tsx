import { useParams } from "react-router-dom";
import { useGetcompanyTeamAboutQuery } from "../../../store/services/companyTeamAboutApi";
import styles from "./About.module.scss";
import Management from "./utils/Management";
import Team from "./utils/Team";

const About = () => {
  const { lang } = useParams<{ lang: string }>();
  const { data, isLoading, error } = useGetcompanyTeamAboutQuery(lang);

  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.title}>
          {isLoading && <p>Yüklənir...</p>}
          {error && <p>Xəta baş verdi</p>}
          <p>{data?.title}</p>
          <div className={styles.about_area}>
            <p>
              {data?.content}
            </p>
            <div className={styles.about_two}>
              <p>
                {data?.content2}
              </p>
              <p>
                {data?.content3}
              </p>
            </div>
          </div>
        </div>
        <Management />
        <Team />
      </div>
    </div>
  );
};

export default About;
