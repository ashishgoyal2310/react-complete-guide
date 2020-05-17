import React from 'react';
import './App.css';

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import PersonApp from '../components/Persons/Cockpit'
import Layout from './Layout'
import BurgerBuilder from '../containers/BurgerBuilder'
import Blog from './Blog'
// import Assign1 from '../components/Assign1'
// import Assign2 from '../components/Assign2'
// import Assign3 from '../components/Assign3'

function App() {
  console.log('[App.js] ...........rendering');

  return (
    <BrowserRouter>
      <div className="App">
          <Switch>
            <Route path="/burger" exact component={() => <Layout><BurgerBuilder /></Layout>} />
            <Route path="/person" component={PersonApp} />
            <Route path="/blog" component={Blog} />
            {/* <Redirect from="/" to="/burger" /> */}
            <Route render={() => <h1>400 - Page not found.</h1>} />
            {/* <Assign1 /> */}
            {/* <Assign2 /> */}
            {/* <Assign3 /> */}
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;