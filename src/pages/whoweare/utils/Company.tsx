import { useParams } from "react-router-dom";
import styles from "./Company.module.scss";
import { useGetCompanyAboutsQuery } from "../../../store/services/companyAboutApi";
import { useTranslations } from "../../../hooks/useTranslations";

const Company = () => {
  const { lang } = useParams<{ lang: string }>();
  const { data, isLoading, error } = useGetCompanyAboutsQuery(lang);
  const {t} = useTranslations();

  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.firstSection}>
          {isLoading && <p>Yüklənir...</p>}
          {error && <p>Xəta baş verdi</p>}

          <p className={styles.company_information}>{data?.title}</p>
          <div className={styles.twoSection}>
            <p className={styles.twoAreaTitle}>
              {data?.content}
            </p>
            <div className={styles.twoArea}>
              <p>
               {data?.content2}
              </p>
              <p>
                {data?.content3}
              </p>
            </div>
          </div>
        </div>

        <div className={styles.yearSection}>
          <div className={styles.item}>
            <div className={styles.title}>{t('founded')}</div>
            <div className={styles.number}>{data?.founded}</div>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>{t('team_of')}</div>
            <div className={styles.number}>{data?.team}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
