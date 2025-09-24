import styles from "./Service.module.scss";
import HomeTitle from "../../../ui/HomeTitle";
import ServiceSlider from "./utils/ServiceSlider";
import ServiceGrid from "./utils/ServiceGrid";
import StartProject from "../../../ui/StartProject";
import { useTranslations } from "../../../hooks/useTranslations";

const Service = () => {
  
  const { t, isLoading: isTranslate } = useTranslations();

  return (

    <div className={styles.container}>
      <div className="container">
        <HomeTitle
          title={!isTranslate ?  t('service_title') : ''}
          content={!isTranslate ?  t('service_content') : ''}
        />
        <div className={styles.sliders}>
          <ServiceSlider />
          <ServiceGrid />
          <div className={styles.centermode}>
            <StartProject title={!isTranslate ?  t('all_service') : ''} color="rgba(38, 39, 40, 1)" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
