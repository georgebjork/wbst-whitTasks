import 'bootstrap/dist/css/bootstrap.min.css';      //Bootstrap library
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './Components/Home/Home';
import { Why } from './Components/Why/Why';
import { About } from './Components/Team/Team';
import { Layout } from './Components/Layout/Layout';  //This will put a container around everything
import { Header } from './Components/Nav/Header';

//import Header from './containers/Header/Header'

function App() {
  return (
    <React.Fragment>
      <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/Why" component={ Why } />
            <Route path="/About" component={ About } />
          </Switch>
        </Router>

    </React.Fragment>
  );
}

export default App;