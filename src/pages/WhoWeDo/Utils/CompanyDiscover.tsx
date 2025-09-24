import { useTranslations } from "../../../hooks/useTranslations";
import styles from "./CompanyDiscover.module.scss";
import CompanyItem from "./Inc/CompanyItem";

const CompanyDiscover = () => {
  const { t } = useTranslations();


  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.flex}>
          <div className={styles.title}>
            <p className={styles.title1}>{t('discovery_title')}</p>
          </div>
          <div className={styles.title2}>
              {t('discovery_content')}
          </div>
        </div>
        <CompanyItem/>
        <CompanyItem/>
        <CompanyItem/>
        <CompanyItem/>
      </div>
    </div>
  );
};

export default CompanyDiscover;
