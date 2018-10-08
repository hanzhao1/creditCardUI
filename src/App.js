import React, { Component } from 'react';
import CreditCardInput from './components/CreditCardInput';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h4>
          Enter your credit card information
        </h4>
       <CreditCardInput />
      </div>
    );
  }
}

export default App;
