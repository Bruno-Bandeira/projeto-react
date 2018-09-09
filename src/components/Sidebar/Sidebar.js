import React, { Component } from 'react';
import './Sidebar.css';

import { Link } from 'react-router-dom';
import Activities from '../../_nav';

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
            <li>
              <Link className="painel-home" to="/"><i className="fa fa-tachometer"></i>Atividades</Link>
            </li>
            {
              Activities.map((item, indice) => {
                return (
                  <li key={indice}>
                    <Link to={"/atividade/" + item.url }><i className={"fa fa-" + (item.completed === true ? "check" : "times") }></i>{ item.title }</Link>
                  </li>
                )
              })
            }
        </ul>
      </div>
    );
  }
}

export default Sidebar;