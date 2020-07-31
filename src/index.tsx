import * as React from "react";
import * as ReactDOM from "react-dom";
import { Viewer } from "./Viewer360/Viewer";
import "./index.css";

declare global {
  interface Window {
    isFirstVisit: boolean;
  }
}
window.isFirstVisit = true;

ReactDOM.render(
  <div>
    <Viewer />
  </div>,
  document.getElementById("root") as HTMLElement
);
