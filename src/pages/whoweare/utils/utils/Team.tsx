import { useParams } from "react-router-dom";
import { useTranslations } from "../../../../hooks/useTranslations";
import { useGetTeamsQuery } from "../../../../store/services/teamsApi";
import styles from "./Team.module.scss";
import React, { JSX } from "react";

const Team = () => {
  const { t } = useTranslations();
  const { lang } = useParams<{ lang: string }>();
  const { data, isLoading, error } = useGetTeamsQuery(lang);
  return (
    <div className={styles.container}>
      <p className={styles.title}>{t("team")}</p>
      <div className={styles.team_items}>
        {isLoading && <p>Yüklənir...</p>}
        {error && <p>Xəta baş verdi</p>}

        {(() => {
          const result: JSX.Element[] = [];
          const realData = data?.data || [];
          let i = 0;
          let firstBatch = true;

          while (i < realData.length) {
            const batchSize = firstBatch ? 2 : 4;
            const batch = realData.slice(i, i + batchSize);

            batch.forEach((member: any) => {
              result.push(
                <div className={styles.item} key={member.id}>
                  <img src={member.image} alt={member.name} />
                  <p className={styles.name}>{member.name}</p>
                  <p className={styles.position}>{member.position}</p>
                </div>
              );
            });

            i += batchSize;
            firstBatch = false;

            result.push(
              <div className={styles.item} key={`empty-${i}-1`}></div>,
              <div className={styles.item} key={`empty-${i}-2`}></div>
            );
          }

          return result;
        })()}
      </div>
    </div>
  );
};

export default Team;
