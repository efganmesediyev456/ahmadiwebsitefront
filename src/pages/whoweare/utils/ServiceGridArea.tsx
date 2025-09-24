import { useTranslations } from "../../../hooks/useTranslations";
import styles from "./ServiceGridArea.module.scss";
import ServiceGrid from "./utils/ServiceGrid";

const ServiceGridArea = () => {

    const {t} = useTranslations();
  
  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.titleArea}>
          <div className={styles.title}>{t('values_title')}</div>
          <div className={styles.content}>
           {t('values_content')}
          </div>
        </div>
        <ServiceGrid/>
      </div>
    </div>
  );
};

export default ServiceGridArea;
