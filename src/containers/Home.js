import React, { Component, Fragment } from "react";
import { inject, observer } from "mobx-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bgImage from "../assets/images/bg.png";

@inject("store")
@observer
export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <a className="menu-toggle rounded active" href="">
          <i className="fa fa-bars"></i>
        </a>
        <Navbar />
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
                  <img src={bgImage} height="300vh" alt="BG" />
                  <h1 className="display-3">Deploy your ML Model</h1>
                  <p>
                    Deploy your existing ML model in seconds or create a new ML
                    model from scratch
                  </p>
                  <a
                    className="btn btn-primary btn-lg action-button"
                    role="button"
                    href="/start"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="services"
          class="content-section bg-primary text-white text-center"
        >
          <div className="container">
            <div className="content-section-heading">
              <h3 className="text-secondary mb-0">DeployML</h3>
              <h2 className="mb-5">The first of its kind</h2>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-3 mb-5 mb-lg-0">
                <span className="mx-auto service-icon rounded-circle mb-3">
                  <i className="fas fa-th-list"></i>
                </span>
                <h4>
                  <strong>Select</strong>
                </h4>
                <p className="mb-0 text-faded">
                  Select the type of your project i.e. image classification,
                  object detection etc.
                </p>
              </div>
              <div className="col-md-6 col-lg-3 mb-5 mb-lg-0">
                <span className="mx-auto service-icon rounded-circle mb-3">
                  <i className="fas fa-cloud-upload-alt"></i>
                </span>
                <h4>
                  <strong>Upload</strong>
                </h4>
                <p className="mb-0 text-faded">
                  Upload model, data or create your own model with existing
                  architecture or your creativity
                </p>
              </div>
              <div className="col-md-6 col-lg-3 mb-5 mb-lg-0">
                <span className="mx-auto service-icon rounded-circle mb-3">
                  <i className="fas fa-edit"></i>
                </span>
                <h4>
                  <strong>Customize</strong>
                </h4>
                <p className="mb-0 text-faded">
                  <span>
                    Customize as you want, as much as you want, there is no
                    limit
                  </span>
                </p>
              </div>
              <div className="col-md-6 col-lg-3 mb-5 mb-lg-0">
                <span className="mx-auto service-icon rounded-circle mb-3">
                  <i className="fas fa-cloud"></i>
                </span>
                <h4>
                  <strong>Deploy</strong>
                </h4>
                <p className="mb-0 text-faded">
                  Select the service of your choice or deploy in our own
                  inftrastructure with scalibity
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="about" class="content-section bg-light">
          <div class="container text-center">
            <div class="row">
              <div class="col-lg-10 mx-auto">
                <h2>Easily deploy or create and deploy your own model</h2>
                <p class="lead mb-5">
                  <span>
                    Whether you have an existing model or are starting from
                    scratch, DeployML gives you the power to create and deploy a
                    beautiful wrapper for your ML model. Get started by
                    uploading a model or using our online model builder. Once
                    you're in DeployML, you can customize the basic elements of
                    your machine learning: backend, create customized model,
                    select your favourite platform and deploy with scalability
                    automatically taken care. With these elements DeployML
                    generates a powerfull wrapper for your ML Model.
                  </span>
                </p>
                <a
                  class="btn btn-dark btn-xl js-scroll-trigger"
                  role="button"
                  href="#services"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </Fragment>
    );
  }
}
