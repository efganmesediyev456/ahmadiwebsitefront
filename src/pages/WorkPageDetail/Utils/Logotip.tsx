import styles from './Logotip.module.css'
import ScrollInside from "./ScrollInside.tsx";
import { Splide, SplideSlide,SplideTrack,Splide as SplideType } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; // default CSS
import { useRef } from "react";


const Logotip = () => {
    const splideRef = useRef<SplideType | null>(null);

    return (
    <div className={styles.container}>
      <div className='container'>
          <p className={styles.title}>Логотип</p>
          <p className={styles.content}>Сформировать пространство для нового рынка услуг, разработать люксовый брендинг и позиционирование, которые будут соответствовать бизнесу клиента и потребностям рынка ОАЭ. Создать понятную систему дизайна, которая будет учитывать все элементы — от слогана до размещения логотипа на сувенирной продукции.</p>
          <ScrollInside/>
          <Splide   className={`splideGeneral ${styles.scrollSlide}`}
                    ref={splideRef} hasTrack={ false }  options={{ type: "loop", perPage: 1, autoplay: false, pauseOnHover: true, arrows: false, pagination: false, gap: "0rem", }} aria-label="...">
              <SplideTrack>
                  <SplideSlide className={styles.splide__slide}>
                      <div className={styles.slideImage}>
                          <img src="/workpagedetail/img.png" alt="Slide 1" />
                      </div>
                  </SplideSlide>
                  <SplideSlide className={styles.splide__slide}>
                      <div className={styles.slideImage}>
                          <img src="/workpagedetail/screencapture-jamilamusayeva-2025-11-03-02_12_12_page-0002.jpg" alt="Slide 1" />

                      </div>
                  </SplideSlide>
                  <SplideSlide className={styles.splide__slide}>
                      <div className={styles.slideImage}>
                          <img src="/workpagedetail/screencapture-jamilamusayeva-2025-11-03-02_12_12_page-0003.jpg" alt="Slide 1" />
                      </div>
                  </SplideSlide>

              </SplideTrack>

              <div className={styles.splide_arrows}>
                  <button className="splide-left-arrow" onClick={() => splideRef.current?.splide.go("<")}>
                      <svg width="48" height="47" viewBox="0 0 48 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M45.1992 23.2422L6.19864 23.2422" stroke="#E7E7E7" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M24.1836 44.25L3.18359 23.25L24.1836 2.25" stroke="#E7E7E7" strokeWidth="4.5" strokeLinecap="round"/>
                      </svg>
                  </button>
                  <button className="splide-right-arrow" onClick={() => splideRef.current?.splide.go(">")}>
                      <svg width="48" height="47" viewBox="0 0 48 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.25 23.2578L41.2506 23.2578" stroke="#E7E7E7" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M23.2656 2.25L44.2656 23.25L23.2656 44.25" stroke="#E7E7E7" strokeWidth="4.5" strokeLinecap="round"/>
                      </svg>
                  </button>
              </div>
          </Splide>
      </div>
    </div>
  )
}

export default Logotip
