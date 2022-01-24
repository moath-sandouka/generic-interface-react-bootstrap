import React from "react";
import "./assets/css/index.scss";
import { Route, Switch } from "react-router-dom";
import components from "./components";
import pages from "./pages";
import constants from "./constants";

function App() {
  return (
        <div className="d-flex flex-column">
            <components.NavigationBar/>
            <Switch>

                <Route path={constants.routes.HOMEPAGE} component={pages.Homepage}/>
                <Route path="/" component={pages.Homepage} />

            </Switch>
            <components.MainFooter />
            <components.CopyrightsFooter />
        </div>
  );
}

export default App;
