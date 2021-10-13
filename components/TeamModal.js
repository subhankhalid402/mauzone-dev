import React from "react";
import {useIntl} from "react-intl";
import Modal from "react-modal";
import {useRouter} from "next/router";
import WhiteBox from "../components/WhiteBox";

var countries = require("i18n-iso-countries");
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
countries.registerLocale(require("i18n-iso-countries/langs/ar.json"));

import styles from "../styles/contact.module.scss";
import formatJsxMessage from "../utils/formatJsxMessage";

const whiteBoxDecoratorsPositions = {
    fromTop: [
        {
            preferredMargin: "520px",
        },
        {
            preferredMargin: "537px",
        },
        {
            marginTop: "10px",
            preferredMargin: "550px",
        },
        {
            marginTop: "15px",
        },
        {
            marginTop: "32px",
        },
        {
            marginTop: "49px",
        },
    ],
    fromBottom: [
        {
            preferredMargin: "300px",
        },
        {
            marginTop: "-50px",
            preferredMargin: "735px",
        },
        {
            marginTop: "-67px",
            preferredMargin: "735px",
        },
    ],
};

export default function TeamModal({isOpen, onClose, selectedTeamMember,textAnimationControls}) {
    const locale = useRouter().locale;

    const intl = useIntl();
    const f = (id, options) =>
        formatJsxMessage(intl, locale, id, {
            shouldFade: true,
            animationControls: textAnimationControls,
            ...options,
        });

    const closeButton = (
        <button
            className={styles.closeButton}
            onClick={onClose}
            style={{transform: locale === "en-US" ? "scaleX(-1)" : ""}}
        >
            <img src="/Tilted Square.svg" height="25" width="25" priority="true"/>
        </button>
    );

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            className={styles.modal}
            ariaHideApp={false}
            style={{
                overlay: {
                    zIndex: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                },
            }}
        >
            {locale === "ar" && closeButton}
            <div className="container-object" className={"locale " + locale}>
                <WhiteBox decoratorsPositions={whiteBoxDecoratorsPositions}>
                    <b>{f(`teamMember.${selectedTeamMember}.title`)}</b>
                    <br/>
                    {f(`teamMember.${selectedTeamMember}.para1`)}
                </WhiteBox>
            </div>

            {locale === "en-US" && closeButton}
        </Modal>
    );
}
