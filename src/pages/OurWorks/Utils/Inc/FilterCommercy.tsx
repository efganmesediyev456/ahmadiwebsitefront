import styles from "./FilterCommercy.module.css";

const FilterCommercy = () => {
  return (
    <div className={styles.commercies_list}>
      <div className={styles.commercy_item}>e-commerce</div>
      <div className={styles.commercy_item}>Корпоративный сайт</div>
      <div className={styles.commercy_item}>Каталог и витрины</div>
      <div className={styles.commercy_item}>Портал</div>
      <div className={styles.commercy_item}>Продуктовые сайты</div>
      <div className={styles.commercy_item}>Продуктовые сайты</div>
      <div className={styles.commercy_item}>Система-сайтов</div>
      <div className={styles.commercy_item}>crm</div>
      <div className={styles.commercy_item}>Сервис</div>
    </div>
  );
};

export default FilterCommercy;
