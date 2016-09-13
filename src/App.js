import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import portfolio from '../portfolio.json'

class App extends Component {
  render() {
    return (
      <div className="App">
        {portfolio.map(function (item) {
          return <PortfolioItem {...item}/>
        })}
      </div>
    );
  }
}

function PortfolioItem (props) {
  var style = {
    backgroundImage: 'url(' + props.image + ')'
  }
  return (
    <div style={style} className="PortfolioItem container">
      <Title name={props.name}/>
    </div>
  )
}


function Title (props) {
  return (
    <h2 className='PortfolioItem-title'>{props.name}</h2> 
  )
}

export default App;
