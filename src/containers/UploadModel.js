import React, { Fragment } from "react";
import Select from "react-select";
import notFound from "../assets/images/404.svg";

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
  { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
  { value: "blue", label: "Blue", color: "#0052CC", isDisabled: true },
  { value: "purple", label: "Purple", color: "#5243AA" },
  { value: "red", label: "Red", color: "#FF5630", isFixed: true },
  { value: "orange", label: "Orange", color: "#FF8B00" },
  { value: "yellow", label: "Yellow", color: "#FFC400" },
  { value: "green", label: "Green", color: "#36B37E" },
  { value: "forest", label: "Forest", color: "#00875A" },
  { value: "slate", label: "Slate", color: "#253858" },
  { value: "silver", label: "Silver", color: "#666666" }
];

export const groupedOptions = [
  {
    label: "Images",
    options: imageOptions
  },
  {
    label: "Text",
    options: imageOptions
  }
];

const formatGroupLabel = data => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

export default class UploadModel extends React.Component {
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
                  <Select
                    defaultValue={imageOptions[1]}
                    options={groupedOptions}
                    formatGroupLabel={formatGroupLabel}
                  />
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
