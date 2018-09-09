import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
    	<div className="text-center">
		  	<div className="container">
  				<div className="card">
				  	<div className="card-header bg-info text-white">
				  		Seja Bem-vindo!
				  	</div>
				  	<div className="card-body">
				    	<h5 class="card-title">Acesse o Menu Lateral para ver suas atividades...</h5>
				  	</div>
				</div>
			</div>
		</div>
    );
  }
}

export default Home;
