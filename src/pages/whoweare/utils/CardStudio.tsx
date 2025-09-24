import { useTranslations } from "../../../hooks/useTranslations";
import styles from "./CardStudio.module.scss";
import CardGalleries from "./utils/CardGalleries";

const CardStudio = () => {
    const { t } = useTranslations();

  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.title}>
          <p>{t('our_studio')}</p>
          <div className={styles.cardImageSection}>
            <img src="/whoweare/CardStudio/cardStudioLogo.svg" alt="" className={styles.cardImage} />
          </div>
        </div>

        <CardGalleries/>
      </div>
    </div>
  );
};

export default CardStudio;
