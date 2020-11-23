import { DateTime } from "luxon";

class Project {
  name: string;
  date: DateTime;
  copyrighter: string;
  
  constructor(name: string, date: DateTime, copyrighter: string) {
    this.name = name;
    this.date = date;
    this.copyrighter = copyrighter;
  }
}

export default Project;