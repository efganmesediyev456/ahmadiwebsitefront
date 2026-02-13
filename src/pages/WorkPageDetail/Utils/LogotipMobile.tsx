import styles from './LogotipMobile.module.css'
import {Splide, SplideSlide, SplideTrack, Splide as SplideType} from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; // default CSS
import {useRef} from "react";

const LogotipMobile = () => {
    const splideRef = useRef<SplideType | null>(null);


    return (
        <div>
            <div className={styles.container}>
                <div className='container'>
                    <div className={styles.titleContainer}>
                        <p>Логотип</p>
                        <p>Сформировать пространство для нового рынка услуг, разработать люксовый брендинг и
                            позиционирование, которые будут соответствовать бизнесу клиента и потребностям рынка ОАЭ.
                            Создать понятную систему дизайна, которая будет учитывать все элементы — от слогана до
                            размещения логотипа на сувенирной продукции.</p>
                    </div>


                </div>
            </div>

            <div className={styles.mobileSlideArea}>
                <Splide className={` ${styles.scrollSlide} ${styles.logotipSplide}`}
                        ref={splideRef} hasTrack={false}
                        options={{
                            perPage: 1,
                            type: "fade",
                            rewind: true,
                            autoplay: false,
                            pagination: false,
                            arrows: false,
                            gap: "0rem",
                            speed: 600
                        }}
                        aria-label="...">
                    <SplideTrack>
                        <SplideSlide className={styles.splide__slide}>

                            <div className={styles.slideImage_mobile}>
                                <div className={styles.slideImage_mobile}>
                                    <img src="/workpagedetail/img_1.png" alt="Slide 1"/>
                                </div>
                            </div>
                            <div className={styles.slideImage_mobile}>
                                <div className={styles.slideImage_mobile}>
                                    <img src="/workpagedetail/img_2.png" alt="Slide 1"/>
                                </div>
                            </div>
                        </SplideSlide>

                        <SplideSlide className={styles.splide__slide}>
                            <div className={styles.slideImage_mobile}>
                                <div className={styles.slideImage_mobile}>
                                    <img src="/workpagedetail/img_2.png" alt="Slide 1"/>
                                </div>
                            </div>
                            <div className={styles.slideImage_mobile}>
                                <div className={styles.slideImage_mobile}>
                                    <img src="/workpagedetail/img_1.png" alt="Slide 1"/>
                                </div>
                            </div>
                        </SplideSlide>

                        <SplideSlide className={styles.splide__slide}>
                            <div className={styles.slideImage_mobile}>
                                <div className={styles.slideImage_mobile}>
                                    <img src="/workpagedetail/img_1.png" alt="Slide 1"/>
                                </div>
                            </div>
                            <div className={styles.slideImage_mobile}>
                                <div className={styles.slideImage_mobile}>
                                    <img src="/workpagedetail/img_2.png" alt="Slide 1"/>
                                </div>
                            </div>
                        </SplideSlide>


                    </SplideTrack>

                    <div className={styles.splide_arrows}>
                        <button className="splide-left-arrow" onClick={() => splideRef.current?.splide.go("<")}>
                            <svg width="48" height="47" viewBox="0 0 48 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M45.1992 23.2422L6.19864 23.2422" stroke="#262728" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M24.1836 44.25L3.18359 23.25L24.1836 2.25" stroke="#262728" strokeWidth="4.5" stroke-linecap="round"/>
                            </svg>

                        </button>
                        <button className="splide-right-arrow" onClick={() => splideRef.current?.splide.go(">")}>
                            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.0156 36.0078L54.0162 36.0078" stroke="#E7E7E7" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M36.0313 15L57.0313 36L36.0312 57" stroke="#E7E7E7" strokeWidth="4.5" strokeLinecap="round"/>
                            </svg>
                        </button>
                    </div>
                </Splide>
            </div>
        </div>
    )
}

export default LogotipMobile
