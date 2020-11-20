import React from "react";
import ReactDOM from "react-dom";

import i18n from "../i18n";

import Header from "./Header";
import Spotlight from "./Spotlight";
import Footer from "./Footer";

import styles from "./index.pcss";

i18n.initialize();

const Home = () => <div className={styles.container}>
  <div className={styles.header}>
    <Header />
  </div>
  <div className={styles.content}>
    <Spotlight />
    <Footer />
  </div>
</div>;

const root = document.getElementById("root");

ReactDOM.render(<Home/>, root);