import React, { Component, Fragment } from "react";
import Navbar from "../components/MinNavbar";
import { css } from "@emotion/core";
import { BarLoader } from "react-spinners";
import { uploadModel, submitModel, deployModel } from "../utils/apis";
import Select from "react-select";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const groupStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
};

const groupBadgeStyles = {
  backgroundColor: "#EBECF0",
  borderRadius: "2em",
  color: "#172B4D",
  display: "inline-block",
  fontSize: 12,
  fontWeight: "normal",
  lineHeight: "1",
  minWidth: 1,
  padding: "0.16666666666667em 0.5em",
  textAlign: "center"
};

export const imageOptions = [
  { value: "KER", label: "Keras", color: "#00B8D9" },
  { value: "PYT", label: "PyTorch", color: "#0052CC" },
  { value: "TFL", label: "Tensorflow", color: "#5243AA" }
];

export const textOptions = [
  { value: "BRT", label: "Bert", color: "#00B8D9" },
  { value: "EXL", label: "ExcelNet", color: "#0052CC" }
];

export const groupedOptions = [
  {
    label: "Images",
    options: imageOptions
  },
  {
    label: "Text",
    options: textOptions
  }
];

const formatGroupLabel = data => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

export default class ImageTransferLearning extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      classes: [],
      classesHtml: [],
      classLen: 0,
      name: ""
    };
    this.addNewClass = this.addNewClass.bind(this);
    this.createNewClass = this.createNewClass.bind(this);
    this.submitModelForm = this.submitModelForm.bind(this);
    this.deleteClass = this.deleteClass.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.selectImages = this.selectImages.bind(this);
    this.onChangeHandle = this.onChangeHandle.bind(this);
  }

  onChangeHandle(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleChange(e) {
    let classes = this.state.classes;
    let num = e.target.name.substr(-1);
    let _class = {};
    _class["name"] = e.target.value;
    _class["media"] = {};
    classes[num] = _class;
    this.setState({ classes: classes });
  }

  componentDidMount() {
    this.createNewClass();
  }

  async uploadClassFiles() {
    this.setState({ loading: true });
    let classes = this.state.classes;
    let res;
    for (let idx in classes) {
      console.log(idx);
      res = await uploadModel(classes[idx].media);
      classes[idx].data = res;
    }
    await this.setState({ classes: classes });
  }

  async submitModelForm() {
    // e.preventDefault();
    await this.uploadClassFiles();
    let req = {};
    req["classes"] = { classes: this.state.classes };
    // req["classes"] = tempClasses;
    req["name"] = this.state.name;
    req["typemodel"] = this.state.modelType;
    req["typeproject"] = "IMG";
    req["width"] = this.state.width;
    req["height"] = this.state.height;
    req["channels"] = this.state.channels;
    // req["modelfile"] = [this.state.modelUploadResponse];
    let res = await submitModel(req);
    await this.setState({ projectId: res._id });
    this.setState({ loading: false });
    console.log(this.state);
  }

  deleteClass(index) {
    console.log(index);
    let classes = this.state.classesHtml;
    classes.splice(index, 1);
    this.setState({ classesHtml: classes });
  }

  async createNewClass() {
    // e.preventDefault();
    let index = this.state.classLen;
    let ele = this.state.classesHtml;
    let element = index => (
      <div className="col-4" key={index}>
        <div className="card">
          <div className="card-header">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">Class</span>
              </div>
              <input
                className="form-control"
                name={"text_" + index}
                type="text"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="card-body">
            <div className="custom-file">
              <input
                type="file"
                multiple
                className="custom-file-input"
                name={"images_" + index}
                id="validatedCustomFile"
                onChange={this.selectImages}
              />
              <label className="custom-file-label" for="validatedCustomFile">
                Upload Images
              </label>
            </div>
            <br />
            <br />
            {/* <button
              className="btn btn-outline-primary"
              onClick={this.deleteClass}
            >
              Delete This
            </button> */}
          </div>
        </div>
      </div>
    );
    ele.push(element(index));
    await this.setState({ classesHtml: ele });
    await this.setState({ classLen: this.state.classLen + 1 });
  }

  selectImages(e) {
    let num = e.target.name.substr(-1);
    let classes = this.state.classes;
    let _class = {};
    _class["name"] = classes[num].name;
    _class["media"] = e.target.files;
    classes[num] = _class;
    this.setState({ classes: classes });
  }

  addNewClass() {
    console.log(this.state);
  }

  render() {
    return (
      <Fragment>
        <section>
          <div style={{ backgroundColor: "#fff", height: "100vh" }}>
            <Navbar />
            <div className="container hero">
              <div
                className="row"
                style={{ marginRight: 0, height: "100vh", marginLeft: 0 }}
              >
                <div
                  className="col-12 col-lg-8 col-xl-8 offset-2 text-center align-self-center"
                  style={{ height: "100vh" }}
                >
                  <h3>Create a new Model</h3>
                  <br />
                  {this.state.loading ? (
                    <BarLoader
                      css={override}
                      size={500}
                      sizeUnit={"px"}
                      loading={this.state.loading}
                    />
                  ) : (
                    // <form method="POST" onSubmit={this.submitModelForm}>
                    <div>
                      <div className="row">
                        <div className="col-6">
                          <Select
                            defaultValue={this.state.modelType}
                            options={groupedOptions}
                            formatGroupLabel={formatGroupLabel}
                            name="modelType"
                            onChange={this.onChange}
                          />
                        </div>
                        <div className="col-6">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">Name</span>
                            </div>
                            <input
                              className="form-control"
                              type="text"
                              name="name"
                              defaultValue={this.state.name}
                              onChange={this.onChangeHandle}
                            />
                          </div>
                        </div>
                      </div>
                      <br />
                      <div className="row" id="class_row">
                        {this.state.classesHtml.map(function(val, idx) {
                          return val;
                        })}
                        <div className="col-4">
                          <div className="card">
                            <div className="card-body">
                              <button
                                className="btn btn-outline-primary"
                                onClick={this.createNewClass}
                              >
                                Add a new class
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <br />
                      <div className="row">
                        <div className="col-4">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">Width</span>
                            </div>
                            <input
                              className="form-control"
                              type="number"
                              name="width"
                              defaultValue={this.state.width}
                              onChange={this.handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">Height</span>
                            </div>
                            <input
                              className="form-control"
                              type="number"
                              name="height"
                              defaultValue={this.state.height}
                              onChange={this.handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">Channels</span>
                            </div>
                            <input
                              className="form-control"
                              type="number"
                              name="channels"
                              defaultValue={this.state.channels}
                              onChange={this.handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <br />
                      <button
                        className="btn btn-primary btn-lg action-button"
                        type="submit"
                        onClick={this.submitModelForm}
                      >
                        Submit
                      </button>
                    </div>
                    // </form>
                  )}
                  <br />
                  {this.state.projectId !== "" && (
                    <button
                      className="btn btn-primary btn-lg action-button"
                      type="submit"
                      onClick={this.deployProject}
                    >
                      Deploy
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
