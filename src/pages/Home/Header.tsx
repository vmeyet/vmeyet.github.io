import React, { useEffect, useState } from "react";
import styles from "./Header.pcss";
import { useTranslation } from "../i18n";

const BlinkingCursor = () => {
  const [shown, setShown] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => { setShown(!shown) }, 500);
    return () => clearInterval(interval);
  }, [shown]);

  return <span className={styles.blinkingCursor}>{shown ? '▌' : ''}</span>
}

const Header = () => {
  const { t } = useTranslation();

  return <div className={styles.container}>
      <h1 className={styles.name}>
        <span>Vivien</span>
        <span>Meyet</span>
      </h1>
      {/* <h2 className={styles.jobTitle}>[root@web]$&gt; {t("home.header.jobTitle")} <BlinkingCursor /></h2> */}
      <section>
        <h2 className={styles.subheader}>
          {t("home.header.engineer")}
          <br/>
          {t("home.header.entrepreneur")}
          <br/>
          &amp; {t("home.header.father")}.
        </h2>
        <p>{t("home.header.quickDescription")}</p>
      </section>

      <div className={styles.ctas}><a className={`button-neon ${styles.cta}`} href="./cv.html">{t("home.header.seeResume")}</a></div>
      
      <div className={styles.extLink}></div>

      <div className={`typo-hack ${styles.version}`}>
        version 1.0.1rc2
      </div>
  </div>;
}

export default Header;