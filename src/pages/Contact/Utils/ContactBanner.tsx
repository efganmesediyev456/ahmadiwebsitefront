import styles from './ContactBanner.module.css'

const ContactBanner = () => {
  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.row1}>
          <p className={styles.we_create}>
          Contacts
          </p>
        </div>
        <div className={styles.row2}>
          <div className={styles.row2_position}>
            <p>
              Only — digital–агентство с фокусом на сильную аналитику, дизайн и
              разработку. В основе наших проектов лежат идеи, создаваемые на
              стыке стратегии, креатива и технологий.
            </p>
         
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactBanner
