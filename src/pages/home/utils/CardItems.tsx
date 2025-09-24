import styles from "./CardItems.module.scss";
import MoreDetail from "../../../ui/MoreDetail";
import AutoTextAnimation from "../../../gsap/AutoTextAnimation";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power1, Power3, CustomEase } from "gsap/all";
import { useGetCompanyAboutsQuery } from "../../../store/services/companyAboutApi";
import { useParams } from "react-router-dom";
import { useTranslations } from "../../../hooks/useTranslations";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);

type NullableDiv = HTMLDivElement | null;

const CardItems = () => {
  const { t, isLoading: isTranslate } = useTranslations();
  
  const cardResourceRef = useRef<NullableDiv>(null);
  const developmenResourceRef = useRef<NullableDiv>(null);
  const extensionResourceRef = useRef<NullableDiv>(null);
  const tweenResourcheRef = useRef<gsap.core.Timeline | null>(null);
  const tweenExtensionResourcheRef = useRef<gsap.core.Timeline | null>(null);
  const tweenDevelopmentResourchRef = useRef<gsap.core.Timeline | null>(null);

  const researchAnimationHover = (card: HTMLElement) => {
    if (tweenResourcheRef.current) {
      tweenResourcheRef.current.kill();
    }

    const paths = card.querySelectorAll("path");

    const timeline = gsap.timeline({
      repeat: -1,
      onStart: () => card.classList.add("is-active"),
      onComplete: () => {
        timeline.progress(0).pause();
      },
      onReverseComplete: () => card.classList.remove("is-active"),
    });

    timeline.to(paths, {
      duration: 0.4,
      xPercent: (index: number, el: HTMLElement) => {
        index = index + 1;
        return parseFloat(el.dataset.xpercent || "0");
      },
      ease: Power1.easeInOut,
    });

    timeline.to(paths, {
      duration: 0.8,
      xPercent: (i: number, el: HTMLElement) => {
        i = i + 1;
        const xPercent = el.dataset.xPercent
          ? parseFloat(el.dataset.xPercent)
          : 0;
        return xPercent;
      },
      ease: Power1.easeInOut,
    });

    timeline.to(paths, {
      duration: 2.2,
      xPercent: 0,
      ease: CustomEase.create(
        "custom",
        "M0,0,C0.14,0,0.242,0.438,0.272,0.561,0.313,0.728,0.344,1.18,0.43,1.13,0.478,1.096,0.494,0.924,0.562,0.924,0.652,0.924,0.662,1.11,0.72,1.014,0.782,0.93,0.82,1.024,0.856,1.024,0.888,1.024,0.898,0.984,0.934,0.984,0.968,0.984,1,1,1,1"
      ),
    });

    tweenResourcheRef.current = timeline;
  };

  const handleMouseLeave = () => {
    if (tweenResourcheRef.current) {
      tweenResourcheRef.current.progress(0).pause();
    }
    cardResourceRef.current?.classList.remove("is-active");
  };
  const handleExtensionMouseLeave = () => {
    if (tweenExtensionResourcheRef.current) {
      tweenExtensionResourcheRef.current.progress(0).pause();
    }
    extensionResourceRef.current?.classList.remove("is-active");
  };

  //// second animation

  const handleDevelopmentMouseLeave = () => {
    if (tweenDevelopmentResourchRef.current) {
      tweenDevelopmentResourchRef.current.reverse();
    }
    developmenResourceRef.current?.classList.remove("is-active");
  };

  const developmentAnimation = (development: HTMLElement) => {
    if (tweenDevelopmentResourchRef.current) {
      tweenDevelopmentResourchRef.current.progress(0).pause();
      tweenDevelopmentResourchRef.current.kill();
    }
    const groups = development.querySelectorAll("g");
    const timeline = gsap.timeline({
      repeat: -1,
      onStart: () => development.classList.add("is-active"),
      onComplete: () => {
        timeline.progress(0).pause();
      },
    });

    timeline.to(groups, {
      duration: 0.8,
      rotation: (i, el) => {
        i = i + 1;
        return parseFloat(el.dataset.angle) + 90;
      },
      ease: Power3.easeInOut,
      stagger: 0.5,
      transformOrigin: "50% 50%",
    });

    tweenDevelopmentResourchRef.current = timeline;
  };

  const extensionAnimation = (extension: HTMLElement) => {
    if (tweenExtensionResourcheRef.current) {
      tweenExtensionResourcheRef.current.kill();
    }
    const polygons = extension.querySelectorAll("polygon");
    const timeline = gsap.timeline({
      repeat: -1,
      onStart: () => extension.classList.add("is-active"),
      onComplete: () => {
        timeline.progress(0).pause();
      },
    });

    const delay = 0.3;
    timeline
      .to(polygons, {
        duration: 0.5,
        attr: {
          points: (i: number, el: HTMLElement) => {
            i = i + 1;
            return el.dataset.to || "";
          },
        },
        ease: Power1.easeIn,
      })
      .to(polygons, {
        duration: 0.5,
        x: -30,
        ease: Power1.easeIn,
        stagger: delay,
      })
      .to(polygons, {
        duration: 1,
        x: 30,
        ease: Power1.easeIn,
        stagger: delay,
      })
      .to(polygons, {
        duration: 0.5,
        x: 0,
        ease: Power1.easeIn,
      });

    tweenExtensionResourcheRef.current = timeline;
  };

  const { lang } = useParams<{ lang: string }>();
  const { data, isLoading, error } = useGetCompanyAboutsQuery(lang);

  useEffect(() => {
  gsap.registerPlugin(ScrollTrigger, CustomEase);  // ScrollTrigger ve CustomEase'ın doğru şekilde kaydedildiğinden emin olun.
}, []);

  useEffect(() => {
    if (!isLoading && data) {
      ScrollTrigger.refresh();
    }
  }, [isLoading]);

  useEffect(() => {
    const triggers: ScrollTrigger[] = [];

    gsap.utils.toArray(".service-one-section").forEach((panel, i) => {
      i = i + 1;

      const trigger = ScrollTrigger.create({
        trigger: panel as HTMLElement,
        start: "top top",
        pin: true,
        pinSpacing: false,
        scrub: true,
        // markers:true,
      });
      triggers.push(trigger);
    });

    gsap.utils.toArray(".service-end-section").forEach((panel, i) => {
      i = i + 1;
      const trigger = ScrollTrigger.create({
        trigger: panel as HTMLElement,
        start: "top top",
        pin: true,
        pinSpacing: false,
        scrub: true,
        end: "-=400px",
      });
      triggers.push(trigger);
    });



    return () => {
      ScrollTrigger.killAll();
    };
  }, [data, isLoading]);

  return (
    <>
      {isLoading && <p>Yüklənir...</p>}
      {error && <p>Xəta baş verdi</p>}

      

          <div
            style={{ zIndex: 1 }}
            className={`${styles.container} ${styles.heightScreen} service-one-section`}
          >
            <div className="container">
              <div className={styles.title}>
                <AutoTextAnimation key={`title-${lang}-${t('company')}`}>
                  <p>{!isTranslate &&  t('company') }</p>
                </AutoTextAnimation>
                <AutoTextAnimation key={`title-${lang}-${t('combinedDescription')}`}>
                  <span>
                   {!isTranslate &&  t('combinedDescription') }
                  </span>
                </AutoTextAnimation>
              </div>

              <div className={`${styles.card_item}`}>
                <div className={styles.left}>
                  <AutoTextAnimation>
                    <span>{data?.data[0]?.title}</span>
                  </AutoTextAnimation>
                  <AutoTextAnimation>
                    <p>
                      {data?.data[0]?.subtitle}
                    </p>
                  </AutoTextAnimation>
                  <MoreDetail title={!isTranslate &&  t('more') } url={data?.data[0]?.url}/>
                </div>
                <div className={styles.right}>
                  <div
                    ref={cardResourceRef}
                    data-direction="research"
                    onMouseEnter={(e) =>
                      researchAnimationHover(e.currentTarget)
                    }
                    onMouseLeave={handleMouseLeave}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 300 300"
                      className={`${styles.svgItem}`}
                    >
                      <title></title>
                      <path
                        data-xpercent="4"
                        d="M149.76,272.61C82.52,282.06,27.93,230.7,28.06,158.14S83,18.84,150.25,9.39s121.82,41.9,121.69,114.47S217,263.16,149.76,272.61"
                        fill="none"
                        stroke="#d5d5d5"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        opacity="0.05"
                      />
                      <g opacity="0.1">
                        <path
                          data-xpercent="-14"
                          d="M150.21,28.61C92.79,36.68,46,93.66,45.87,155.64S92.37,261.47,149.8,253.4s104.22-65.06,104.34-127S207.63,20.54,150.21,28.61"
                          fill="none"
                          stroke="#d5d5d5"
                          strokeMiterlimit="10"
                          strokeWidth="6"
                        />
                      </g>
                      <g opacity="0.2">
                        <path
                          data-xpercent="10"
                          d="M150.16,55.5C106.48,61.64,70.88,105,70.79,152.13s35.37,80.51,79.05,74.37,79.28-49.48,79.37-96.63S193.84,49.36,150.16,55.5"
                          fill="none"
                          stroke="#d5d5d5"
                          strokeMiterlimit="10"
                          strokeWidth="6"
                        />
                      </g>
                      <g opacity="0.6">
                        <path
                          data-xpercent="-30"
                          d="M150.11,82.4c-29.94,4.21-54.34,33.91-54.4,66.23s24.24,55.18,54.18,51,54.34-33.92,54.4-66.23-24.24-55.18-54.18-51"
                          fill="none"
                          stroke="#d5d5d5"
                          strokeMiterlimit="10"
                          strokeWidth="8"
                        />
                      </g>
                      <path
                        className="has-fill"
                        data-xpercent="30"
                        d="M150.07,107.38c-17.19,2.41-31.18,19.45-31.22,38s13.91,31.66,31.09,29.25,31.17-19.47,31.21-38S167.24,105,150.07,107.38Z"
                        fill="#d5d5d5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ zIndex: 2 }}
            className={`service-one-section ${styles.heightScreen} ${styles.containerWhite}`}
          >
            <div className="container">
              <div className={styles.card_item}>
                <div className={styles.left}>
                  <AutoTextAnimation>
                    <span>{data?.data[1]?.title}</span>
                  </AutoTextAnimation>
                  <AutoTextAnimation>
                    <p>
                      {data?.data[1]?.title}
                    </p>
                  </AutoTextAnimation>
                  <MoreDetail title={!isTranslate &&  t('more') } />
                </div>
                <div className={styles.right}>
                  <div
                    onMouseEnter={(e) => extensionAnimation(e.currentTarget)}
                    onMouseLeave={handleExtensionMouseLeave}
                    ref={extensionResourceRef}
                  >
                    <svg
                      className={`${styles.svgItem}`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 300 300"
                    >
                      <title></title>
                      <polygon
                        className="has-fill"
                        data-origin="250 113.5 150 182.47 50 113.5 150 44.53 250 113.5"
                        data-to="250 79 150 147.97 50 79 150 10.03 250 79"
                        points="250 113.5 150 182.47 50 113.5 150 44.53 250 113.5"
                        fill="#d5d5d5"
                        stroke="#d5d5d5"
                        strokeMiterlimit="10"
                        strokeWidth="10"
                      />
                      <polygon
                        data-origin="250 135.5 150 204.47 50 135.5 150 66.53 250 135.5"
                        data-to="250 115 150 183.97 50 115 150 46.03 250 115"
                        points="250 135.5 150 204.47 50 135.5 150 66.53 250 135.5"
                        fill="none"
                        stroke="#d5d5d5"
                        strokeMiterlimit="10"
                        strokeWidth="8"
                        opacity="0.6"
                        style={{ isolation: "isolate" }}
                      />
                      <polygon
                        data-origin="250 151.5 150 220.47 50 151.5 150 82.53 250 151.5"
                        data-to="250 151 150 219.97 50 151 150 82.03 250 151"
                        points="250 151.5 150 220.47 50 151.5 150 82.53 250 151.5"
                        fill="none"
                        stroke="#d5d5d5"
                        strokeMiterlimit="10"
                        strokeWidth="6"
                        opacity="0.2"
                        style={{ isolation: "isolate" }}
                      />
                      <polygon
                        data-origin="250 170.5 150 239.47 50 170.5 150 101.53 250 170.5"
                        data-to="250 190 150 258.97 50 190 150 121.03 250 190"
                        points="250 170.5 150 239.47 50 170.5 150 101.53 250 170.5"
                        fill="none"
                        stroke="#d5d5d5"
                        strokeMiterlimit="10"
                        strokeWidth="4"
                        opacity="0.1"
                        style={{ isolation: "isolate" }}
                      />
                      <polygon
                        data-origin="250 186.5 150 255.47 50 186.5 150 117.53 250 186.5"
                        data-to="250 226 150 294.97 50 226 150 157.03 250 226"
                        points="250 186.5 150 255.47 50 186.5 150 117.53 250 186.5"
                        fill="none"
                        stroke="#d5d5d5"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        opacity="0.05"
                        style={{ isolation: "isolate" }}
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ zIndex: 3 }}
            className={`service-end-section ${styles.heightScreen} ${styles.containerBlack}`}
          >
            <div className="container">
              <div className={styles.card_item}>
                <div className={styles.left}>
                  <AutoTextAnimation>
                    <span>{data?.data[2]?.title}</span>
                  </AutoTextAnimation>
                  <AutoTextAnimation>
                    <p>
                     {data?.data[2]?.subtitle}
                    </p>
                  </AutoTextAnimation>
                  <MoreDetail title={!isTranslate &&  t('more') } />
                </div>
                <div className={styles.right}>
                  <div
                    className=""
                    onMouseEnter={(e) => developmentAnimation(e.currentTarget)}
                    ref={developmenResourceRef}
                    onMouseLeave={handleDevelopmentMouseLeave}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 300 300"
                      className={`${styles.svgItem}`}
                    >
                      <line
                        x1="150"
                        y1="50"
                        x2="150"
                        y2="250"
                        fill="none"
                        stroke="#d5d5d5"
                        strokeMiterlimit="10"
                        strokeWidth="8"
                      />
                      <line
                        x1="50"
                        y1="150"
                        x2="250"
                        y2="150"
                        fill="none"
                        stroke="#d5d5d5"
                        strokeMiterlimit="10"
                        strokeWidth="8"
                      />

                      <g
                        opacity="0.6"
                        data-angle="22.5"
                        style={{ isolation: "isolate" }}
                      >
                        <line
                          x1="150"
                          y1="50"
                          x2="150"
                          y2="250"
                          fill="none"
                          stroke="#d5d5d5"
                          strokeMiterlimit="10"
                          strokeWidth="8"
                        />
                        <line
                          x1="50"
                          y1="150"
                          x2="250"
                          y2="150"
                          fill="none"
                          stroke="#d5d5d5"
                          strokeMiterlimit="10"
                          strokeWidth="8"
                        />
                      </g>
                      <g
                        opacity="0.2"
                        data-angle="67.5"
                        style={{ isolation: "isolate" }}
                      >
                        <line
                          x1="150"
                          y1="50"
                          x2="150"
                          y2="250"
                          fill="none"
                          stroke="#d5d5d5"
                          strokeMiterlimit="10"
                          strokeWidth="6"
                        />
                        <line
                          x1="50"
                          y1="150"
                          x2="250"
                          y2="150"
                          fill="none"
                          stroke="#d5d5d5"
                          strokeMiterlimit="10"
                          strokeWidth="6"
                        />
                      </g>
                      <g
                        opacity="0.1"
                        data-angle="45"
                        style={{ isolation: "isolate" }}
                      >
                        <line
                          x1="150"
                          y1="50"
                          x2="150"
                          y2="250"
                          fill="none"
                          stroke="#d5d5d5"
                          strokeMiterlimit="10"
                          strokeWidth="4"
                        />
                        <line
                          x1="50"
                          y1="150"
                          x2="250"
                          y2="150"
                          fill="none"
                          stroke="#d5d5d5"
                          strokeMiterlimit="10"
                          strokeWidth="4"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
    </>
  );
};

export default CardItems;
