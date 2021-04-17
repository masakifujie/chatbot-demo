import React from "react";
import defaultDataset from "./dataset";
// import { AssessmentTwoTone } from "@material-ui/icons";
// import { style } from "@material-ui/system";
import "./assets/styles/style.css";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      chat: [],
      currentId: "init",
      dataset: defaultDataset,
      open: false,
    };
  }
  render() {
    return (
      <div>
        <section className="c-section"></section>
        <div className="c-box"></div>
      </div>
    );
  }
}
