import React from "react";

import styles from "./Spotlight.pcss";
import Project from "../../models/Project";
import ProjectService from "../../services/projects";
import Joliefamily from "./Projects/Joliefamily";
import { Code } from "../parts";

const WaveGradients = () => <>
  <svg xmlns="http://www.w3.org/2000/svg" className={styles.gradients} width="0" height="0">
    <linearGradient id="spot1" x2="1" y2="1">
      <stop offset="0%" stopColor="var(--turquoise-transparent)" />
      <stop offset="30%" stopColor="var(--turquoise-transparent)" />
      <stop offset="70%" stopColor="var(--orange-transparent)" />
      <stop offset="100%" stopColor="var(--orange-transparent)" />
    </linearGradient>

    <linearGradient id="spot2" x2="1" y2="1">
      <stop offset="0%" stopColor="var(--pink-transparent)" />
      <stop offset="50%" stopColor="var(--pink-transparent)" />
      <stop offset="90%" stopColor="var(--yellow-transparent)" />
      <stop offset="100%" stopColor="var(--yellow-transparent)" />
    </linearGradient>

    <linearGradient id="spot3" x2="1" y2="1">
      <stop offset="0%" stopColor="var(--turquoise-dark-transparent)" />
      <stop offset="50%" stopColor="var(--turquoise-dark-transparent)" />
      <stop offset="90%" stopColor="var(--yellow-transparent)" />
      <stop offset="100%" stopColor="var(--yellow-transparent)" />
    </linearGradient>

    <linearGradient id="spot4" x2="1" y2="1">
      <stop offset="0%" stopColor="var(--yellow-transparent)" />
      <stop offset="30%" stopColor="var(--yellow-transparent)" />
      <stop offset="70%" stopColor="var(--orange-transparent)" />
      <stop offset="100%" stopColor="var(--orange-transparent)" />
    </linearGradient>
  </svg>
</>;

const Waves = () => <>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2500 300" className={styles.wave}>
    <path
      aria-hidden="true" focusable="false"
      d="M0,224L24,218.7C48,213,96,203,144,202.7C192,203,240,213,288,186.7C336,160,384,96,432,101.3C480,107,528,181,576,202.7C624,224,672,192,720,165.3C768,139,816,117,864,101.3C912,85,960,75,1008,101.3C1056,128,1104,192,1152,229.3C1200,267,1248,277,1296,266.7C1344,256,1392,224,1416,208L1440,192L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z">
    </path>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2500 300" className={styles.wave}>
    <path
      aria-hidden="true" focusable="false"
      d="M0,160L24,154.7C48,149,96,139,144,149.3C192,160,240,192,288,208C336,224,384,224,432,208C480,192,528,160,576,165.3C624,171,672,213,720,208C768,203,816,149,864,122.7C912,96,960,96,1008,90.7C1056,85,1104,75,1152,96C1200,117,1248,171,1296,176C1344,181,1392,139,1416,117.3L1440,96L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z">
    </path>
  </svg>
</>;

const ProjectView = ({ project }: { project: Project }) => {
  const id = <div className={styles.projectId}>
    <Code text={`
/*
 * Project .${project.name}
 * Created On: ${project.date.toFormat("yyyy.MM.dd")}
 * (c) ${project.copyrighter}
 */
      `} />
  </div>;

  switch(project.name) {
    case "joliefamily":
      return <>{id}<Joliefamily /></>;
    default:
      return <>{id}</>;
  }
};

const Spot = ({ project }: { project: Project }) => <>
  <section>
    <ProjectView  project={project} />
    <Waves />
  </section>
</>;

const Spotlight = () => {
  return <>
    <WaveGradients />
    <div className={styles.spots}> 
      { ProjectService.getAllProjects().map((project, idx) => <Spot project={project} key={idx} />) }
    </div>
  </>;
}

export default Spotlight;