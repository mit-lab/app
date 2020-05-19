import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import 'antd/dist/antd.css'; 


// components
import Main from './components/container/Main'
import Autorization from './components/container/Autorization'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/person" component={Main} />
          <Route path="/" component={Autorization} />
        </Switch>
      </Router>
    </div>
  );
}


export default App;
