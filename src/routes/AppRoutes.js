import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Home } from "../components/Home";
import { MailEmployee } from "../components/MailEmployee";
import { MainPanel } from "../components/MainPanel";
import { Profile } from "../components/Profile";
import { SideMenu } from "../components/SideMenu";

export default function AppRoutes() {
  return (
    <Router>
      <SideMenu />
      <div className="container">
        <Switch>

          <Route exact path="/profile/:account_id?">
            <Profile />
          </Route>

          <Route exact path="/panel">
            <MainPanel />
          </Route>

          <Route exact path="/mail">
            <MailEmployee />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
