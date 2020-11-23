import { DateTime } from "luxon";
import Project from "../models/Project";``

const Service = {
    getAllProjects: () => [
        new Project("joliefamily", DateTime.local(2019, 3, 15), "Jolie INC."),
        new Project("kinect-bi", DateTime.local(2012, 3, 5), "SAP"),
    ],
};

export default Service;