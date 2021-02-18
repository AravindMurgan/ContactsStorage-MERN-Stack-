
import React,{Fragment} from 'react'
import { Navbar } from './component/layout/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import About from './component/pages/About';
import ContactState from './context/contact/contactState';
import Home from './component/pages/Home';
import './App.css';

function App() {
  return (
    <ContactState>
    <Router>
      <Fragment>
        <Navbar/>
        <div className="container">
          
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
          
        
        </div>
      </Fragment>
    </Router>
    </ContactState>
 
  );
}

export default App;
