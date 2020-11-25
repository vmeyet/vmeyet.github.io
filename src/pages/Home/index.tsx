import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import i18n from "~/pages/i18n";

const Footer = React.lazy(() => import("./Footer"));
const Header = React.lazy(() => import("./Header"));
const Spotlight = React.lazy(() => import("./Spotlight"));

import styles from "./index.pcss";

i18n.initialize();

const Home = () => <div className={styles.container}>
  <header className={styles.header}>
    <Suspense fallback={<></>}><Header /></Suspense>
  </header>
  <div className={styles.content}>
    <section><Suspense fallback={<></>}><Spotlight /></Suspense></section>
    <footer><Suspense fallback={<></>}><Footer /></Suspense></footer>
  </div>
</div>;

const root = document.getElementById("root");

ReactDOM.render(<Home/>, root);