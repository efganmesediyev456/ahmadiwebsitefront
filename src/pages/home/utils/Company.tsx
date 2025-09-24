import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Company.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useGetWorkFlowsQuery } from "../../../store/services/workFlowApi";
import { useTranslations } from "../../../hooks/useTranslations";

gsap.registerPlugin(ScrollTrigger);

const Company = () => {
  const { t, isLoading: isTranslate } = useTranslations();

  const { lang } = useParams<{ lang: string }>();
  const { data, isLoading, error } = useGetWorkFlowsQuery(lang);
  useEffect(() => {
    if (!isLoading && data) {
      ScrollTrigger.refresh();
    }
  }, [isLoading, data]);

  // const elementRef = useRef(null); // Bölümü referans olarak al
  const parentRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && data) {
      const etapeElement = document.querySelector(
        ".etape-lat"
      ) as HTMLElement | null;
      const etapeWidth = etapeElement?.offsetWidth || 0;

      let isSmallScreen = window.innerWidth < 768;
      let xValue: number | string = isSmallScreen
        ? -etapeWidth * 5
        : -etapeWidth * 2;

      isSmallScreen = window.innerWidth >= 1440;
      xValue = "-50%";
      gsap
        .timeline({
          scrollTrigger: {
            scrub: 1,
            trigger: ".etapele",
            start: "top",
            end: "bottom -200%",
            pin: ".etapele",
            pinSpacing: "margin",
          },
        })
        .fromTo(
          ".etapa1",
          { yPercent: 100 }, // Başlangıç
          { yPercent: 0, ease: "slow" },
          0
        )
        .fromTo(
          ".etapa2",
          { yPercent: 100 },
          { yPercent: 0, ease: "slow" },
          0.3
        )
        .fromTo(
          ".etapa3",
          { yPercent: 100 },
          { yPercent: 0, ease: "slow" },
          0.5
        )
        .fromTo(
          ".etapa4",
          { yPercent: 100 },
          { yPercent: 0, ease: "slow" },
          0.7
        )
        .to(
          ".etape-lat",
          {
            x: xValue,
            duration: 1.9,
          },
          1.1
        )
        // .fromTo(
        //   ".etapa5",
        //   { yPercent: 100 },
        //   { yPercent: 0, ease: "slow" },
        //   0.9
        // )
        // .fromTo(
        //   ".etapa6",
        //   { yPercent: 100 },
        //   { yPercent: 0, ease: "slow" },
        //   1.1
        // )
        .fromTo(
          ".etapizare",
          {
            scale: 0.9,
            rotationX: 0,
            rotationY: -19,
            rotationZ: 14,
            yPercent: 100,
          },
          { scale: 1, rotationX: 0, rotationY: 0, rotationZ: 0, yPercent: 0 },
          0
        );
    }

    return () => {
      // ScrollTrigger'ı bileşen unmount olduğunda temizleyin
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isLoading, data]);

  return (
    <div ref={parentRef} className="etapele">
      <div className={`${styles.container}`}>
        <div className="etapizare">
          <div className="container">
            <div className={styles.title}>
              <p>{!isTranslate && t("company")}</p>
              <span>{!isTranslate && t("workflow")}</span>
            </div>
          </div>
          <div className={`${styles.grid_items} etape-lat`}>
            {isLoading && <p>Yüklənir...</p>}
            {error && <p>Xəta baş verdi</p>}

            {!isLoading && !error && (
              <>
                {data?.data?.map((p: any, index: number) => (
                  <div
                    onClick={() => {
                      if (p.url) navigate(p.url);
                    }}
                    key={p.id}
                    className={`${styles.item} etapa${index + 1}`}
                  >
                    <div className={styles.number}>( {index + 1} )</div>
                    <div className={styles.company_title}>{p.title}</div>
                    <div className={styles.content}>{p.subtitle}</div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
