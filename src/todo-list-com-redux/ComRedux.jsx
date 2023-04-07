import React, { Component } from 'react';
import '../App.css';
import Form from './components/Form';
import Tarefas from './components/Tarefas';

class ComRedux extends Component {
  render() {
    return (
      <div>
        <h1>To-Do List Com Redux</h1>
        <Form />
        <Tarefas />
      </div>
    );
  }
}

export default ComRedux;
