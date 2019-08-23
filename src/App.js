import React from "react";
import { Switch, Route } from "react-router-dom";
import RecordList from "./RecordApp/RecordList";
import Users from "./Hooks/users";
import HooksMovie from "./Hooks-API/hooksApi";
import Navbar from "./Navbar";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div style={{ marginTop: "30px" }}>
        <Switch>
          <Route path="/" exact component={Users} />
          <Route path="/recordList" exact component={RecordList} />
          <Route path="/hooksMovie" exact component={HooksMovie} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
