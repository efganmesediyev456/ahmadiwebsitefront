import styles from './Logotip.module.css'

const ScrollInside = () => {
    return (
        <div className={styles.scrollContainer}>
            <p className={styles.scollTitle}>Пролистывать внутри экрана</p>
            <div className={styles.scollArrow}>
                <svg width="47" height="48" viewBox="0 0 47 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.2656 2.25V41.2506" stroke="#E7E7E7" strokeWidth="4.5" strokeLinecap="round"
                          strokeLinejoin="round"/>
                    <path d="M44.25 23.25L23.25 44.25L2.25 23.25" stroke="#E7E7E7" strokeWidth="4.5"
                          strokeLinecap="round"/>
                </svg>
            </div>
        </div>
    )
}

export default ScrollInside
