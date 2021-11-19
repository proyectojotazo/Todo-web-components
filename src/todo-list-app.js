import { LitElement, html } from 'lit';
import { v4 as uuidv4 } from 'uuid';

import './components/todo-list.js';
import './components/button.js';
import './components/span-msg.js';

import storage from './services/storage.js';

import styles from './todo-list-app-styles.js';

export class TodoListApp extends LitElement {
  static get properties() {
    return {
      todos: { type: Array },
      isSpanMsgHidden: { type: Boolean },
      spanMsg: { type: String },
      spanVariant: { type: String },
      spanTimer: { type: Number },
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this.todos = storage.getTodos();
    this.isSpanMsgHidden = true;

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
      this.setSpanMsg('success', 'ToDo borrado con éxito');
    });
  }

  render() {
    return html`<div class="container">
      <h2 class="todo-title">To Do</h2>
      <div class="todo-container">
        <todo-list .todos=${this.todos}></todo-list>
        <div class="input-wrapper">
          <input
            @input=${() => {
              this.resetSpan();
            }}
            class="input-name"
            id="newitem"
            aria-label="New item"
          />
          <custom-button @click=${this.addToDo} variant="primary"
            >Add</custom-button
          >
        </div>
        ${this.getSpan()}
      </div>
    </div>`;
  }

  get input() {
    return this.renderRoot?.querySelector('#newitem') ?? null;
  }

  getSpan() {
    return !this.isSpanMsgHidden
      ? html`<span-msg variant=${this.spanVariant}> ${this.spanMsg} </span-msg>`
      : html``;
  }

  setSpanMsg(variant, text) {
    this.isSpanMsgHidden = false;
    this.spanVariant = variant;
    this.spanMsg = text;

    // Creamos un temporizador que nos ocultará el mensaje ya sea de error o éxito
    this.spanTimer = setTimeout(() => {
      this.isSpanMsgHidden = true;
    }, 2000);
  }

  resetSpan() {
    this.isSpanMsgHidden = true;
    this.spanVariant = '';
    this.spanMsg = '';

    // Limpiamos el temporizador en caso de que cambie el valor del input
    clearTimeout(this.spanTimer);
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
      this.setSpanMsg('success', 'ToDo creado con éxito!');
    } else {
      // TODO: Mostrar mensaje de todo vacío
      this.setSpanMsg('error', 'No se puede crear un ToDo vacío');
    }

    this.input.focus();
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
