import {useEffect, useState} from "react";
import Header from "../inc/Header";
import Footer from "../inc/Footer";
import SiteArrow from "../../ui/SiteArrow";
import DropDownMenu from "../inc/DropDownMenu";
import PrettyLoader from "../../Loader/PrettyLoader";
import styles from "./ApplyProject.module.css";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {useParams} from "react-router-dom";
import {useGetUslugiItemQuery} from "../../store/services/uslugiItemApi.ts";
import {p} from "framer-motion/client";
import {useGetSourceOptionQuery} from "../../store/services/sourceOptionApi.ts";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ApplyProject = () => {
    const [loading, setLoading] = useState(true);
    const [phone, setPhone] = useState("")

    const {lang} = useParams<{ lang: string }>();
    const {
        data: uslugiItems
    } = useGetUslugiItemQuery(lang);
    const {data: sourceOptions} =
        useGetSourceOptionQuery(lang);


    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    });


    const [showDropdown, setShowDropdown] = useState(false);

    const handleHeaderClick = () => {
        setShowDropdown(!showDropdown);
    };

    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [selectedUslugi, setSelectedUslugi] = useState<number[]>([]);
    const [selectedSource, setSelectedSource] = useState<number | null>(null);
    const [file, setFile] = useState<File | null>(null);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", name);
        formData.append("company", company);
        formData.append("email", email);
        formData.append("phone", phone);
        if (selectedSource) formData.append("source", selectedSource.toString());
        if (file) formData.append("file", file);

        selectedUslugi.forEach((id) => {
            formData.append("uslugi[]", id.toString());
        });

        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/apply-project`, {
                method: "POST",
                body: formData,
            });

            const data = await res.json();

            if (!res.ok || !data.success) {
                if (data.errors) {
                    Object.values(data.errors).forEach((errArr: any) => {
                        errArr.forEach((err: string) => toast.error(err));
                    });
                } else {
                    toast.error("Form göndərilərkən xəta baş verdi!");
                }
                return;
            }

            toast.success("Form uğurla göndərildi!");

            setName("");
            setCompany("");
            setEmail("");
            setPhone("");
            setSelectedUslugi([]);
            setSelectedSource(null);
            setFile(null);

        } catch (err) {
            console.error(err);
            toast.error("Form göndərilərkən server xətası baş verdi!");
        }


    };


    return (
        // <PrettyLoader loading={loading} pageName="ApplyProject">
        <div>

            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />


            <DropDownMenu
                showDropdown={showDropdown}
                handleHeaderClick={handleHeaderClick}
            />
            <Header handleHeaderClick={handleHeaderClick}/>

            <div className={styles.container}>
                <div className="container">
                    <div className={styles.apply_title}>
                        <h1>Заполните анкету,
                            чтобы обсудить проект</h1>
                        <div className={styles.right}>
                            <p>Оставьте заявку, либо звоните, мы пообщаемся
                                и сами все за вас заполним: +7 495 268-06-61</p>
                        </div>
                    </div>
                    <div className={styles.form}>
                        <div className={styles.left_form}>

                        </div>
                        <form className={styles.right_form} onSubmit={handleSubmit}>
                            <div className={styles.form_title}>
                                <p>Ваши контакты</p>
                            </div>

                            <div className={styles.vashiArea}>
                                <div className={styles.form_row}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="">Имя <span>*</span></label>
                                        <input type="text" className={styles.formControl}
                                               onChange={(e) => setName(e.target.value)}/>
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="">Компания <span>*</span></label>
                                        <input type="text" className={styles.formControl}
                                               onChange={(e) => setCompany(e.target.value)}/>
                                    </div>
                                </div>
                                <div className={styles.form_row}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="">E-mail <span>*</span></label>
                                        <input type="text" className={styles.formControl}
                                               onChange={(e) => setEmail(e.target.value)}/>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="">Phone <span>*</span></label>
                                        <PhoneInput
                                            country={'az'}
                                            value={phone}
                                            onChange={setPhone}
                                            inputStyle={{width: '100%'}} inputClass={styles.phoneControl}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className={styles.uslugiArea}>
                                <div className={styles.form_title}>
                                    <p>Услуги</p>
                                </div>
                                <div className={styles.uslugiItems}>
                                    {uslugiItems?.data?.map((item: any) => (
                                        <a
                                            href="#"
                                            key={item.id}
                                            className={`${styles.uslugiItem} ${selectedUslugi.includes(item.id) ? styles.active : ""}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                if (selectedUslugi.includes(item.id)) {
                                                    setSelectedUslugi(selectedUslugi.filter(id => id !== item.id));
                                                } else {
                                                    setSelectedUslugi([...selectedUslugi, item.id]);
                                                }
                                            }}
                                        >
                                            {item.title}
                                        </a>
                                    ))}
                                </div>
                            </div>


                            <div className={styles.projectArea}>
                                <div className={styles.form_title}>
                                    <p>О проекте</p>
                                </div>

                                <div className={styles.filesArea}>
                                    <h4 className={styles.fileTitle}>Расскажите о своем проекте</h4>

                                    <div className={styles.filesInput}>
                                        <ul>
                                            <li>1. Из какой вы компании, чем она занимается?</li>
                                            <li> 2. С чем мы можем помочь? Как представляете результат?</li>
                                            <li>3. На какой срок работы и бюджет рассчитываете?</li>
                                        </ul>

                                        <div className={styles.fileInput}>
                                            <label htmlFor="fileUpload">Прикпепить файл</label>

                                            <input
                                                type="file"
                                                id="fileUpload"
                                                onChange={(e) => setFile(e.target.files?.[0] || null)}
                                            />


                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 5V19" stroke="white" strokeWidth="1.5"
                                                      strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M5 12H19" stroke="white" strokeWidth="1.5"
                                                      strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>

                                    </div>
                                </div>
                            </div>


                            <div className={styles.uslugiArea}>
                                <div className={styles.form_title}>
                                    <p>Откуда вы узнали о нас?</p>
                                </div>
                                <div className={styles.uslugiItems}>


                                    {sourceOptions?.data?.map(item => (
                                        <a href="#"
                                           key={item.id}
                                           type="button"
                                           className={`${styles.uslugiItem} ${selectedSource === item.id ? styles.active : ""}`}
                                           onClick={(e) => {
                                               e.preventDefault();
                                               setSelectedSource(item.id)
                                           }}
                                        >
                                            {item.title}
                                        </a>
                                    ))}


                                </div>
                            </div>

                            <div className={styles.otpravitArea}>
                                <button className={styles.submitButton}>
                                    <span>ОТПРАВИТЬ ЗАЯВКУ</span>
                                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.6719 28.0078L42.0057 28.0078" stroke="#0038FF" strokeWidth="3.5"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M28.0156 11.6693L44.349 28.0026L28.0156 44.3359" stroke="#0038FF"
                                              strokeWidth="3.5" strokeLinecap="round"/>
                                    </svg>
                                </button>

                                <div className={styles.otpravitText}>
                                    <p>Нажимая кнопку “Отправить”, я даю согласие на обработку своих персональных данных
                                        и соглашаюсь с Условиями использования и Политикой конфиденциальности</p>
                                </div>
                            </div>


                        </form>
                    </div>
                </div>
            </div>

        </div>
        // </PrettyLoader>
    );
};

export default ApplyProject;
