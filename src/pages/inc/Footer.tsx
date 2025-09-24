import React from "react";
import styles from "./Footer.module.scss";
import { Link, useParams } from "react-router-dom";
import { useGetSettingsQuery } from "../../store/services/settingsApi";
import { useTranslations } from "../../hooks/useTranslations";

interface FooterProps {
  type?: "white" | "default"; 
  show?: "contact" | "default"; 
  dropdown?:boolean;
}

const Footer: React.FC<FooterProps> = ({ type, show, dropdown }) => {
  const isWhiteMode = type === "white";
  const isShowContact = show === "contact";
  const isDropDown = dropdown === true ? true : false;
  const { lang } = useParams<{ lang: string }>();
  const { data } = useGetSettingsQuery(lang);
  const { t, isLoading: isTranslate } = useTranslations();
  


  return (
    <>
      <footer
        className={`${styles.footer} ${isWhiteMode ? styles.whiteMode : ""}  ${isDropDown ? styles.dropDownMode : ""}`}
      >
        <div className={`${styles.dropdownContainer} container`}>
          <div className={styles.flexItems}>
            <div className={styles.footer1}>
              <div className={styles.contact}>ƏLAGƏ</div>
            </div>
            <div className={styles.footer2}>
              <div className={styles.item}>
                <span className={styles.letter}>P</span>
              </div>
              <div className={styles.item}>
                <Link to={data?.start_a_project_url || ''} className={styles.startProject}>
                  <svg
                    width="38"
                    height="39"
                    viewBox="0 0 38 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.50781 10.2578L27.1268 27.8768"
                      stroke="white"
                      strokeWidth="2.875"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M28.4818 10.2525V29.2266H9.50781"
                      stroke="white"
                      strokeWidth="2.875"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span>{!isTranslate && t("start_a_project")}</span>
                </Link>
              </div>
              <div className={styles.item}>
                <div className={styles.letterFlex}>
                  <span className={styles.letter}>E</span>
                  <span className={styles.letter}>C</span>
                </div>
              </div>

              <div className={styles.item}>
                <div className={styles.socials}>
                  <p className={styles.hello}>
                    hello <span>( a )</span> ahmadiagency.com
                  </p>
                  <div className={styles.flexWhatsap}>
                    <Link to={data?.whats_app || ''}>
                      <span>
                        <svg
                          width="38"
                          height="39"
                          viewBox="0 0 38 39"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.50781 10.2578L27.1268 27.8768"
                            stroke="white"
                            strokeWidth="2.875"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M28.4818 10.2525V29.2266H9.50781"
                            stroke="white"
                            strokeWidth="2.875"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                      <span>What’s app</span>
                    </Link>
                    <Link to={data?.telegram || ''}>
                      <span>
                        <svg
                          width="38"
                          height="39"
                          viewBox="0 0 38 39"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.50781 10.2578L27.1268 27.8768"
                            stroke="white"
                            strokeWidth="2.875"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M28.4818 10.2525V29.2266H9.50781"
                            stroke="white"
                            strokeWidth="2.875"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                      <span>Telegram</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.letterFlex}>
                  <span className={styles.letter}>T</span>
                  <span className={styles.letter}>S</span>
                </div>
              </div>

              <div className={styles.item}>
                <p className={styles.number}>(+994 55) 891 81 84</p>
                <div className={styles.social_platforms}>
                  <Link to={""}>
                    <svg
                      width="38"
                      height="39"
                      viewBox="0 0 38 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.50781 10.2578L27.1268 27.8768"
                        stroke="white"
                        strokeWidth="2.875"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M28.4818 10.2525V29.2266H9.50781"
                        stroke="white"
                        strokeWidth="2.875"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span>X</span>
                  </Link>
                  <Link to={""}>
                    <svg
                      width="38"
                      height="39"
                      viewBox="0 0 38 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.50781 10.2578L27.1268 27.8768"
                        stroke="white"
                        strokeWidth="2.875"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M28.4818 10.2525V29.2266H9.50781"
                        stroke="white"
                        strokeWidth="2.875"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span>Facebook</span>
                  </Link>
                  <Link to={""}>
                    <svg
                      width="38"
                      height="39"
                      viewBox="0 0 38 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.50781 10.2578L27.1268 27.8768"
                        stroke="white"
                        strokeWidth="2.875"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M28.4818 10.2525V29.2266H9.50781"
                        stroke="white"
                        strokeWidth="2.875"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span>In</span>
                  </Link>
                  <Link to={""}>
                    <svg
                      width="38"
                      height="39"
                      viewBox="0 0 38 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.50781 10.2578L27.1268 27.8768"
                        stroke="white"
                        strokeWidth="2.875"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M28.4818 10.2525V29.2266H9.50781"
                        stroke="white"
                        strokeWidth="2.875"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span>Instagram</span>
                  </Link>
                  <Link to={""}>
                    <svg
                      width="38"
                      height="39"
                      viewBox="0 0 38 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.50781 10.2578L27.1268 27.8768"
                        stroke="white"
                        strokeWidth="2.875"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M28.4818 10.2525V29.2266H9.50781"
                        stroke="white"
                        strokeWidth="2.875"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span>Be</span>
                  </Link>

                  <Link to={""}>
                    <svg
                      width="38"
                      height="39"
                      viewBox="0 0 38 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.50781 10.2578L27.1268 27.8768"
                        stroke="white"
                        strokeWidth="2.875"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M28.4818 10.2525V29.2266H9.50781"
                        stroke="white"
                        strokeWidth="2.875"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span>Youtube</span>
                  </Link>
                </div>
              </div>
              <div className={styles.item}>
                <span className={styles.letter}>A</span>
              </div>
              <div className={styles.item}>
                <p className={styles.address}>
                  {data?.address}
                </p>
                <Link to={data?.map} className={styles.google}>
                  <svg
                    width="38"
                    height="39"
                    viewBox="0 0 38 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.50781 10.2578L27.1268 27.8768"
                      stroke="white"
                      strokeWidth="2.875"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M28.4818 10.2525V29.2266H9.50781"
                      stroke="white"
                      strokeWidth="2.875"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span>Google map</span>
                </Link>
              </div>

              <div className={styles.item}><span className={styles.showInMobile}>©</span></div>
              <div className={styles.item}>
                <p className={styles.footerAuthor}><span className={styles.hideInMobile}>©</span> {data?.terms_and_condition} </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {isShowContact && (
        <>
          <div className={styles.map_area}>
            <img src="/contact/map.png" alt="" />
          </div>

          <div className={styles.contactCenter}>
            <div className="container">
              <div className={styles.contact_area}>
                <div className={styles.contact_left}>
                  <p>START A PROJECT</p>
                </div>
                <div className={styles.contact_right}>
                  <h3>Ваши контакты</h3>
                  <form>
                    <div className={styles.form_row}>
                      <div className={styles.form_group}>
                        <input type="text" placeholder="" />
                        <label htmlFor="">
                          <span>Имя</span>
                          <span>*</span>
                        </label>
                      </div>

                      <div className={styles.form_group}>
                        <input type="text" placeholder="" />
                        <label htmlFor="">
                          <span>Имя</span>
                          <span>*</span>
                        </label>
                      </div>
                    </div>

                    <div className={styles.form_group}>
                      <input type="text" placeholder="" />
                      <label htmlFor="">
                        <span>Имя</span>
                        <span>*</span>
                      </label>
                    </div>

                    <div className={styles.project}>
                      <h3>О проекте</h3>
                      <h2>Расскажите о своем проекте</h2>
                      <div className={styles.project_area}>
                        <div className={styles.left}>
                          <ul>
                            <li>
                              1. Из какой вы компании, чем она занимается?
                            </li>
                            <li>
                              2. С чем мы можем помочь? Как представляете
                              результат?
                            </li>
                            <li>
                              {" "}
                              3. На какой срок работы и бюджет рассчитываете?
                            </li>
                            <li>
                              4. Напишите, если удобнее общаться в мессенджере.
                            </li>
                          </ul>
                        </div>
                        <div className={styles.right}>
                          <div className={styles.add_button}>
                            <button>
                              <span>Прикпепить файл</span>
                              <span>+</span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className={styles.otpravit_area}>
                        <div className={styles.left}>
                          <div className={styles.left_flex}>
                            <span>ОТПРАВИТЬ ЗАЯВКУ</span>
                            <span>
                              <svg
                                width="38"
                                height="38"
                                viewBox="0 0 38 38"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M2.67188 19.0078L33.0057 19.0078"
                                  stroke="#0038FF"
                                  strokeWidth="3.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M19.0156 2.66927L35.349 19.0026L19.0156 35.3359"
                                  stroke="#0038FF"
                                  strokeWidth="3.5"
                                  strokeLinecap="round"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>

                        <div className={styles.right}>
                          <p>
                            Нажимая кнопку “Отправить”, я даю согласие на
                            обработку своих персональных данных и соглашаюсь с
                            Условиями использования и Политикой
                            конфиденциальности
                          </p>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Footer;
