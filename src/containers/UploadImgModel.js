import React, { Fragment } from "react";
import notFound from "../assets/images/404.svg";

export default class NotFound extends React.Component {
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
                  <img src={notFound} height="300vh" alt="BG" />
                  <h1 className="display-3">Not Found</h1>
                  <p>
                    The resource you are looking for has either been moved to a
                    new location or does not exist
                  </p>
                  <a
                    className="btn btn-primary btn-lg action-button"
                    role="button"
                    href="/"
                  >
                    Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
