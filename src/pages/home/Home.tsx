import { useEffect, useState } from "react";
import Header from "../inc/Header";
import Banner from "./utils/Banner";
import HomeDetail from "./utils/HomeDetail";
import MobileProgram from "./utils/MobileProgram";
import Service from "./utils/Service";
import CardItems from "./utils/CardItems";
import Company from "./utils/Company";
import MarqueeLists from "./utils/MarqueeLists";
import Footer from "../inc/Footer";
import SiteArrow from "../../ui/SiteArrow";
import DropDownMenu from "../inc/DropDownMenu";
import PrettyLoader from "../../Loader/PrettyLoader";
import { useParams } from "react-router-dom";
import { useTranslations } from "../../hooks/useTranslations";

const Home = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(true);
  const { lang } = useParams<{ lang: string }>();
  const { t } = useTranslations();

  const handleHeaderClick = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    if (showDropdown) {
      document.body.classList.add("scrollHidden");
    } else {
      document.body.classList.remove("scrollHidden");
    }

    setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      document.body.classList.remove("scrollHidden");
    };
  }, [showDropdown]);

  return (
    <PrettyLoader pageName={t('home_page')} loading={loading}>
      <DropDownMenu
        showDropdown={showDropdown}
        handleHeaderClick={handleHeaderClick}
      />
      <Header handleHeaderClick={handleHeaderClick} />
      <Banner />
      <HomeDetail />
      <MobileProgram />
      <Service />
      <CardItems />
      <Company />
      <MarqueeLists />
      <Footer type={undefined} show={undefined} />
      <SiteArrow />
    </PrettyLoader>
  );
};

export default Home;
