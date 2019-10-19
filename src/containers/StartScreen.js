import React, { Component, Fragment } from "react";

export default class StartScreen extends Component {
  render() {
    return (
      <Fragment>
        <div className="row text-center" style={{ margin: 0, padding: 0 }}>
          <div
            className="col-6 select-hover"
            style={{ height: "100vh", paddingTop: "20vh" }}
          >
            <a
              href="/start/have"
              style={{ color: "#212529", textDecoration: "none" }}
            >
              <i
                className="icon ion-ios-cloud-upload-outline"
                style={{ fontSize: "200px" }}
              ></i>
              <h1>I have a model</h1>
            </a>
          </div>
          <div
            className="col-6 select-hover"
            style={{ height: "100vh", paddingTop: "20vh" }}
          >
            <a
              href="/start/need"
              style={{ color: "#212529", textDecoration: "none" }}
            >
              <i
                className="icon ion-ios-plus-outline"
                style={{ fontSize: "200px" }}
              ></i>
              <h1>I need a model</h1>
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
}
