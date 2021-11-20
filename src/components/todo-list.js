import { LitElement, html } from 'lit';

import './button.js';

import styles from './todo-list-styles.js';

export default class TodoList extends LitElement {
  static get properties() {
    return {
      todos: { type: Array },
      radioSelected: { type: String },
    };
  }

  static get styles() {
    return styles;
  }

  render() {
    return this.getTodoListTemplate();
  }

  getTodoListTemplate() {
    return html`
      <ul class="todo-list">
        ${this.todos.length !== 0
          ? this.todos.map(todo => html`${this.getListItemTemplate(todo)}`)
          : html`<h2 class="todo-list-noTodos">${this.getEmptyTodosMsg()}</h2>`}
      </ul>
    `;
  }

  getListItemTemplate(todo) {
    const { id, text, completed } = todo;
    const icon = completed ? html`&#9989;` : html`&#10060;`;
    return html`
      <li class="todo-list-item">
        <p class=${`todo-list-item-text ${completed && 'completed'}`}>
          ${text}
        </p>
        <span
          @click=${() => this.dispatchCustomEvent(id, 'toggle-completed')}
          @keyup=${onkeydown}
          class="todo-list-item-icon"
          >${icon}</span
        >
        <custom-button
          @click=${() => this.dispatchCustomEvent(id, 'delete-todo')}
          variant="danger"
        >
          Delete
        </custom-button>
      </li>
    `;
  }

  getEmptyTodosMsg() {
    // eslint-disable-next-line no-nested-ternary
    return this.radioSelected === 'all'
      ? 'No todos yet, start creating your own!'
      : this.radioSelected === 'completed'
      ? 'No todos completed'
      : 'No todos uncompleted';
  }

  dispatchCustomEvent(id, eventName) {
    const event = new CustomEvent(eventName, {
      detail: {
        id,
      },
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(event);
  }
}

customElements.define('todo-list', TodoList);
