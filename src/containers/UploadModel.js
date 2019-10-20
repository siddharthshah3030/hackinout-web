import React, { Fragment } from "react";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import uploadImage from "../assets/images/upload.svg";
import { css } from "@emotion/core";
import { uploadModel, submitModel, deployModel } from "../utils/apis";
import { BarLoader } from "react-spinners";

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

export default class UploadModel extends React.Component {
  constructor() {
    super();
    this.state = {
      modelType: "",
      model: "",
      modelUploadResponse: {},
      classes: [],
      width: 224,
      height: 224,
      channels: 3,
      projectId: "",
      loading: false,
      name: ""
    };
    this.onChange = this.onChange.bind(this);
    this.selectModel = this.selectModel.bind(this);
    this.addClass = this.addClass.bind(this);
    this.submitModel = this.submitModel.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.uploadModelFile = this.uploadModelFile.bind(this);
    this.deployProject = this.deployProject.bind(this);
  }

  async onChange(e) {
    await this.setState({ modelType: e.value });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async selectModel(e) {
    await this.setState({ model: e.target.files[0] });
  }

  async deployProject() {
    this.setState({ loading: true });
    let res = await deployModel(this.state.projectId);
    console.log(res);
    this.setState({ loading: false });
  }

  async addClass(e) {
    let classes = [];
    let i;
    for (i in e) {
      classes.push(e[i].value);
    }
    classes.sort();
    await this.setState({ classes: classes });
  }

  async submitModel(e) {
    e.preventDefault();
    this.setState({ loading: true });
    await this.uploadModelFile();
    let req = {};
    req["classes"] = { classes: this.state.classes };
    req["name"] = String(Date.now());
    req["typemodel"] = this.state.modelType;
    req["typeproject"] = "IMG";
    req["width"] = this.state.width;
    req["height"] = this.state.height;
    req["channels"] = this.state.channels;
    req["modelfile"] = [this.state.modelUploadResponse];
    let res = await submitModel(req);
    await this.setState({ projectId: res._id });
    this.setState({ loading: false });
  }

  async uploadModelFile() {
    let res = await uploadModel(this.state.model);
    await this.setState({ modelUploadResponse: res });
    console.log(this.state);
  }

  render() {
    return (
      <Fragment>
        <section>
          <div style={{ backgroundColor: "#fff", height: "100vh" }}>
            <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
              <div className="container">
                <a className="navbar-brand text-primary" href="/none">
                  DeployML
                </a>
                <button className="navbar-toggler" data-toggle="collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
            </nav>
            <div className="container hero">
              <div
                className="row"
                style={{ marginRight: 0, height: "100vh", marginLeft: 0 }}
              >
                <div
                  className="col-12 col-lg-8 col-xl-8 offset-2 text-center align-self-center"
                  style={{ height: "100vh" }}
                >
                  <img src={uploadImage} height="300vh" alt="BG" />
                  <h3>Upload Model</h3>
                  <br />
                  {this.state.loading ? (
                    <BarLoader
                      css={override}
                      size={500}
                      sizeUnit={"px"}
                      loading={this.state.loading}
                    />
                  ) : (
                    <form method="POST" onSubmit={this.submitModel}>
                      <div className="row">
                        <div className="col-6">
                          <div className="custom-file">
                            <input
                              type="file"
                              className="custom-file-input"
                              name="model"
                              id="validatedCustomFile"
                              onChange={this.selectModel}
                              required
                            />
                            <label
                              className="custom-file-label"
                              for="validatedCustomFile"
                            >
                              Select Model
                            </label>
                          </div>
                        </div>
                        <div className="col-6">
                          <Select
                            defaultValue={this.state.modelType}
                            options={groupedOptions}
                            formatGroupLabel={formatGroupLabel}
                            name="modelType"
                            onChange={this.onChange}
                          />
                        </div>
                      </div>
                      <br />
                      <div className="row">
                        <div className="col-6">
                          <label>Add Classes</label>
                          <CreatableSelect
                            isMulti
                            onChange={this.addClass}
                            options={this.state.classes}
                          />
                        </div>
                        <div className="col-6">
                          <label>Name of the Project</label>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">Name</span>
                            </div>
                            <input
                              className="form-control"
                              type="text"
                              name="name"
                              defaultValue={this.state.name}
                              onChange={this.handleChange}
                            />
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
                      >
                        Submit
                      </button>
                    </form>
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
