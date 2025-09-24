import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import styles from "./ServiceSlider.module.scss";

const ServiceSlider = () => {
  return (
    <div className={styles.container}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView="auto"
        navigation={false}
        pagination={false}
        autoplay={false}
        loop={true}
        breakpoints={{
          360: {
            spaceBetween: 10
          },
        }}
      >
        <SwiperSlide className={styles.slideritem}>
          <div>Все-направления</div>
        </SwiperSlide>
        <SwiperSlide className={styles.slideritem}>
          <div>Дизайн</div>
        </SwiperSlide>
        <SwiperSlide className={styles.slideritem}>
          <div>Аналитика</div>
        </SwiperSlide>
        <SwiperSlide className={styles.slideritem}>
          <div>Техподдержка</div>
        </SwiperSlide>
        <SwiperSlide className={styles.slideritem}>
          <div>Продвижение сайтов</div>
        </SwiperSlide>
        <SwiperSlide className={styles.slideritem}>
          <div>Управление репутацией в сети</div>
        </SwiperSlide>
        <SwiperSlide className={styles.slideritem}>
          <div>Все-направления</div>
        </SwiperSlide>
        <SwiperSlide className={styles.slideritem}>
          <div>Дизайн</div>
        </SwiperSlide>
        <SwiperSlide className={styles.slideritem}>
          <div>Аналитика</div>
        </SwiperSlide>
        <SwiperSlide className={styles.slideritem}>
          <div>Техподдержка</div>
        </SwiperSlide>
        <SwiperSlide className={styles.slideritem}>
          <div>Продвижение сайтов</div>
        </SwiperSlide>
        <SwiperSlide className={styles.slideritem}>
          <div>Управление репутацией в сети</div>
        </SwiperSlide>
       
      </Swiper>

      
    </div>
  );
};

export default ServiceSlider;
