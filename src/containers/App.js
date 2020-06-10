import React from 'react';
import './App.css';

import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'
import PersonApp from '../components/Persons/Cockpit'
import Card from '../components/UI/Card'
import Layout from './Layout'
import Blog from './Blog'
import Assign1 from '../components/Assign1'
import Assign2 from '../components/Assign2'
import Assign3 from '../components/Assign3'
import Assign4 from '../components/Assign4'

function App() {
  console.log('[App.js] ...........rendering');

  const NavigationLinks = (
      <nav>
          <Card><NavLink to="/person">Person</NavLink></Card>
          <Card><NavLink to="/assign1">Assign1</NavLink></Card>
          <Card><NavLink to="/assign2">Assign2</NavLink></Card>
          <Card><NavLink to="/assign3">Assign3</NavLink></Card>
          <Card><NavLink to="/assign4">Assign4</NavLink></Card>
          <Card><NavLink to="/blog">Blog</NavLink></Card>
          <Card><NavLink to="/burger">Burger</NavLink></Card>
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
            <Route path="/assign4" component={Assign4} />
            <Route path="/blog" component={Blog} />

            <Route path="/burger" component={Layout} />
            {/* <Redirect from="/" to="/burger" /> */}

            {/* <Route render={() => <h1>400 - Page not found.</h1>} /> */}
            <Route render={() => NavigationLinks} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;