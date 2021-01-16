import React from "react";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className='app'>
      <div className='app__body'>
        <Router>
          <Sidebar></Sidebar>
          <Switch>
            <Route path='/rooms/:roomId'>
              <Chat></Chat>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
