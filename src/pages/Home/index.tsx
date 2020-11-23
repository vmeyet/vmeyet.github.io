import React from "react";
import ReactDOM from "react-dom";

import i18n from "~/pages/i18n";

import Header from "./Header";
import Spotlight from "./Spotlight";
import Footer from "./Footer";

import styles from "./index.pcss";

i18n.initialize();

const Home = () => <div className={styles.container}>
  <header className={styles.header}>
    <Header />
  </header>
  <div className={styles.content}>
    <section><Spotlight /></section>
    <footer><Footer /></footer>
  </div>
</div>;

const root = document.getElementById("root");

ReactDOM.render(<Home/>, root);