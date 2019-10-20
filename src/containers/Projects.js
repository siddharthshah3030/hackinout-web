import React, { Fragment } from "react";
import { getProjects } from "../utils/apis";
import Navbar from "../components/MinNavbar";

export default class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    let data = await getProjects();
    this.setState({ data: data });
  }

  render() {
    return (
      <Fragment>
        <section>
          <div style={{ backgroundColor: "#fff", height: "100vh" }}>
            <Navbar />
            <div className="container hero">
              <div className="row">
                <div className="col-12 col-lg-8 col-xl-8 offset-2 text-center align-self-center">
                  <h1 className="display-3">My Projects</h1>
                </div>
              </div>
              <div className="row">
                {this.state.data.map(function(val, idx) {
                  return (
                    <div className="col-4" key={val.id}>
                      <div className="card">
                        <div className="card-header">Project: {idx + 1}</div>
                        <div className="card-body">
                          <h5 className="card-title">{val.name}</h5>
                          <p className="card-text">
                            Project Type: {val.typeproject}
                          </p>
                          <p className="card-text">
                            Model Type: {val.typemodel}
                          </p>
                          <a
                            href={"/projects/" + val.id}
                            className="btn btn-primary"
                          >
                            View More
                          </a>
                        </div>
                      </div>
                      {(idx + 1) % 3 === 0 && <br />}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
