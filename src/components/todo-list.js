import { LitElement, html } from 'lit';

import storage from '../services/storage.js';

import styles from './todo-list-styles.js';

export default class TodoList extends LitElement {
  static get properties() {
    return {
      todos: { type: Array },
    };
  }

  static get styles() {
    return styles;
  }

  render() {
    return html`
      <ul class="todo-list">
        ${this.todos.length !== 0
          ? this.todos.map(todo => html`${this.getListItem(todo)}`)
          : html`<h2 class="todo-list-noTodos">No hay ToDos, crea uno!</h2>`}
      </ul>
    `;
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

customElements.define('todo-list', TodoList);
