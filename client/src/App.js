
import React,{Fragment} from 'react'
import { Navbar } from './component/layout/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './component/pages/Home';
import About from './component/pages/About';
import './App.css';

function App() {
  return (
    <Fragment>
      <Navbar/>
      <div className="container">
        <switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </switch>
      </div>
    </Fragment>

 
  );
}

export default App;
