import { useRef, useEffect } from "react";
import styles from "./Banner.module.scss";
import StartProject from "../../../ui/StartProject";
import AutoTextAnimation from "../../../gsap/AutoTextAnimation";
import { useDispatch, useSelector } from "react-redux";
import { fetchBannerData } from "../../../features/banner/bannerSlice";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../../store";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "../../../hooks/useTranslations";

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.banner
  );
  const { lang } = useParams<{ lang: string }>();

  const weCreate = useRef<HTMLParagraphElement | null>(null);

  const { t } = useTranslations();

  useEffect(() => {
    if (lang) {
      dispatch(fetchBannerData(lang));
    }
  }, [lang]);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [data]);

  if (loading) return <div>Yüklənir...</div>;
  if (error) return <div>Xəta: {error}</div>;

  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.row1}>
          <AutoTextAnimation key={data?.data?.title}>
            <p ref={weCreate} className={styles.we_create}>
              {data?.data?.title} 
            </p>
          </AutoTextAnimation>
        </div>
        <div className={styles.row2}>
          <div className={styles.row2_position}>
            <AutoTextAnimation key={data?.data?.subtitle}>
              <p> {data?.data?.subtitle}</p>
            </AutoTextAnimation>
            <StartProject title={t("start_a_project")} color={undefined} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
