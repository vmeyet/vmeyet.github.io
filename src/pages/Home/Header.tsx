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

  return <header>
      <h1>Vivien Meyet</h1>
      <h2 className={styles.subheader}>[root@web]$&gt; {t("FullStack Software Engineer")} <BlinkingCursor /></h2>
      <a href="./cv.html">OK</a>
  </header>;
}

export default Header;