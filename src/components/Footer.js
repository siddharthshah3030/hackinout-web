import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer text-center">
        <div className="container">
          <ul className="list-inline mb-5">
            <li className="list-inline-item">
              &nbsp;
              <a className="text-white social-link rounded-circle" href="/">
                <i className="icon-social-facebook"></i>
              </a>
            </li>
            <li className="list-inline-item">
              &nbsp;
              <a className="text-white social-link rounded-circle" href="/">
                <i className="icon-social-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              &nbsp;
              <a className="text-white social-link rounded-circle" href="/">
                <i className="icon-social-github"></i>
              </a>
            </li>
          </ul>
          <p className="text-muted mb-0 small">
            Copyright &nbsp;© DeployML 2019
          </p>
        </div>
        <a className="js-scroll-trigger scroll-to-top rounded" href="/page-top">
          <i className="fa fa-angle-up"></i>
        </a>
      </footer>
    );
  }
}
