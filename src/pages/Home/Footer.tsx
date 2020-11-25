import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaStackOverflow,
} from "react-icons/fa";

import { useTranslation } from "~/pages/i18n";
import { Name } from "~/pages/parts";
import styles from "./Footer.pcss";

const Footer = () => {
  const { t } = useTranslation();

  return <div className={styles.container}>
    <div className={styles.column1}>
      <Name />
      <div className={styles.moto}>{t("home.footer.moto")}</div>
    </div>
    <div className={styles.column2}>
      <div className={styles.externalLinks}>
        <a aria-label={t("home.footer.links.github")} href="https://github.com/vmeyet"><FaGithub /></a>
        <a aria-label={t("home.footer.links.stackoverflow")} href="https://stackoverflow.com/users/1172095/astreal"><FaStackOverflow /></a>
        <a aria-label={t("home.footer.links.linkedin")} href="https://www.linkedin.com/in/vivienmeyet"><FaLinkedinIn /></a>
        <a aria-label={t("home.footer.links.instagram")} href="https://www.instagram.com/vee_memento"><FaInstagram /></a>
      </div>
      <div className={styles.copyright}>© 2020 Vivien Meyet. {t("home.footer.madeInFrance")}</div>
    </div>
  </div>;
}

export default Footer;