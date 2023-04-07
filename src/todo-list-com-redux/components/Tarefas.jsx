import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeTodo } from '../redux/actions/actions';

class Tarefas extends Component {
  state = {
    todoCheck: false,
  };

  handleChange = ({ target }) => {
    const { name, checked } = target;
    this.setState({
      [name]: checked,
    });
  };

  handleDelete = (indexToRemove) => {
    const { dispatch } = this.props;
    dispatch(removeTodo(indexToRemove));
  };

  render() {
    const { todoCheck } = this.state;
    const { todoList } = this.props;
    if (todoList.length > 0) {
      return (
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
      );
    }
  }
}

const mapStateToProps = (state) => ({
  todoList: state.todoList,
});

Tarefas.propTypes = {
  dispatch: PropTypes.func.isRequired,
  todoList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default connect(mapStateToProps)(Tarefas);
