import { Link, useParams } from "react-router-dom";
import styles from "./HeaderTop.module.scss";
import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGetSettingsQuery } from "../../../store/services/settingsApi";
import { useTranslations } from "../../../hooks/useTranslations";

interface HeaderTopProps {
  handleHeaderClick: () => void;
}

const HeaderTop: React.FC<HeaderTopProps> = ({ handleHeaderClick }) => {
  const { lang } = useParams<{ lang: string }>();

  const {t} = useTranslations();

  const { data, isLoading, error } = useGetSettingsQuery(lang);
  useEffect(() => {
    if (!isLoading && data) {
      ScrollTrigger.refresh();
    }
  }, [isLoading, data]);

  

  return (
    <>
      {isLoading && <p>Yüklənir...</p>}
      {error && <p>Xəta baş verdi</p>}

      {!isLoading && !error && (
        <div className="container">
          <div className={styles.container}>
            <Link to="/" className={styles.logo}>
              <img src={data?.header_logo} className={styles.logoImage}/>
            </Link>
            <div className={styles.menu_center}>
              <Link to={`/${lang}/contact`}>{t('contacts')}</Link>
            </div>
            <div className={styles.menu_and_langauges}>
              <div className={styles.languages}>
                <div className="language active">
                  <Link to="/az">az</Link>
                  <Link to="/en">en</Link>
                  <Link to="/ru">ru</Link>
                </div>
                <div className={styles.language_dropdown}>
                  <div>
                    <Link to="">RUS</Link>
                  </div>
                  <div>
                    <Link to="">Rus</Link>
                  </div>
                  <div>
                    <Link to="">Rus</Link>
                  </div>
                </div>
              </div>
              <div
                onClick={() => handleHeaderClick()}
                className={styles.menu_open}
              >
                {t('menus')}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderTop;
