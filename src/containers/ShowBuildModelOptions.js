import React, { Component, Fragment } from "react";

const imgTransferLearningOptions = [
  {
    key: "RNT",
    name: "Resnet"
  },
  {
    key: "ENT",
    name: "Resnet"
  }
];

const txtTransferLearningOptions = [
  {
    key: "BRT",
    name: "Bert"
  },
  {
    key: "EXL",
    name: "Excelnet"
  }
];

export default class ShowBuildModelOptions extends Component {
  constructor() {
    super();
    this.state = {
      mode: "",
      imgOptions: imgTransferLearningOptions,
      txtOptions: txtTransferLearningOptions
    };
  }

  async componentDidMount() {
    await this.setState({
      mode: window.location.href.substring(
        window.location.href.lastIndexOf("/") + 1
      )
    });
  }

  render() {
    return (
      <Fragment>
        <div className="row text-center" style={{ margin: 0, padding: 0 }}>
          <div
            className="col-6 select-hover"
            style={{ height: "100vh", paddingTop: "20vh" }}
          >
            <a
              href="/start/need/img"
              style={{ color: "#212529", textDecoration: "none" }}
            >
              <i
                className="icon ion-android-options"
                style={{ fontSize: "200px" }}
              ></i>
              <h1>Use Tranfer Learning</h1>
            </a>
          </div>
          <div
            className="col-6 select-hover"
            style={{ height: "100vh", paddingTop: "20vh" }}
          >
            <a
              href="/start/need/txt"
              style={{ color: "#212529", textDecoration: "none" }}
            >
              <i
                className="icon ion-ios-plus-outline"
                style={{ fontSize: "200px" }}
              ></i>
              <h1>Make a new architecture</h1>
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
}
