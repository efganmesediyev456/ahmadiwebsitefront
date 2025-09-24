import { useParams } from "react-router-dom";
import styles from "./MarqueeLists.module.scss";
import { useGetPartnersQuery } from "../../../store/services/partnerApi";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { useTranslations } from "../../../hooks/useTranslations";

const MarqueeLists = () => {
  const { lang } = useParams<{ lang: string }>();
  const { data, isLoading, error } = useGetPartnersQuery(lang);
  const { t, isLoading: isTranslate } = useTranslations();

  useEffect(() => {
    if (!isLoading && data) {
      ScrollTrigger.refresh();
    }
  }, [isLoading, data]);

  return (
    <div className={styles.container}>
      {isLoading && <p>Yüklənir...</p>}
      {error && <p>Xəta baş verdi</p>}

      <div className="container">
        <div className={styles.title}>
          <p>{!isTranslate && t("company")}</p>
          <span>
            {!isTranslate && t("work_companies")}
          </span>
        </div>

        {!isLoading && !error && (
          <div className={styles.marqueList}>
            {data?.data?.map((p: any, index: number) =>
              p.floor == 1 ? (
                <div className={`${styles.item} item`} key={index}>
                  <img src={p.image} alt="" />
                </div>
              ) : (
                ""
              )
            )}
          </div>
        )}

        {!isLoading && !error && (
         <div className={styles.marqueList}>
            {data?.data?.map((p: any, index: number) =>
              p.floor == 2 ? (
                <div className={`${styles.item} item`} key={index}>
                  <img src={p.image} alt="" />
                </div>
              ) : (
                ""
              )
            )}
          </div>
        )}

        {!isLoading && !error && (
         <div className={styles.marqueList}>
            {data?.data?.map((p: any, index: number) =>
              p.floor == 3 ? (
                <div className={`${styles.item} item`} key={index}>
                  <img src={p.image} alt="" />
                </div>
              ) : (
                ""
              )
            )}
          </div>
        )}
        
      </div>
    </div>
  );
};

export default MarqueeLists;
