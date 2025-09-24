import { useEffect, useState } from "react";
import Header from "../inc/Header";
import Banner from "./utils/Banner";
import Company from "./utils/Company";
import ServiceGridArea from "./utils/ServiceGridArea";
import About from "./utils/About";
import CardStudio from "./utils/CardStudio";
import Footer from "../inc/Footer";
import SiteArrow from "../../ui/SiteArrow";
import DropDownMenu from "../inc/DropDownMenu";
import PrettyLoader from "../../Loader/PrettyLoader";
import { useTranslations } from "../../hooks/useTranslations";


const WhoWeAre = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(true);
  const {t} = useTranslations();


  const handleHeaderClick = () => {
    setShowDropdown(!showDropdown);
  };
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  })

  return (
    <PrettyLoader  loading={loading}  pageName={t("who_we_are")}>
      <DropDownMenu
        showDropdown={showDropdown}
        handleHeaderClick={handleHeaderClick}
      />

      <Header handleHeaderClick={handleHeaderClick} />
      <Banner title={t("who_we_are")} />
      <Company />
      <ServiceGridArea />
      <About />
      <CardStudio />
      <Footer type="white" />
      <SiteArrow />
    </PrettyLoader>
  );
};

export default WhoWeAre;
