import React from "react";
import { useTranslation } from "~/pages/i18n";
import { LinkedText, Name } from "~/pages/parts";
import styles from "./Header.pcss";

const Header = () => {
  const { t } = useTranslation();

  return <div itemScope itemType="http://data-vocabulary.org/Person" className={styles.container}>
      <h1 itemProp="name"><Name /></h1>
      <section>
        <h2 className={styles.subheader}>
          <span itemProp="jobTitle">{t("home.header.engineer")}</span>
          <br/>
          {t("home.header.creator")}
          <br/>
          {t("home.header.entrepreneur")}
          <br/>
          &amp; {t("home.header.father")}.
        </h2>

        <p>
          <LinkedText
            text={t("home.header.quickDescription")}
            textLinks={{
              "@joliefamily": "https://joliefamily.webflow.io",
              "@bannerman": "https://www.bannerman.com",
            }} />
        </p>
      </section>

      <div className={styles.ctas}><a className={`button-neon ${styles.cta}`} href="./cv.html">{t("home.header.seeResume")}</a></div>
      
      <div className={styles.extLink}></div>

      <div className={`typo-hack ${styles.version}`}>
        version 1.0.1rc2
      </div>
  </div>;
}

export default Header;