import { LitElement, html } from 'lit';
import { v4 as uuidv4 } from 'uuid';

import './components/todo-list.js';

import storage from './services/storage.js';

import styles from './todo-list-app-styles.js';

export class TodoListApp extends LitElement {
  static get properties() {
    return {
      todos: { type: Array },
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this.todos = storage.getTodos();
  }

  render() {
    return html`<div class="container">
      <h2 class="todo-title">To Do</h2>
      <div class="todo-container">
        <todo-list .todos=${this.todos}></todo-list>
        <div class="input-wrapper">
          <input class="input-name" id="newitem" aria-label="New item" />
          <button class="btn add" @click=${this.addToDo}>Add</button>
        </div>
      </div>
    </div>`;
  }

  getListItem(todo) {
    const { id, text, completed } = todo;
    const icon = completed ? html`&#9989;` : html`&#10060;`;
    return html`
      <li class="todo-list-item">
        ${text}
        <span
          @click=${() => this.toggleCompleted(id)}
          @keyup=${onkeydown}
          class="todo-list-item-icon"
          >${icon}</span
        >
        <button @click=${() => this.deleteToDo(id)} class="btn delete">
          Delete
        </button>
      </li>
    `;
  }

  get input() {
    return this.renderRoot?.querySelector('#newitem') ?? null;
  }

  addToDo() {
    if (this.input.value !== '') {
      const newTodo = {
        id: uuidv4(),
        text: this.input.value,
        completed: false,
      };
      this.todos = [...this.todos, newTodo];
      this.input.value = '';
      storage.setTodos(this.todos);
    } else {
      // TODO: Mostrar mensaje de todo vacío
    }
  }

  deleteToDo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    storage.setTodos(this.todos);
  }

  toggleCompleted(id) {
    const todoToChangeCompleted = this.todos.find(todo => todo.id === id);
    todoToChangeCompleted.completed = !todoToChangeCompleted.completed;
    this.requestUpdate();
  }
}

// <!-- <ul class="todo-list">
// ${this.todos.length !== 0
// ? this.todos.map(todo => html`${this.getListItem(todo)}`)
// : html`<h2>No hay ToDos, crea uno!</h2>`}
// </ul> -->
