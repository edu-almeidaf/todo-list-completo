import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createTodo } from '../redux/actions/actions';

class Form extends Component {
  state = {
    todoInput: '',
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
    const { dispatch } = this.props;
    dispatch(createTodo(todoInput));
    this.setState({
      todoInput: '',
    });
  };

  render() {
    const { todoInput } = this.state;
    return (
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
    );
  }
}

Form.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Form);
