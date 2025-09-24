import { useEffect } from "react";
import classNames from "classnames";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./DropDownMenu.module.scss";
import Header from "./Header";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

type DropDownMenuProps = {
  showDropdown: boolean;
  handleHeaderClick: () => void;
};

const DropDownMenu: React.FC<DropDownMenuProps> = ({
  showDropdown,
  handleHeaderClick,
}) => {

 const params = useParams<{ lang?: string }>();
 const lang = params.lang || 'en';


  useEffect(() => {
    const texts = document.querySelectorAll(".menuText") || HTMLElement;

    texts.forEach((text) => {
      const letters = (text.textContent || "").split("");
      text.innerHTML = letters
        .map((letter) => `<span>${letter}</span>`)
        .join("");

      gsap.from(text.querySelectorAll("span"), {
        duration: 1.5,
        opacity: 0,
        y: 100,
        stagger: 0.1,
        ease: "power3.out",
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [showDropdown]);

  return (
    <div
      className={`${classNames("dropdown-menu", {
        "dropdown-menu--visible": showDropdown,
      })} ${styles.dropdownMenu}`}
    >
      <Header handleHeaderClick={handleHeaderClick} />
      <div className={`${styles.containerBack} container `}>
        <div className={styles.menuContainer}>
          <h1 className={`${styles.menuText} ${styles.menuTitle} menuText`}>
            Menu
          </h1>
          <ul className={styles.ulList}>
            <li>
              <Link to={`/${lang}/whoweare`} className={styles.menuLink}>
                <span className={styles.menuIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                  >
                    <path
                      d="M15.1484 15.1562L42.726 42.7338"
                      stroke="white"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M44.8469 15.1453V44.8438H15.1484"
                      stroke="white"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span className={`menuText ${styles.menuItemName}`}>
                  Who We Are
                </span>
              </Link>
            </li>
            <li>
              <Link to={`/${lang}/whowedo`}  className={styles.menuLink}>
                <span className={styles.menuIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                  >
                    <path
                      d="M15.1484 15.1562L42.726 42.7338"
                      stroke="white"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M44.8469 15.1453V44.8438H15.1484"
                      stroke="white"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span className={`menuText ${styles.menuItemName}`}>
                  What We Do
                </span>
              </Link>
            </li>
            <li>
              <Link to={`/${lang}/ourworks`}  className={styles.menuLink}>
                <span className={styles.menuIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                  >
                    <path
                      d="M15.1484 15.1562L42.726 42.7338"
                      stroke="white"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M44.8469 15.1453V44.8438H15.1484"
                      stroke="white"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span className={`menuText ${styles.menuItemName}`}>
                  Our Works
                </span>
              </Link>
            </li>
            <li>
              <Link to={`/${lang}/contact`}  className={styles.menuLink}>
                <span className={styles.menuIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                  >
                    <path
                      d="M15.1484 15.1562L42.726 42.7338"
                      stroke="white"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M44.8469 15.1453V44.8438H15.1484"
                      stroke="white"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span className={`menuText ${styles.menuItemName}`}>
                  Contacts
                </span>
              </Link>
            </li>
            {/* ))} */}
          </ul>
        </div>
        <Footer dropdown={true} />
      </div>
    </div>
  );
};

export default DropDownMenu;
