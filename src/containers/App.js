import React from 'react';
import './App.css';

import { BrowserRouter, Route, Redirect, Switch, NavLink } from 'react-router-dom'
import PersonApp from '../components/Persons/Cockpit'
import Layout from './Layout'
import BurgerBuilder from '../containers/BurgerBuilder'
import Blog from './Blog'
import Assign1 from '../components/Assign1'
import Assign2 from '../components/Assign2'
import Assign3 from '../components/Assign3'

function App() {
  console.log('[App.js] ...........rendering');

  const NavigationLinks = (
      <nav>
        <ul>
          <li><NavLink to="/person">Person</NavLink></li>
          <li><NavLink to="/assign1">Assign1</NavLink></li>
          <li><NavLink to="/assign2">Assign2</NavLink></li>
          <li><NavLink to="/assign3">Assign3</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
          <li><NavLink to="/burger">Burger</NavLink></li>
        </ul>
      </nav>
  )

  return (
    <BrowserRouter>
      <div className="App">
          <Switch>
            <Route path="/person" component={PersonApp} />
            <Route path="/assign1" component={Assign1} />
            <Route path="/assign2" component={Assign2} />
            <Route path="/assign3" component={Assign3} />
            <Route path="/blog" component={Blog} />
            <Route path="/burger" exact component={() => <Layout><BurgerBuilder /></Layout>} />
            {/* <Redirect from="/" to="/burger" /> */}
            {/* <Route render={() => <h1>400 - Page not found.</h1>} /> */}
            <Route render={() => NavigationLinks} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;