import React, { Component } from 'react';

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
  			<Navbar>
  				<Sidebar />
  			</Navbar>
  			<Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/atividade/:atividade" component={Main}/>
          <Route path="*" component={NotFound} /> 
        </Switch>
      </div>
    );
  }
}

export default App;
