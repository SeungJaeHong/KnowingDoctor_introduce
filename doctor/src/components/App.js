import React from 'react';
import '../style/bootstrap.scss'
import Navbar from './Navbar';
import AppRouter from './Router';
import {BrowserRouter as Router} from 'react-router-dom'
function App() {
  return (
    <>

    <Router>
      <header>
        <Navbar></Navbar>
      </header>
      <AppRouter></AppRouter>
    </Router>
    </>
   
  );
}

export default App;
