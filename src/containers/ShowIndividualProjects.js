import React, { Component, Fragment } from "react";
import { BarLoader } from "react-spinners";
import { css } from "@emotion/core";
import Navbar from "../components/MinNavbar";
import {
  getProject,
  uploadModel,
  submitImage,
  deployModel
} from "../utils/apis";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default class ProjectDetails extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      details: {},
      model: {},
      testFile: {},
      testFileUploadRes: {},
      loading: false,
      imageTestResponse: ""
    };
    this.uploadTestFile = this.uploadTestFile.bind(this);
    this.submitModel = this.submitModel.bind(this);
    this.selectImage = this.selectImage.bind(this);
    this.handleDeployModel = this.handleDeployModel.bind(this);
  }

  async selectImage(e) {
    await this.setState({ testFile: e.target.files[0] });
    console.log(this.state);
  }

  async componentDidMount() {
    await this.setState({ id: this.props.match.params.id });
    let data = await getProject(this.state.id);
    await this.setState({ details: data });
    await this.setState({ model: data.modelfile[0] });
  }

  async uploadTestFile() {
    let res = await uploadModel(this.state.testFile);
    await this.setState({ testFileUploadRes: res });
    console.log(this.state);
  }

  async submitModel(e) {
    e.preventDefault();
    this.setState({ loading: true });
    await this.uploadTestFile();
    let req = {};
    req["image_url"] = this.state.testFileUploadRes.url;
    let res = await submitImage(this.state.id, req);
    await this.setState({ projectId: res._id });
    let pretty = JSON.stringify(res, undefined, 4);
    this.setState({ imageTestResponse: pretty });
    this.setState({ loading: false });
  }

  async handleDeployModel() {
    this.setState({ loading: true });
    await deployModel(this.state.id);
    this.setState({ loading: false });
  }

  render() {
    return (
      <Fragment>
        <section>
          <div style={{ backgroundColor: "#fff", height: "100vh" }}>
            <Navbar />
            <div className="container hero">
              <div className="row">
                <div className="col">
                  <div className="card">
                    <div className="card-header">
                      <h1 className="display-3">
                        Project: {this.state.details.name}
                      </h1>
                      {this.state.model.url !== "" && (
                        <a
                          href={this.state.model.url}
                          className="btn btn-outline-primary"
                        >
                          Download Deployed Model
                        </a>
                      )}
                      {" | "}
                      <button
                        onClick={this.handleDeployModel}
                        className="btn btn-outline-primary"
                      >
                        Deploy Again
                      </button>
                    </div>
                    <div className="card-body">
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
                              <h3>Test the deployed model</h3>
                              <div className="custom-file">
                                <input
                                  type="file"
                                  className="custom-file-input"
                                  name="file"
                                  onChange={this.selectImage}
                                />
                                <label
                                  className="custom-file-label"
                                  for="validatedCustomFile"
                                >
                                  Choose Image...
                                </label>
                              </div>
                            </div>
                          </div>
                          <br />
                          <button
                            className="btn btn-primary action-button"
                            type="submit"
                          >
                            Submit
                          </button>
                        </form>
                      )}
                      <br />
                      {this.state.imageTestResponse !== "" &&
                        !this.state.loading && (
                          <textarea cols={60} rows={10}>
                            {this.state.imageTestResponse}
                          </textarea>
                        )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
