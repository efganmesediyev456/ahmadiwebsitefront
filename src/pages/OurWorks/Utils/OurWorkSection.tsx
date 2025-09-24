import styles from './OurWorkSection.module.css'
import Filter from './Inc/Filter'
import FilterCommercy from './Inc/FilterCommercy'
import WorkList from './Inc/WorkList'

const OurWorkSection = () => {
  return (
    <div className={styles.our_section}>
        <div className="container">
            <Filter/>
            <FilterCommercy/>
            <WorkList/>
        </div>
    </div>
  )
}

export default OurWorkSection
