import React from "react";
import { useTranslation } from "~/pages/i18n";
import styles from "./Header.pcss";
import Name from "./Name";

const Linked = ({ text }: { text: string }) => {
  const matches = text.match(/@\w+/g) || [];
  const parts = text.split(/@\w+/g);
  const mapping: { [key: string]: JSX.Element } = {
    "@joliefamily": <a href="https://joliefamily.webflow.io">@joliefamily</a>,
    "@bannerman": <a href="https://www.bannerman.com/">@bannerman</a>
  }
  const replacements = matches.map(match => mapping[match] || match);

  return <>{parts.map((part, idx) => <span key={idx}>{part}{replacements[idx]}</span>)}</>;
}

const Header = () => {
  const { t } = useTranslation();

  return <div className={styles.container}>
      <h1><Name /></h1>
      {/* <h2 className={styles.jobTitle}>[root@web]$&gt; {t("home.header.jobTitle")} <BlinkingCursor /></h2> */}
      <section>
        <h2 className={styles.subheader}>
          {t("home.header.engineer")}
          <br/>
          {t("home.header.creator")}
          <br/>
          {t("home.header.entrepreneur")}
          <br/>
          &amp; {t("home.header.father")}.
        </h2>

        <p><Linked text={t("home.header.quickDescription")} /></p>
      </section>

      <div className={styles.ctas}><a className={`button-neon ${styles.cta}`} href="./cv.html">{t("home.header.seeResume")}</a></div>
      
      <div className={styles.extLink}></div>

      <div className={`typo-hack ${styles.version}`}>
        version 1.0.1rc2
      </div>
  </div>;
}

export default Header;