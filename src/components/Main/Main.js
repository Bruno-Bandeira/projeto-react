import React, { Component } from 'react';
import Activities from '../../_nav';
import './Main.css';

class Main extends Component {
  render() {
    return (
    	<div className="text-center">
		  	<div className="container">
  				<div className="card">
				  	<div className="card-header bg-info text-white">
				  		{ Activities.map((item, indice) => {
			                return (
			                  <div key={indice}>
			                    {( this.props.match.params.atividade === item.url ? item.title : '' )}
			                  </div>
			                )}
			            )}
				  	</div>
				  	<div className="card-body">
				    	<h5 class="card-title">Descrição desta atividade:</h5>
				    	<p className="card-text">
				    		{ Activities.map((item, indice) => {
			                	return (
				                  <div key={indice}>
				                    {( this.props.match.params.atividade === item.url ? item.description : '' )}
				                  </div>
			                	)}
			            	)}
				    	</p>
				    	<button disabled className="btn btn-info" >
				    		{ Activities.map((item, indice) => {
			                	return (
				                  <div key={indice}>
				                    {( this.props.match.params.atividade === item.url ? item.completed === true ? 'Concluido' : 'Em aberto' : '' )}
				                  </div>
			                	)}
			            	)}
				    	</button>
				  	</div>
				</div>
			</div>
		</div>
    );
  }
}

export default Main;
