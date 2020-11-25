import React from "react";
import { useTranslation } from "~/pages/i18n";
import { LinkedText } from "~/pages/parts";
import revueImage from "~/assets/joliefamily/revue.jpg";
import revueImage1000x1000 from "~/assets/joliefamily/revue-1000x1000.jpg";
import revueImage1000x1000Webp from "~/assets/joliefamily/revue-1000x1000.webp";
import applicationImage from "~/assets/joliefamily/application.png";
import applicationImage1000x1000 from "~/assets/joliefamily/application-1000x1000.png";
import applicationImage1000x1000Webp from "~/assets/joliefamily/application-1000x1000.webp";
import logo from "~/assets/joliefamily/logo.svg";
import styles from "./Joliefamily.pcss";

const Image = ({ webp, jpg, png, gif }: { webp?: string, jpg?: string, png?: string, gif?: string }) => {
  return <picture>
    { webp && <source type="image/webp" srcSet={webp} /> }
    { jpg && <source type="image/jpeg" srcSet={jpg} /> }
    { png && <source type="image/png" srcSet={png} /> }
    <img src={png || jpg || gif || webp} alt="" />
  </picture>;
}

const Joliefamily = () => {
  const { t } = useTranslation();

  return <div className={styles.layout}>
    <div className={styles.logo}><img src={logo} alt={t("home.projects.joliefamily.images.logo")} /></div>
    <p className={styles.description}>
      <LinkedText
        text={t("home.projects.joliefamily.description")}
        textLinks={{
          "Joliefamily": "https://joliefamily.webflow.io/",
          "@clairepaoletti": "http://www.clairepaoletti.com/",
          "@bluefactory": "https://www.blue-factory.eu/",
        }} />
    </p>
    <div className={styles.images}>
      <Image webp={revueImage1000x1000Webp} jpg={revueImage} />
      <Image webp={applicationImage1000x1000Webp} jpg={applicationImage} />
    </div>
  </div>;
}

export default Joliefamily;