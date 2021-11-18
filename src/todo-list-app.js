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

    this.registerEvents();
  }

  registerEvents() {
    this.addEventListener('toggle-completed', event => {
      const idTodoToToggle = event.detail.id;
      this.toggleCompleted(idTodoToToggle);
    });

    this.addEventListener('delete-todo', event => {
      const idTodoDelete = event.detail.id;
      this.deleteToDo(idTodoDelete);
    });
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
    } else {
      // TODO: Mostrar mensaje de todo vacío
    }
  }

  deleteToDo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  toggleCompleted(id) {
    this.todos = this.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }

  updated() {
    storage.setTodos(this.todos);
  }
}
