import React from "react";
import ReactDOM from "react-dom";
import Reader from "./components/Reader/Reader";

import publications from "./assets/publications.json";
import "./styles.css";

ReactDOM.render(
  <Reader items={publications} />,
  document.getElementById("root"),
);
