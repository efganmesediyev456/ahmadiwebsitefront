import styles from './Filter.module.css'

const Filter = () => {
  return (
    <div className={styles.filters}>
      <div className={styles.filter_left}>
        <select name="" id="">
            <option value="">Отрасли</option>
        </select>
        <select name="" id="">
            <option value="">Типы сайтов</option>
        </select>
      </div>
      <div className={styles.filter_right}>
        <select name="" id="">
            <option value="">Услуги</option>
        </select>
      </div>
    </div>
  )
}

export default Filter
