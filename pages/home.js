import React, {useState} from "react";
import {BsChevronDown} from "react-icons/bs";
import {useIntl} from "react-intl";
import Link from "next/link";
import {useRouter} from "next/router";
import {motion} from "framer-motion";
import {NextSeo} from 'next-seo';

import Menu from "../components/Menu";
import formatJsxMessage from "../utils/formatJsxMessage";
import ContactButton from "../components/ContactButton";
import {usePanelbear} from '@panelbear/panelbear-nextjs';

import {MotionLogo} from "../components/MotionLogo"
import Footer from "../components/Footer";
import styles from "../styles/home.module.scss";

const backgroundColor = "#f8d952";

export default function Home({updatePageTransition, textAnimationControls, handleBgColorChange, history, handleOpenNav, isNavOpen, ...rest}) {
    const {key, initial, animate, variants} = rest;
    const locale = useRouter().locale;

    const intl = useIntl();
    const f = (id, options) => formatJsxMessage(intl, locale, id, {
        shouldFade: true,
        animationControls: textAnimationControls,
        ...options,
    })

    function CustomApp({Component, pageProps}) {

        // Load Panelbear only once during the app lifecycle
        usePanelbear('BLavSVGQgtx');

        return <Component {...pageProps} />;
    }


    const [areServicesVisible, setAreServicesVisible] = useState(false);
    const [isApproachVisible, setIsApproachVisible] = useState(false);
    const [areProjectsVisible, setAreProjectsVisible] = useState(false);
    const [isWorkVisible, setIsWorkVisible] = useState(false);

    React.useEffect(() => handleBgColorChange(backgroundColor), [])

    return (


        <>

            <NextSeo
                title={locale !== "ar" ? "Mauzoun | Home" : "مَوْزوْن | البداية"}
                description={f("pageTitle")}
            />
            <div className="background-animation" style={{backgroundColor}}/>

            <motion.div
                key={key}
                initial={initial}
                animate={animate}
                variants={variants}
            >
                <ContactButton isNavOpen={isNavOpen} history={history}/>
                <div
                    style={{
                        position: "fixed",
                        display: "flex",
                        alignItems: "stretch",
                        width: "100%",
                        height: "100%",
                        overflowX: "hidden",
                    }}
                >
                    <div
                        className='bg-animation-home'
                        style={{
                            position: "relative",
                            width: "100%",
                            height: "100%",
                            zIndex: 8,
                            overflow: isNavOpen ? 'hidden' : null
                        }}
                    >

                        <MotionLogo/>
                        <Menu
                            backgroundColor={backgroundColor}
                            textAnimationControls={textAnimationControls}
                            isNavOpen={isNavOpen}
                            handleOpenNav={handleOpenNav}
                        />

                        <div className='container'>
                            <div className='container-background' style={{backgroundColor}}></div>
                            <div className='container-content'>
                                <div className={styles.homeText}>
                                    {f("home.para1")}
                                    {f("home.para2")}
                                </div>

                                <div className={styles.homeText}>
                                    {f("home.para3")}
                                </div>

                                <div className={styles.homeText}>
                                    {f("home.para4")}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            <Footer/>
        </>
    );
}
