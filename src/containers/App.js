import React from 'react';
import './App.css';

// import PersonApp from '../components/Persons/Cockpit'
import Layout from './Layout'
import BurgerBuilder from '../containers/BurgerBuilder'
// import Blog from './Blog'
// import Assign1 from '../components/Assign1'
// import Assign2 from '../components/Assign2'
// import Assign3 from '../components/Assign3'

function App() {
  console.log('[App.js] ...........rendering');

  return (
    <div className="App">
      {/* <PersonApp /> */}
      <Layout>
        <BurgerBuilder />
      </Layout>
      {/* <Blog /> */}
      {/* <Assign1 /> */}
      {/* <Assign2 /> */}
      {/* <Assign3 /> */}
    </div>
  );
}

export default App;