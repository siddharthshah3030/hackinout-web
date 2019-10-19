import React from "react";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light navbar-expand" id="sidebar-wrapper">
        <div className="container">
          <button
            data-toggle="collapse"
            className="navbar-toggler d-none"
            data-target="#"
          ></button>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav sidebar-nav" id="sidebar-nav">
              <li className="nav-item sidebar-brand" role="presentation">
                <a
                  className="nav-link active js-scroll-trigger"
                  href="#page-top"
                >
                  DeployML
                </a>
              </li>
              <li className="nav-item sidebar-nav-item" role="presentation">
                <a className="nav-link js-scroll-trigger" href="#page-top">
                  Home
                </a>
              </li>
              <li className="nav-item sidebar-nav-item" role="presentation">
                <a className="nav-link js-scroll-trigger" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item sidebar-nav-item" role="presentation">
                <a className="nav-link js-scroll-trigger" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item sidebar-nav-item" role="presentation">
                <a className="nav-link js-scroll-trigger" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item sidebar-nav-item" role="presentation">
                <a className="nav-link js-scroll-trigger" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
