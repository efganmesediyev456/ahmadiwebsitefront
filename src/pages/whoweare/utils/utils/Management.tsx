import { useTranslations } from "../../../../hooks/useTranslations";
import { useGetManagementsQuery } from "../../../../store/services/managementsApi";
import styles from "./Management.module.scss";
import { Link, useParams } from "react-router-dom";

const Management = () => {
  const {t} = useTranslations();
  const { lang } = useParams<{ lang: string }>();
  const { data, isLoading, error } = useGetManagementsQuery(lang);
  
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p>{t('management')}</p>
      </div>
      <div className={styles.right}>
        {isLoading && <p>Yüklənir...</p>}
        {error && <p>Xəta baş verdi</p>}

        {data?.data?.map((item:any)=>{
          return <div key={item.id} className={styles.item}>
          <div className={styles.item_left}>
            <img src={item.image} alt="" />
          </div>
          <div className={styles.item_right}>
            <p className={styles.item_title}>{item.name}</p>
            <p className={styles.item_position}>{item.position}</p>
            <p className={styles.item_content}>
              {item.description}
            </p>
            <div className={styles.item_socials}>
              <Link to={item.ln_url}>
                <span>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.39844 7.39844L19.6551 19.6551"
                      stroke="#262728"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20.5978 7.40224V20.6016H7.39844"
                      stroke="#262728"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span>In</span>
              </Link>
              <Link to={item.be_url}>
                <span>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.39844 7.39844L19.6551 19.6551"
                      stroke="#262728"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20.5978 7.40224V20.6016H7.39844"
                      stroke="#262728"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span>Be</span>
              </Link>
            </div>
          </div>
        </div>
        })}
        
        
      </div>
    </div>
  );
};

export default Management;
