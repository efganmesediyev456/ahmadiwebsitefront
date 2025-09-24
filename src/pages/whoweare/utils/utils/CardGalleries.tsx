import { useParams } from "react-router-dom";
import styles from "./CardGalleries.module.scss";
import { useGetOurStudioGalleryQuery } from "../../../../store/services/ourStudioGalleryApi";

const CardGalleries = () => {
  const { lang } = useParams<{ lang: string }>();
  const { data, isLoading, error } = useGetOurStudioGalleryQuery(lang);
  return (
    <div className={styles.container}>
      {isLoading && <p>Yüklənir...</p>}
      {error && <p>Xəta baş verdi</p>}

      {data?.data?.map((item: any) => {
        return (
          <div key={item.id} className={styles.item}>
            <img src={item.image} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default CardGalleries;
