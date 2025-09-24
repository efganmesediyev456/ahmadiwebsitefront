import { useEffect, useState } from "react";
import Header from "../inc/Header";
import Banner from "../whoweare/utils/Banner";
import CompanyAndDesign from "./Utils/CompanyAndDesign";
import CompanyDiscover from "./Utils/CompanyDiscover";
import Footer from "../inc/Footer";
import DropDownMenu from "../inc/DropDownMenu";
import PrettyLoader from "../../Loader/PrettyLoader";
import { useTranslations } from "../../hooks/useTranslations";

const WhoWeDo = () => {
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
    <PrettyLoader loading={loading}  pageName={t('who_we_do')}>
      {/* <SiteArrow/> */}
      <DropDownMenu
        showDropdown={showDropdown}
        handleHeaderClick={handleHeaderClick}
      />
      <Header handleHeaderClick={handleHeaderClick} />
      <Banner title={t('who_we_do')}/>
      <CompanyAndDesign />
      <CompanyDiscover />
      <Footer />
    </PrettyLoader>
  );
};

export default WhoWeDo;
