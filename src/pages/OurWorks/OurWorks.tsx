import { useEffect, useState } from "react";
import Header from "../inc/Header";
import Banner from "./Utils/Banner";
import OurWorkSection from "./Utils/OurWorkSection";
import Footer from "../inc/Footer";
import DropDownMenu from "../inc/DropDownMenu";
import PrettyLoader from "../../Loader/PrettyLoader";

const OurWorks = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleHeaderClick = () => {
    setShowDropdown(!showDropdown);
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });
  return (
    <PrettyLoader  loading={loading} pageName="Our Works">
      {/* <SiteArrow/> */}
      <DropDownMenu
        showDropdown={showDropdown}
        handleHeaderClick={handleHeaderClick}
      />
      <Header handleHeaderClick={handleHeaderClick} />
      <Banner />
      <OurWorkSection />
      <Footer />
    </PrettyLoader>
  );
};

export default OurWorks;
