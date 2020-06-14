import React from "react";

import { BrowserRouter as Router, Router, Route } from "react-router-dom";

import Join from "./components/join/Join";
import Chat from "./components/chat/Chat";

const App = () => (
  <Router>
    <Route path="/" exact component={Join} />
    <Route path="/chat" component={chat} />
  </Router>
);

export default App;
