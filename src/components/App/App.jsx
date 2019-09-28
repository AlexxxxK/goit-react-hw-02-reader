import React from "react";
import Reader from "../Reader/Reader";
import publications from "../../assets/publications.json";
import "./App.module.css";

const App = () => <Reader items={publications} />;

export default App;
