import styles from './CompanyItem.module.scss'

const CompanyItem = () => {
  return (
    <div className={styles.flex}>
      <div className={styles.flex1}>
        ( 1 )
      </div>
      <div className={styles.flex2}>
            <div className={styles.flex_title}>Discovery</div>
            <ul>
                <li>
                    <span>A</span>
                    <span>User testing</span>
                </li>
                <li>
                    <span>A</span>
                    <span>User testing</span>
                </li>
                <li>
                    <span>A</span>
                    <span>User testing</span>
                </li>
                <li>
                    <span>A</span>
                    <span>User testing</span>
                </li>
                <li>
                    <span>A</span>
                    <span>User testing</span>
                </li>
                <li>
                    <span>A</span>
                    <span>User testing</span>
                </li>
            </ul>
      </div>
    </div>
  )
}

export default CompanyItem
