import React, { Component, Fragment } from "react";

export default class HaveAModel extends Component {
  render() {
    return (
      <Fragment>
        <div className="row text-center" style={{ margin: 0, padding: 0 }}>
          <div
            className="col-6 select-hover"
            style={{ height: "100vh", paddingTop: "20vh" }}
          >
            <a
              href="/start/have/img"
              style={{ color: "#212529", textDecoration: "none" }}
            >
              <i className="icon ion-images" style={{ fontSize: "200px" }}></i>
              <h1>Image Classification/Object Detection</h1>
            </a>
          </div>
          <div
            className="col-6 select-hover"
            style={{ height: "100vh", paddingTop: "20vh" }}
          >
            <a
              href="/start/have/txt"
              style={{ color: "#212529", textDecoration: "none" }}
            >
              <i
                className="icon ion-document-text"
                style={{ fontSize: "200px" }}
              ></i>
              <h1>Text Classification</h1>
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
}
