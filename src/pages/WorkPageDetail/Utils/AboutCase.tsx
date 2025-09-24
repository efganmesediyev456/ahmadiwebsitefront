import styles from './AboutCase.module.css'

const AboutCase = () => {
  return (
    <div className={styles.container}>
      <div className='container'>
        <div className={styles.about_case}>
            <div className={styles.about_left}><p>ABOUT CASE</p></div>
            <div className={styles.about_right}>
                <div className={styles.about_title}>Сибур — ключевой производитель полимеров и каучуков, лидер в глобальной нефтехимии.</div>
                <div className={styles.about_content}>Сформировать пространство для нового рынка услуг, разработать люксовый брендинг и позиционирование, которые будут соответствовать бизнесу клиента и потребностям рынка ОАЭ. Создать понятную систему дизайна, которая будет учитывать все элементы — от слогана до размещения логотипа на сувенирной продукции.</div>
                <div className={styles.about_three}>
                    <div className={styles.about_three_one}>
                        <p>Работа над проектом</p>
                        <span>3 месяца</span>
                    </div>
                    <div className={styles.about_three_one}>
                        <p>Год запуска проекта</p>
                        <span>2024 год</span>
                    </div>
                    <div className={styles.about_three_one}>
                        <p>Число страниц</p>
                        <span>100+ страниц</span>
                    </div>
                </div>

                <div className={styles.about_problema}>
                    <div className={styles.about_problema_item}>
                        <h3>Проблема</h3>
                        <p>Сформировать пространство для нового рынка услуг, разработать люксовый брендинг и позиционирование, которые будут соответствовать бизнесу клиента и потребностям рынка ОАЭ. Создать понятную систему дизайна, которая будет учитывать все элементы — от слогана до размещения логотипа на сувенирной продукции.</p>
                    </div>
                    <div className={styles.about_problema_item}>
                        <h3>Решение</h3>
                        <p>Сформировать пространство для нового рынка услуг, разработать люксовый брендинг и позиционирование, которые будут соответствовать бизнесу клиента и потребностям рынка ОАЭ. Создать понятную систему дизайна, которая будет учитывать все элементы — от слогана до размещения логотипа на сувенирной продукции.</p>
                    </div>
                </div>


            </div>
        </div>
        <div className={styles.uslugies}>
            <div className={styles.uslugies_title}>УСЛУГИ</div>
            <div className={styles.uslugies_right}>
                <div className={styles.uslugies_items}>
                    <div className={styles.uslugies_item}>UX/UI дизайн</div>
                    <div className={styles.uslugies_item}>Дизайн-системы</div>
                    <div className={styles.uslugies_item}>Брендинг</div>
                    <div className={styles.uslugies_item}>3D-визуализация</div>
                    <div className={styles.uslugies_item}>Графический дизайн</div>
                    <div className={styles.uslugies_item}>Дизайн-поддержка</div>
                </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default AboutCase
