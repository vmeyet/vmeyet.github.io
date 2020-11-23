import React from "react";
import { DateTime } from "luxon";

const Date = ({ datetime }: { datetime: DateTime }) => <>{datetime.setLocale("fr").toLocaleString()}</>;

export default Date;