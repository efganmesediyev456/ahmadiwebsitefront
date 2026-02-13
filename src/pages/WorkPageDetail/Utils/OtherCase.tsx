import styles from './OtherCase.module.css'
import HomeTitle from "../../../ui/HomeTitle.tsx";
import HomeProjects from "../../home/utils/HomeProjects.tsx";
import {useTranslations} from "../../../hooks/useTranslations.tsx";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {fetchBannerDetailData} from "../../../features/banner/bannerDetailSlice.ts";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../store";


const OtherCase = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { t, isLoading } = useTranslations();
    const { lang } = useParams<{ lang: string }>();

    useEffect(() => {
        if (lang) {
            dispatch(fetchBannerDetailData(lang));
        }
    }, [lang, dispatch]);

    return (
        <div className={styles.container}>
            <div className="container">
                <HomeTitle
                    title={isLoading ? "Yüklənir..." : t("company")}
                    content={isLoading ? "Yüklənir..." : t("company_detail")}
                    lang = {lang}
                />

                <HomeProjects />
            </div>
        </div>
    )
}

export default OtherCase
