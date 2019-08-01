import React from "react";
import { Switch, Route } from "react-router-dom";
import RecordList from "./RecordApp/RecordList";
import Users from "./Hooks/users";
import HooksMovie from "./Hooks-API/hooksApi";

import "./App.css";

function App() {
  return (
    <div style={{ marginTop: "30px" }}>
      <Switch>
        <Route path="/" exact component={Users} />
        <Route path="/recordList" exact component={RecordList} />
        <Route path="/hooksMovie" exact component={HooksMovie} />
      </Switch>
    </div>
  );
}

export default App;
