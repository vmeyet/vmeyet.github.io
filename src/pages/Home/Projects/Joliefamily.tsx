import React from "react";
import { useTranslation } from "~/pages/i18n";
import { LinkedText } from "~/pages/parts";
import revueImage from "~/assets/joliefamily/revue.jpg";
import applicationImage from "~/assets/joliefamily/application.png";
import logo from "~/assets/joliefamily/logo.svg";
import styles from "./Joliefamily.pcss";

const Joliefamily = () => {
  const { t } = useTranslation();

  return <div className={styles.layout}>
    <div className={styles.logo}><img src={logo} /></div>
    <p className={styles.description}>
      <LinkedText
        text={t("home.projects.joliefamily")}
        textLinks={{
          "Joliefamily": "https://joliefamily.webflow.io/",
          "@clairepaoletti": "http://www.clairepaoletti.com/",
          "@bluefactory": "https://www.blue-factory.eu/",
        }} />
    </p>
    <div className={styles.images}>
      <img className={styles.revue} src={revueImage} />
      <img className={styles.application} src={applicationImage} />
    </div>
  </div>;
}

export default Joliefamily;