import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class SemProps extends Component {
  state = {
    todoInput: '',
    todoList: [],
    todoCheck: false,
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  handleClick = (event, todoInput) => {
    event.preventDefault();
    this.setState((prevState) => ({
      todoList: [...prevState.todoList, todoInput],
      todoInput: '',
    }));
  };

  handleDelete = (indexToRemove) => {
    const { todoList } = this.state;
    this.setState({
      todoList: todoList.filter((_tarefa, index) => index !== indexToRemove),
    });
  };

  render() {
    const { todoInput, todoList, todoCheck } = this.state;
    return (
      <div>
        <header className="header">
          <h1>To-Do List Sem Props</h1>
          <Link to="/com-props">Ir para o todo-list com props</Link>
        </header>

        <form>
          <input
            type="text"
            className="todo-input"
            placeholder="Digite uma tarefa"
            name="todoInput"
            value={ todoInput }
            onChange={ this.handleChange }
          />
          <button
            type="submit"
            className="btn"
            onClick={ (event) => this.handleClick(event, todoInput) }
          >
            Criar Tarefa
          </button>
        </form>

        {
          todoList.length > 0 && (
            <section className="todo-list">
              {
                todoList.map((tarefa, index) => (
                  <div key={ index } className="todo-card">
                    <div className="content">
                      <input
                        type="checkbox"
                        name="todoCheck"
                        checked={ todoCheck }
                        onChange={ this.handleChange }
                      />
                      <p
                        className={ todoCheck ? 'todo-checked' : 'non-checked' }
                      >
                        { tarefa }
                      </p>
                    </div>
                    <button
                      className="btn"
                      onClick={ () => this.handleDelete(index) }
                    >
                      Deletar
                    </button>
                  </div>
                ))
              }
            </section>
          )
        }
      </div>
    );
  }
}

export default SemProps;
