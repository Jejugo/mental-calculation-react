import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  state = {
   	value1: null,
    value2: null,
    value3: null,
    proposedAnswer: null,
    numQuestions: null,
    numCorrect: null
  }

  componentDidMount(){
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
    const numQuestions = 0;
    const numCorrect = 0;

	this.setState({
      	value1: value1,
      	value2: value2,
      	value3: value3,
      	proposedAnswer: proposedAnswer,
      	numQuestions: numQuestions,
      	numCorrect: numCorrect
    });
  }
  
  checkSumTrue = (e) => {
   	if ((this.state.value1 + this.state.value2 + this.state.value3) === this.state.proposedAnswer){
      console.log("entrou aqui");
      const value1 = Math.floor(Math.random() * 100);
      const value2 = Math.floor(Math.random() * 100);
      const value3 = Math.floor(Math.random() * 100);
      const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
      const numQuestions = this.state.numQuestions + 1;
      const numCorrect = this.state.numCorrect + 1;
      
      this.setState({
		value1: value1,
      	value2: value2,
      	value3: value3,
      	proposedAnswer: proposedAnswer,
      	numQuestions: numQuestions,
      	numCorrect: numCorrect
      });
    }
    else{
      const value1 = Math.floor(Math.random() * 100);
      const value2 = Math.floor(Math.random() * 100);
      const value3 = Math.floor(Math.random() * 100);
      const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
      const numQuestions = this.state.numQuestions + 1;
      const numCorrect = this.state.numCorrect;
      
      this.setState({
		value1: value1,
      	value2: value2,
      	value3: value3,
      	proposedAnswer: proposedAnswer,
      	numQuestions: numQuestions,
      	numCorrect: numCorrect
      });
    }
  }

  checkSumFalse = (e) => {
   	if ((this.state.value1 + this.state.value2 + this.state.value3) === this.state.proposedAnswer){
      const value1 = Math.floor(Math.random() * 100);
      const value2 = Math.floor(Math.random() * 100);
      const value3 = Math.floor(Math.random() * 100);
      const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
      const numQuestions = this.state.numQuestions + 1;
      const numCorrect = this.state.numCorrect;
      
      this.setState({
		value1: value1,
      	value2: value2,
      	value3: value3,
      	proposedAnswer: proposedAnswer,
      	numQuestions: numQuestions,
      	numCorrect: numCorrect
      });
    }
    else{
      console.log("entrou aqui");
      const value1 = Math.floor(Math.random() * 100);
      const value2 = Math.floor(Math.random() * 100);
      const value3 = Math.floor(Math.random() * 100);
      const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
      const numQuestions = this.state.numQuestions + 1;
      const numCorrect = this.state.numCorrect + 1;
      
      this.setState({
		value1: value1,
      	value2: value2,
      	value3: value3,
      	proposedAnswer: proposedAnswer,
      	numQuestions: numQuestions,
      	numCorrect: numCorrect
      });
    }
  }

  render() {
    
    const {value1, value2, value3, proposedAnswer, numCorrect, numQuestions} = this.state;
    
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
          </div>
          <button onClick={this.checkSumTrue}>True</button>
          <button onClick={this.checkSumFalse}>False</button>
          <p className="text">
            Your Score: {numCorrect}/{numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
