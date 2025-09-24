import { useParams } from "react-router-dom";
import { useTranslations } from "../../../hooks/useTranslations";
import styles from "./CompanyAndDesign.module.scss";
import { useGetCompanyAndDesignQuery } from "../../../store/services/companyAndDesignApi";
import { p } from "framer-motion/client";

const CompanyAndDesign = () => {
  const { t } = useTranslations();
  const { lang } = useParams<{ lang: string }>();
  const { data, isLoading, error } = useGetCompanyAndDesignQuery(lang);
  return (
    <>
      {isLoading && <p>Yüklənir...</p>}
      {error && <p>Xəta baş verdi</p>}

      <div className={styles.container}>
        <div className="container">
          <div className={styles.leftTitle}>
            <p>{t("company")}</p>
            <span>{t("company_content")}</span>
          </div>
          <div className={styles.design}>
            <div className={styles.left_design}>
              <p className={styles.number}>( 1 )</p>
              <p className={styles.name}>{data?.data[0].title}</p>
              <p className={styles.content}>{data?.data[0].description}</p>
            </div>
            <div className={styles.right_design}>
              {data?.data[0].items?.map((item: any) => (
                <div key={item.id} className={styles.accordion}>
                  <div className={styles.title}>
                    <span>{item.title}</span>
                    <span>
                      <svg
                        width="44"
                        height="44"
                        viewBox="0 0 44 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22 9.16406V34.8307"
                          stroke="#0038FF"
                          strokeWidth="2.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.15625 22H34.8229"
                          stroke="#0038FF"
                          strokeWidth="2.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className={styles.content}>
                    <p> {item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {data?.data?.slice(1).map((item: any, index: any) =>
        index % 2 == 0 ? (
          <div key={item.id} className={styles.containerDark}>
            <div className="container">
              <div className={styles.design}>
                <div className={styles.left_design}>
                  <p className={styles.number}>( {index + 2} )</p>
                  <p className={styles.name}>{item.title}</p>
                  <p className={styles.content}>{item.description}</p>
                </div>
                <div className={styles.right_design}>
                  {item?.items?.map((mapItem: any) => (
                    <div key={mapItem.id} className={styles.accordion}>
                      <div className={styles.title}>
                        <span>{mapItem.title}</span>
                        <span>
                          <svg
                            width="44"
                            height="44"
                            viewBox="0 0 44 44"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M22 9.16406V34.8307"
                              stroke="#0038FF"
                              strokeWidth="2.75"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9.15625 22H34.8229"
                              stroke="#0038FF"
                              strokeWidth="2.75"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className={styles.content}>
                        <p>{mapItem.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div key={item.id} className={`${styles.container} ${styles.containerWhite}`}>
            <div className="container">
              <div className={styles.design}>
                <div className={styles.left_design}>
                  <p className={styles.number}>( {index + 2} )</p>
                  <p className={styles.name}>{item.title}</p>
                  <p className={styles.content}>{item.description}</p>
                </div>
                <div className={styles.right_design}>
                  {item?.items?.map((mapItem: any) => (
                    <div key={mapItem.id} className={styles.accordion}>
                      <div className={styles.title}>
                        <span>{mapItem.title}</span>
                        <span>
                          <svg
                            width="44"
                            height="44"
                            viewBox="0 0 44 44"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M22 9.16406V34.8307"
                              stroke="#0038FF"
                              strokeWidth="2.75"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9.15625 22H34.8229"
                              stroke="#0038FF"
                              strokeWidth="2.75"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className={styles.content}>
                        <p>
                          {" "}
                          {mapItem.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default CompanyAndDesign;
