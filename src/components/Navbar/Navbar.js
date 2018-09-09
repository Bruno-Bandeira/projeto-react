import React, { Component } from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom';

class Navbar extends Component {
  state = {
    on: false,
  }

  toggle = () => {
    this.setState({
      on: !this.state.on
    })
  }
  
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg text-white">
          <div className="container-fluid">
            <div className="navbar-brand">
              <a className="navbar-toggle" onClick={this.toggle}><i className="fa fa-bars"></i></a>
              <Link to="/" className="ava-link" >AVA Teste</Link>
            </div>            
            <a href="" ><i className="fa fa-info-circle fa-lg"></i></a>
          </div>
        </nav>
        {this.state.on && this.props.children}
      </div>
    );
  }
}

export default Navbar;
