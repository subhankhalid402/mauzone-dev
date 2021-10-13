import React, { useState } from "react";
import { useIntl } from "react-intl";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { NextSeo } from 'next-seo';
import styles from "../styles/blog.module.scss";
import Menu from "../components/Menu";
import ReadMore from "../components/ReadMore";

import formatJsxMessage from "../utils/formatJsxMessage";
import ComingSoon from "../components/ComingSoon";
import { MotionLogo } from "../components/MotionLogo"
import ContactButton from "../components/ContactButton";
import Footer from "../components/Footer";


const backgroundColor = "#f7f5f0";

const blogImage = "/Story.png";


export default function blog({ textAnimationControls, handleBgColorChange, handleOpenNav, history, isNavOpen, ...rest }) {
  const locale = useRouter().locale;
  const { key, initial, animate, variants } = rest;

  const intl = useIntl();
  const f = (id, options) =>
    formatJsxMessage(intl, locale, id, {
      shouldFade: true,
      animationControls: textAnimationControls,
      ...options,
    });

  React.useEffect(() => handleBgColorChange(backgroundColor), []);

  return (
    <>
      <NextSeo
        title={locale !== "ar" ? "Mauzoun | Our Blog" : "مَوْزوْن | مدوّنتنا"}
        description={locale !== "ar" ? "Mauzoun | Our Blog" : "مَوْزوْن | مدوّنتنا"}
      />
      <div className="background-animation" style={{ backgroundColor }} />

      <motion.div
        key={key}
        initial={initial}
        animate={animate}
        variants={variants}
      >
        <ContactButton isNavOpen={isNavOpen} history={history} />
        <div
          style={{
            position: "fixed",
            display: "flex",
            alignItems: "stretch",
            width: "100%",
            height: "100%",
            overflowX: "hidden",
            // overflowY: "scroll",
          }}
        >
          <div
            className="bg-animation-blog"
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              zIndex: 8,
              overflow: isNavOpen ? "hidden" : null,
            }}
          >
            <MotionLogo />
            <Menu
              backgroundColor={backgroundColor}
              textAnimationControls={textAnimationControls}
              isNavOpen={isNavOpen}
              handleOpenNav={handleOpenNav}
            />

            <div className="container">
              <div className="container-background" style={{ backgroundColor }}></div>
              <div className="container-content">
                <h1>{f("title")}</h1>
              </div>
              <div className="container-content">
                {/* <ComingSoon /> */}

                <ComingSoon/>
                {/*<img src={blogImage} height="" width="100%" />*/}
                {/*<div>*/}
                {/*    <div className={styles.blogPost}>*/}
                {/*        <div className={styles.postTitle}>*/}
                {/*            <h4 style={locale === "ar" ? {paddingLeft:"15px"} : {paddingRight:"15px"}}>{locale === "ar" ? 'لماذا أسست موقع "موزون"' : 'Why I Founded Mauzoun'}</h4>*/}
                {/*            <span style={{ fontSize: '14px'}}>{locale === "ar" ? '26 يوليو 2021' : 'July 26, 2021'}</span>*/}
                {/*        </div>*/}
                {/*        <span className={styles.postedBy}>{locale === "ar" ? ' بواسطة ليان عبد الشكور' : 'by Layan Abdul Shakur'} </span>*/}
                {/*    </div>*/}
                {/*  <ReadMore />*/}
                {/*</div>*/}
              </div>

            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}
