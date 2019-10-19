import React from "react";
import { Route, Switch } from "react-router";
import Home from "../containers/Home";
import NotFound from "../containers/NotFound";
import StartScreen from "../containers/StartScreen";
import HaveAModel from "../containers/HaveAModel";
import UploadModel from "../containers/UploadModel";

const MainRoutes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/start" component={StartScreen} />
        <Route exact path="/start/have" component={HaveAModel} />
        <Route exact path="/start/have/img" component={UploadModel} />
        <Route path="*" component={NotFound} />
      </Switch>
    </React.Fragment>
  );
};

export default MainRoutes;
