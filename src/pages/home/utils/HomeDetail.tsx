import styles from "./HomeDetail.module.scss";
import HomeTitle from "../../../ui/HomeTitle";
import HomeProjects from "./HomeProjects";
import AutoTextAnimation from "../../../gsap/AutoTextAnimation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchBannerDetailData } from "../../../features/banner/bannerDetailSlice";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "../../../hooks/useTranslations";

const HomeDetail = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.bannerDetail
  );

  const { t, isLoading } = useTranslations();

  const { lang } = useParams<{ lang: string }>();
  useEffect(() => {
    if (lang) {
      dispatch(fetchBannerDetailData(lang));
    }
  }, [lang, dispatch]);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [data]);

  if (loading) return <div>Yüklənir...</div>;
  if (error) return <div>Xəta: {error}</div>;
  if (isLoading) return <div>Yüklənir...</div>;

  return (
    <div className={styles.home_detail_container}>
      <div className="container">
        <div className={styles.container}>
          {Array.isArray(data) &&
            data.map((item: any, index: number) => (
              <div key={index} className={styles.item}>
                <div className="left">
                  <svg
                    className={styles.item_icon}
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.7969 13.8047L38.3103 38.3181"
                      stroke="#262728"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M40.1955 13.7967V40.1953H13.7969"
                      stroke="#262728"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <AutoTextAnimation>
                  <p className="right">{item.title ?? "Кто Мы Такие"}</p>
                </AutoTextAnimation>
              </div>
            ))}
        </div>

        <HomeTitle
          title={isLoading ? "Yüklənir..." : t("company")}
          content={isLoading ? "Yüklənir..." : t("company_detail")}
          lang = {lang}
        />

        <HomeProjects />
      </div>
    </div>
  );
};

export default HomeDetail;
