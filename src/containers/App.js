import React from 'react';
import './App.css';

import PersonApp from '../components/Persons/Cockpit'
// import Assign1 from '../components/Assign1'
// import Assign2 from '../components/Assign2'

function App() {
  console.log('[App.js] ...........rendering');

  return (
    <div className="App">
      <h1>Hello World!!</h1>
      <PersonApp />
      {/* <Assign1 /> */}
      {/* <Assign2 /> */}
    </div>
  );
}

export default App;