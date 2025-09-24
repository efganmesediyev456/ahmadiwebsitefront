import styles from "./MobileProgram.module.scss";
import MoreDetail from "../../../ui/MoreDetail";
import AutoTextAnimation from "../../../gsap/AutoTextAnimation";
import { useGetMobilProgramsQuery } from "../../../store/services/mobilProgramApi";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { useTranslations } from "../../../hooks/useTranslations";

const MobileProgram = () => {
  const { lang } = useParams<{ lang: string }>();
  const { data, isLoading, error } = useGetMobilProgramsQuery(lang);
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
        <div className={styles.mobile_container}>
          <div className={styles.left}>
            {!isTranslate ? (
              <AutoTextAnimation>
                <p>{t("mobil_program_title")}</p>
              </AutoTextAnimation>
            ) : (
              ""
            )}

            {!isTranslate ? (
              <AutoTextAnimation>
                <span>{t("mobil_program_content")}</span>
              </AutoTextAnimation>
            ) : (
              ""
            )}
            <MoreDetail title={t('more')} />
          </div>

          {!isLoading && !error && (
            <div className={styles.right}>
              <div className={styles.marquee}>
                <div className={styles.marqueeInner}>
                  {data?.data?.map((p: any) =>
                    p.left_or_right == 0 ? (
                      <Link key={p.id} to={p.url}>
                        <img src={p.image} alt="" />
                      </Link>
                    ) : (
                      ""
                    )
                  )}
                </div>
              </div>

              <div className={styles.marquee}>
                <div className={`${styles.marqueeInner} ${styles.marqueeDown}`}>
                  {data?.data?.map((p: any) =>
                    p.left_or_right == 1 ? (
                      <Link key={p.id} to={p.url}>
                        <img src={p.image} alt="" />
                      </Link>
                    ) : (
                      ""
                    )
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileProgram;
