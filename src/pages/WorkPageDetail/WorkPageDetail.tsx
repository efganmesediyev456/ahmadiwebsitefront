import {useEffect, useState} from "react";
import Header from "../inc/Header";
import WorkPageDetailBanner from "./Utils/WorkPageDetailBanner";
import AboutCase from "./Utils/AboutCase";
import DropDownMenu from "../inc/DropDownMenu";
import PrettyLoader from "../../Loader/PrettyLoader";
import Logotip from "./Utils/Logotip.tsx";
import LogotipMobile from "./Utils/LogotipMobile.tsx";
import LogotipDetail from "./Utils/LogotipDetail.tsx";
import OtherCase from "./Utils/OtherCase.tsx";
import Footer from "../inc/Footer.tsx";
import SiteArrow from "../../ui/SiteArrow.tsx";

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
            <div>
                <DropDownMenu
                    showDropdown={showDropdown}
                    handleHeaderClick={handleHeaderClick}
                />
                <Header handleHeaderClick={handleHeaderClick}/>
                <WorkPageDetailBanner/>
                <AboutCase/>
                <Logotip/>
                <LogotipMobile/>
                <LogotipDetail/>
                <OtherCase/>
                <Footer type={undefined} show={undefined} />
                <SiteArrow />


            </div>
          </PrettyLoader>
    );
};

export default WorkPageDetail;
