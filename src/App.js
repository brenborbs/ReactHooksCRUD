import React from "react";
import { Switch, Route } from "react-router-dom";
import RecordList from "./RecordApp/RecordList";
import Users from "./Hooks/users";

import "./App.css";

function App() {
  return (
    <div style={{ marginTop: "30px" }}>
      <Switch>
        <Route path="/" exact component={Users} />
        <Route path="/recordList" exact component={RecordList} />
      </Switch>
    </div>
  );
}

export default App;
