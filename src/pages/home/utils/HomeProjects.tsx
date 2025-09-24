import styles from "./HomeProjects.module.scss";
import StartProject from "../../../ui/StartProject";
import { useGetPortfoliosQuery } from "../../../store/services/portfolioApi";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "../../../hooks/useTranslations";

const HomeProjects = () => {
  const { lang } = useParams<{ lang: string }>();
  const { data, isLoading, error } = useGetPortfoliosQuery(lang);
const {t, isLoading:isTranslate} = useTranslations()

   useEffect(() => {
    if (!isLoading && data) {

        ScrollTrigger.refresh();
    }
  }, [isLoading, data]);

  return (
    <div className={styles.container}>
      {isLoading && <p>Yüklənir...</p>}
      {isTranslate && <p>Yüklənir...</p>}
      {error && <p>Xəta baş verdi</p>}

      {!isLoading && !error && (
        <>
          <div className={styles.grid_items}>
            {data?.data?.map((p: any) => (
              <div key={p.id} className={styles.item}>
                <img src={p.image} alt={p.title || "project"} />
                <p>{p.title}</p>
                <span>{p.subtitle}</span>
              </div>
            ))}
          </div>
          <div className={styles.centerMode}>
            <StartProject title={t('all_projects')} color="black" />
          </div>
        </>
      )}
    </div>
  );
};

export default HomeProjects;
