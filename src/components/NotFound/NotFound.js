import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

class NotFound extends Component {
  render() {
    return (
    	<div className="text-center">
		  	<div className="container">
  				<div className="card text-center">
  					<div className="card-body">
				  		<h1>404</h1>
				  		<h2>Página não Encontrada</h2>
				  		<Link className="btn btn-primary" to="/">Voltar para Home</Link>
				  	</div>
				</div>
			</div>
		</div>
    );
  }
}

export default NotFound;
