import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Join from "./components/join/Join.jsx";
import Chat from './components/chat/Chat.jsx';

const App = () => (
  
  <Router>
    <Route path="/" exact component={Join} />
  <Route path="/chat" component={Chat} />
  </Router>
);

export default App;
