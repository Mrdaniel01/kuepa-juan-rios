import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Home } from "../components/Home";
import { MainPanel } from "../components/MainPanel";
import { ProfileEmployee } from "../components/ProfileEmployee";
import { SideMenu } from "../components/SideMenu";

export default function AppRoutes() {
  return (
    <Router>
      <SideMenu />
      <div className="container">
        <Switch>

          <Route exact path="/profile">
            <ProfileEmployee />
          </Route>

          <Route exact path="/panel">
            <MainPanel />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
