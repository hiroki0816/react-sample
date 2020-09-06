import React from 'react';
import ReactDOM from "react-dom";
import './App.css';
import CounterApp from './counterApp';


class App extends React.Component {
  constructor() {
    super()
    this.state={
      todoList: [],
      value: '',
    }
  }

  onChange(e) {
    this.setState({value : e.target.value})
  }

  add() {　
    this.setState({
      todoList: this.state.todoList.concat(this.state.value),
      value: '',
    })
    
  }

  render() {
    const todoListNode = this.state.todoList.map((todo, idx) => {
      return <li key={idx}>{todo}</li>
    })

    return (
      <div>
        <h1>TODO App</h1>
        <input 
          type="text"
          value={this.state.value}
          onChange={e => this.onChange(e)}
        />
        <button onClick={() => this.add()}>追加</button>
        <ul>
          {todoListNode}
        </ul>
      </div>
    )
  }
}




export default App;