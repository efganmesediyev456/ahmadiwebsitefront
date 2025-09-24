import { useEffect, useState } from "react";
import Header from "../inc/Header";
import WorkPageDetailBanner from "./Utils/WorkPageDetailBanner";
import AboutCase from "./Utils/AboutCase";
import DropDownMenu from "../inc/DropDownMenu";
import PrettyLoader from "../../Loader/PrettyLoader";

const WorkPageDetail = () => {
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
    <PrettyLoader loading={loading} pageName="Вебсайт компании ahmadiagency">
      <DropDownMenu
        showDropdown={showDropdown}
        handleHeaderClick={handleHeaderClick}
      />

      <Header handleHeaderClick={handleHeaderClick} />
      <WorkPageDetailBanner />
      <AboutCase />
    </PrettyLoader>
  );
};

export default WorkPageDetail;
