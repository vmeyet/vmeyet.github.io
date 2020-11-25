import React from "react";
import { useTranslation } from "~/pages/i18n";
import { LinkedText } from "~/pages/parts";
import kinectVideo from "~/assets/sap/kinect.mp4";
import styles from "./Kinect.pcss";

const Kinect = () => {
  const { t } = useTranslation();
  
  return <div className={styles.layout}>
    <div className={styles.title}>
      <span>
        <b>KINECT</b><sup>TM</sup>&nbsp;vs.&nbsp;<b>SAP</b>
      </span>
    </div>
    
    <p className={styles.description}>
      <LinkedText
      text={t("home.projects.kinect")}
      textLinks={{
        "Kinect": "https://developer.microsoft.com/fr-fr/windows/kinect/"
      }} />
    </p>

    <div className={styles.videoContainer}>

      <video autoPlay loop>
        <source src={kinectVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>;
}

export default Kinect;