import {useEffect, useState} from "react";
import Header from "../inc/Header";
import ContactBanner from "./Utils/ContactBanner";
import Footer from "../inc/Footer";
import SiteArrow from "../../ui/SiteArrow";
import DropDownMenu from "../inc/DropDownMenu";

const Contact = () => {
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    });

    const [showDropdown, setShowDropdown] = useState(false);

    const handleHeaderClick = () => {
        setShowDropdown(!showDropdown);
    };
    return (
        // <PrettyLoader loading={loading} pageName="Contacts">
        <>
            <DropDownMenu
                showDropdown={showDropdown}
                handleHeaderClick={handleHeaderClick}
            />
            <Header handleHeaderClick={handleHeaderClick}/>
            <SiteArrow/>
            <ContactBanner/>
            <Footer type="white" show="contact"/>
            <Footer/>
        </>
        // </PrettyLoader>
    );
};

export default Contact;
