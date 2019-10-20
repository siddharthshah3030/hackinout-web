import React from "react";
import { Route, Switch } from "react-router";
import Home from "../containers/Home";
import NotFound from "../containers/NotFound";
import StartScreen from "../containers/StartScreen";
import UploadModel from "../containers/UploadModel";
import NeedAModel from "../containers/NeedAModel";
import ShowBuildModelOptions from "../containers/ShowBuildModelOptions";
import Projects from "../containers/Projects";
import IndividualProjects from "../containers/ShowIndividualProjects";
import ImageTransferLearning from "../containers/ImageTransferLearning";

const MainRoutes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/start" component={StartScreen} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/:id" component={IndividualProjects} />
        <Route exact path="/start/have" component={UploadModel} />
        <Route exact path="/start/need" component={NeedAModel} />
        <Route exact path="/start/need/img" component={ShowBuildModelOptions} />
        <Route
          exact
          path="/start/need/transfer"
          component={ImageTransferLearning}
        />
        <Route exact path="/start/need/txt" component={ShowBuildModelOptions} />
        <Route path="*" component={NotFound} />
      </Switch>
    </React.Fragment>
  );
};

export default MainRoutes;
