import React, { Fragment } from "react";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import uploadImage from "../assets/images/upload.svg";

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
      classes: []
    };
    this.onChange = this.onChange.bind(this);
    this.selectModel = this.selectModel.bind(this);
    this.addClass = this.addClass.bind(this);
    this.uploadModel = this.uploadModel.bind(this);
  }

  async onChange(e) {
    await this.setState({ modelType: e.value });
  }

  async selectModel(e) {
    await this.setState({ model: e.target.files[0] });
  }

  async addClass(e) {
    let classes = [];
    let i;
    for (i in e) {
      classes.push(e[i].value);
    }
    classes.sort();
    this.setState({ classes: classes });
  }

  uploadModel(e) {
    e.preventDefault();
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
                  <form type="POST" onSubmit={this.uploadModel}>
                    <div className="row">
                      <div className="col-6">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              Select Model
                            </span>
                          </div>
                          <input
                            className="form-control"
                            type="file"
                            name="model"
                            onChange={this.selectModel}
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <Select
                          options={groupedOptions}
                          formatGroupLabel={formatGroupLabel}
                          name="modelType"
                          onChange={this.onChange}
                        />
                      </div>
                    </div>
                    <br />
                    <label>Add Classes</label>
                    <CreatableSelect isMulti onChange={this.addClass} />
                    <br />
                    <button
                      className="btn btn-primary btn-lg action-button"
                      type="submit"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
