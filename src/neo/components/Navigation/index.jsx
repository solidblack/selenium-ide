import React from "react";
import ProjectList from "../ProjectList";

export default class Navigation extends React.Component {
  render() {
    return (
      <aside>
        <h3>Test Case</h3>
        <ProjectList />
      </aside>
    );
  }
}