import {Link, useParams} from "react-router-dom";
import styles from "./HeaderTop.module.scss";
import React, {useEffect, useState, useRef} from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGetSettingsQuery} from "../../../store/services/settingsApi";
import {useTranslations} from "../../../hooks/useTranslations";

interface HeaderTopProps {
    handleHeaderClick: () => void;
}

const HeaderTop: React.FC<HeaderTopProps> = ({handleHeaderClick}) => {
    const {lang} = useParams<{ lang: string }>();

    const {t} = useTranslations();

    const [langOpen, setLangOpen] = useState(false);
    const langRef = useRef<HTMLDivElement>(null);

    const {data, isLoading, error} = useGetSettingsQuery(lang);
    useEffect(() => {
        if (!isLoading && data) {
            ScrollTrigger.refresh();
        }
    }, [isLoading, data]);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (langRef.current && !langRef.current.contains(e.target as Node)) {
                setLangOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);


    return (
        <>
            {isLoading && <p>Yüklənir...</p>}
            {error && <p>Xəta baş verdi</p>}

            {!isLoading && !error && (
                <div className="container">
                    <div className={styles.container}>
                        <Link to="/" className={styles.logo}>
                            <img src={data?.header_logo} className={styles.logoImage}/>
                        </Link>
                        <div className={styles.menu_center}>
                            <Link to={`/${lang}/contact`}>{t('contacts')}</Link>
                        </div>
                        <div className={styles.menu_and_langauges}>
                            <div className={styles.languages} ref={langRef}>
                                <div className="language" onClick={() => setLangOpen(prev => !prev)}>
                                    <div>{(lang || 'az').toUpperCase()}</div>
                                    <div className={`${styles.language_dropdown} ${langOpen ? styles.active : ''}`}>
                                        {lang !== 'az' && <Link to="/az">AZ</Link>}
                                        {lang !== 'en' && <Link to="/en">EN</Link>}
                                        {lang !== 'ru' && <Link to="/ru">RU</Link>}
                                    </div>
                                </div>
                            </div>
                            <div
                                onClick={() => handleHeaderClick()}
                                className={styles.menu_open}
                            >
                                {t('menus')}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default HeaderTop;
