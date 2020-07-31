import React from "react";
import "./Buttons.css";

export default class TopMenu extends React.PureComponent {
  public props: {
    children?: any;
    [attrs: string]: any;
  };

  public render() {
    const { children } = this.props;

    return <div className="top-menu">{children}</div>;
  }
}
