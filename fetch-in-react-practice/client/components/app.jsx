import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    /**
     * Use fetch to send a GET request to `/api/todos`.
     * Then 😉, once the response JSON is received and parsed,
     * update state with the received todos.
     */
    fetch('http://localhost:3000/api/todos', Request)
    // console.log('Hi!')
      .then(response => response.json())
      .then(data =>
        this.setState({ todos: data }))
      .catch(error => {
        console.error('Error:', error);
      });
  }

  /**
      * Use fetch to send a POST request to `/api/todos`.
      * Then 😉, once the response JSON is received and parsed,
      *   - create a shallow copy of the todos array from state
      *   - add the todo received from the server to the copied array
      *   - replace the old todos array in state with the new one
      *
      * DO NOT MUTATE the original state array, nor any objects within it.
      * https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data
      *
      * TIP: Be sure to SERIALIZE the todo object in the body with JSON.stringify()
      * and specify the "Content-Type" header as "application/json"
      *
      * TIP: Use Array.prototype.concat to create a new array containing the contents
      * of the old array, plus the object returned by the server.
      */
  addTodo(newTodo) {

    const requestObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    };

    fetch('http://localhost:3000/api/todos', requestObj)
      .then(response => response.json())
      .then(data => { // newTodo.task = data.task;
        newTodo = data; // newTodo.todoId = data.todoId;
        const todosCopy = [...this.state.todos, newTodo];
        this.setState({ todos: todosCopy });
      })
      .catch(error => {
        console.error('Error:', error);
      });

  }

  toggleCompleted(todoId) {
    const objToCompl = this.state.todos.find(e => e.todoId === todoId);
    const toggleStatus = objToCompl.isCompleted;
    // console.log('objToCompl', objToCompl);
    const toggle = { isCompleted: !toggleStatus };

    fetch(`/api/todos/${todoId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(toggle)
    })
      .then(response => response.json())
      .then(data => {
        const todosCopy = [...this.state.todos];
        const index = todosCopy.map(o => o.todoId).indexOf(data.todoId);
        todosCopy[index] = data;
        // console.log('index', index);
        // console.log('todosCopy', todosCopy);
        this.setState({ todos: todosCopy });
      })
      .catch(error => {
        console.error('Error:', error);
      });

    /**
     * Find the index of the todo with the matching todoId in the state array.
     * Get its "isCompleted" status.
     * Make a new object containing ONE PROPERTY: the opposite "isCompleted" status.
     * Use fetch to send a PATCH request to `/api/todos/${todoId}`
     * Then 😉, once the response JSON is received and parsed,
     *   - create a shallow copy of the todos array from state
     *   - replace the old todo with the todo received from the server
     *   - replace the old todos in the state with the new one (you know the index).
     *
     * NOTE: "toggle" means to flip back and forth, so clicking a todo
     * in the list repeatedly should "toggle" its isCompleted status back and forth.
     *
     * DO NOT try to calculate the index of the todo by subtracting 1 from the id.
     *
     * DO NOT MUTATE the original state array, nor any objects within it.
     * https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data
     *
     * TIP: Be sure to SERIALIZE the updates in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
