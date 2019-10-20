import React, { Component, Fragment } from "react";

export default class MinNavbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light navbar-expand-md">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            DeployML
          </a>
          <button
            data-toggle="collapse"
            className="navbar-toggler"
            data-target="#navcol-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="nav navbar-nav">
              <li className="nav-item" role="presentation">
                <a className="nav-link" href="/projects">
                  Projects
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" href="/start">
                  New Project
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
