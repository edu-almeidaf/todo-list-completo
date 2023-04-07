import React, { Component } from 'react';
import '../App.css';
import Form from './components/Form';
import Tarefas from './components/Tarefas';
import Header from './components/Header';

class ComProps extends Component {
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
      <>
        <Header />

        <Form
          todoInput={ todoInput }
          handleChange={ this.handleChange }
          handleClick={ this.handleClick }
        />

        {
          todoList.length > 0 && (
            <Tarefas
              todoList={ todoList }
              todoCheck={ todoCheck }
              handleChange={ this.handleChange }
              handleDelete={ this.handleDelete }
            />
          )
        }
      </>
    );
  }
}

export default ComProps;
