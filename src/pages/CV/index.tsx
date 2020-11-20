import * as React from "react";
import ReactDOM from "react-dom";
import i18n from "../i18n";
import { FiExternalLink } from "react-icons/fi";
import { MdPrint } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";

i18n.initialize();

const ExtLink = ({ site }: { site: string }) => <a href={site} className="no-print"><small><FiExternalLink /></small></a>;

const ChangeLanguageButton = () => {
  const { t } = i18n.useTranslation();
  const languages = i18n.languages();
  const language = i18n.language();
  const nextLanguage = languages[(languages.indexOf(language) + 1) % languages.length];

  return <button onClick={() => i18n.changeLanguage(nextLanguage)}>{t(`languages.${nextLanguage}`)}</button>;
}

const App = () => {
  const { t } = i18n.useTranslation();

  return <>
    <nav className="navigation no-print">
      <a className="back" href="./index.html"><IoIosArrowBack className="react-icons" /><span>{t("navigation.goBack")}</span></a>
      <div className="flexpand" />
      <button className="print" onClick={() => window.print()}><MdPrint className="react-icons" /></button>
      <ChangeLanguageButton />
    </nav>

    <div className="wrapper">
      <div className="one">
        <h1>
          <span className="name">Vivien Meyet</span>
          <br />
          <span className="title">{t("cv.title")}</span>
        </h1>
      </div>

      <div className="two">
        <aside className="contact">
          <a href="https://www.github.com/vmeyet">github.com/vmeyet</a>
          <br />
          <a href="https://www.linkedin.com/in/vivienmeyet">linkedin.com/in/vivienmeyet</a>
        </aside>
      </div>

      <div className="three">
        <h2 className="section-title">{t("cv.experience.title")}</h2>

        <article className="job">
          <h3>
            <span className="company">Joliefamily <ExtLink site="https://joliefamily.webflow.io/" /></span>
            <span className="dates">/ {t("cv.experience.joliefamily.dates")}</span>
            <span className="location">{t("common.inCity", { city: "Paris" })}</span>
            <br />
            <span className="title">{t("cv.experience.joliefamily.title")}</span>
          </h3>

          <p className="description">
            
          </p>

          <p className="stack">
            Ruby / Ruby On Rails / Postgresql / Typescript / React / React Native
          </p>
        </article>

        <article className="job">
          <h3>
            <span className="company">Bannerman <ExtLink site="https://www.bannerman.com/" /></span>
            <span className="dates">/ {t("cv.experience.bannerman.dates")}</span>
            <span className="location">{t("common.inCity", { city: "Paris" })}</span>
            <br />
            <span className="title">{t("cv.experience.bannerman.title")}</span>
          </h3>

          <p className="description">{t("cv.experience.bannerman.description")}</p>

          <p className="stack">
            Ruby / Ruby On Rails / Postgresql / Typescript / Angular
          </p>
        </article>

        <article className="job">
          <h3>
            <span className="company">Work4 <ExtLink site="https://work4.io/" /></span>
            <span className="dates">/ {t("cv.experience.work4.dates")}</span>
            <span className="location">{t("common.inCity", { city: "Paris" })}</span>
            <br />
            <span className="title">{t("cv.experience.work4.title")}</span>
          </h3>

          <p className="description">{t("cv.experience.work4.description")}</p>

          <p className="stack">
            Python / Django / MySQL / MongoDB
          </p>
        </article>

        <article className="job">
          <h3>
            <span className="company">SAP <ExtLink site="https://www.sap.com/france/" /></span>
            <span className="dates">/ {t("cv.experience.sap.dates")}</span>
            <span className="location">{t("common.inCity", { city: "Levallois-Perret" })}</span>
            <br />
            <span className="title">{t("cv.experience.sap.title")}</span>
          </h3>

          <p className="description">{t("cv.experience.sap.description")}</p>

          <p className="stack">
            C# / WPF
          </p>
        </article>

        <article className="school">
          <h3>
            <span className="name">🎓 Télécom ParisTech (ENST) <ExtLink site="https://www.telecom-paris.fr/" /></span>
            <span className="dates">/ {t("cv.experience.telecomparistech.dates")}</span>
            <span className="location">{t("common.inCity", { city: "Paris" })} {t("common.and")} Sophia Antipolis</span>
            <br />
            <span className="title">{t("cv.experience.telecomparistech.title")}</span>
          </h3>

          <p className="stack">
            Computer Science / Multimedia / Computer Security
          </p>
        </article>
      </div>

      <div className="four">
        <h2 className="section-title">{t("cv.skills.title")}</h2>

        <article>
          <h3>{t("cv.skills.programming.title")}</h3>
          <ul className="skill-set">
            <li>Ruby <small>| Rails / Sinatra</small></li>
            <li>Python <small>| Django / Flask</small></li>
            <li>Javascript (ES6)</li>
            <li>Typescript <small>| React / React Native / Angular</small></li>
            <li>C# &amp; WPF</li>
          </ul>
        </article>

        <article>
          <h3>{t("cv.skills.databases.title")}</h3>
          <ul className="skill-set">
            <li>Postgresql</li>
            <li>MySQL</li>
            <li>Redis</li>
            <li>MongoDB</li>
          </ul>
        </article>

        <article>
          <h3>{t("cv.skills.tools.title")}</h3>
          <ul className="skill-set">
            <li>Git <small>| Github / Gitlab</small></li>
            <li>JIRA</li>
            <li>Heroku</li>
            <li>CI <small>| Codeship / CircleCI</small></li>
          </ul>
        </article>

        <article>
          <h3>{t("cv.skills.collaboration.title")}</h3>
          <ul className="skill-set">
            <li>{t("cv.skills.collaboration.detail")}</li>
            <li>{t("cv.skills.collaboration.pragmatic")}</li>
            <li>{t("cv.skills.collaboration.creative")}</li>
            <li>{t("cv.skills.collaboration.teamplayer")}</li>
            <li>{t("cv.skills.collaboration.flexible")}</li>
            <li>{t("cv.skills.collaboration.ethic")}</li>
          </ul>
        </article>

        <article>
          <h3>{t("cv.skills.languages.title")}</h3>
          <ul className="skill-set">
            <li>{t("cv.skills.languages.english")}</li>
            <li>{t("cv.skills.languages.french")}</li>
          </ul>
        </article>
      </div>
    </div>
  </>;
}

const root = document.getElementById("root");
ReactDOM.render(<App/>, root);