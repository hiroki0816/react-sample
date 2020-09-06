import React from 'react';
import ReactDOM from "react-dom";
import './App.css';
import TodoElement from "./TodoElement";
import AddTodo from "./AddTodo"


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      todoList: [],
      value: ""
    };
  }

  onChange(keyValue) {
    this.setState(keyValue);
  }

  add(todoElement) {
    this.setState({
      todoList: this.state.todoList.concat(todoElement),
      value: ""
    });
  }


  // handleDelete(id) {
  //   let todoList = this.state.todoList.concat()
  //   let index = 0
  //   todoList.map((element, idx) => {
  //     if (element.id == id) {
  //       index = idx
  //     }
  //   })
  //   todoList.splice(index, 1)
  //   this.setState({todoList: todoList})
  // }

  handleDelete(id) {
    let todoList = this.state.todoList.concat()
    let index = 0
    todoList.map((element, idx) => {
      if (element.id == id) {
        index = idx
      }
    })
    todoList.splice(index, 1)
    this.setState({todoList: todoList})
  }


  render() {
    const { todoList } = this.state;
    return (
      <div>
        <h1>TODO App</h1>
        <AddTodo
          {...this.state}
          onChange={keyValue => this.onChange(keyValue)}
          add={todoElement => this.add(todoElement)}
        />
        <ul>
          {todoList.map(element => (
            <TodoElement
              key={element.id}
              element={element}
              {...this.state}
              onDelete={() => this.handleDelete()}
            />
          ))}
        </ul>
      </div>
    );
  }
}





export default App;