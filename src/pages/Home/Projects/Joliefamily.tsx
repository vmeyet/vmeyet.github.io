import React from "react";
import { useTranslation } from "~/pages/i18n";
import revueImage from "~/assets/joliefamily/revue.jpg";
import applicationImage from "~/assets/joliefamily/application.png";
import logo from "~/assets/joliefamily/logo.svg";
import styles from "./Joliefamily.pcss";

const Joliefamily = () => {
  const { t } = useTranslation();

  return <div className={styles.layout}>
    <img className={styles.logo} src={logo} />
    <p>{t("home.projects.joliefamily")}</p>
    <div>
      <img className={styles.revue} src={revueImage} />
      <img className={styles.application} src={applicationImage} />
    </div>
  </div>;
}

export default Joliefamily;