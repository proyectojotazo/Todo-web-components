import { LitElement, html } from 'lit';

import resetStyles from './reset-styles.js';

import './components/span-msg.js';
import './components/input-radio-labeled.js';
import './components/form-add-todo.js';
import './components/todo-list.js';

import storage from './services/storage.js';

import styles from './todo-list-app-styles.js';

export class TodoListApp extends LitElement {
  static get properties() {
    return {
      todos: { type: Array },
      todosToShow: { type: String },
    };
  }

  static get styles() {
    return [resetStyles, styles];
  }

  constructor() {
    super();
    this.todos = storage.getTodos();
    this.todosToShow = 'all';
    this.setFilteredTodos();
    this.registerEvents();
  }

  registerEvents() {
    this.addEventListener('add-todo', event => {
      const { newTodo, error } = event.detail;

      if (error) {
        this.setSpanMsg('error', 'Cannot create an empty ToDo');
      } else {
        this.addToDo(newTodo);
        this.setSpanMsg('success', 'ToDo created successfully');
      }

      this.setFilteredTodos();
    });

    this.addEventListener('toggle-completed', event => {
      const { id } = event.detail;
      this.toggleCompleted(id);
      this.setFilteredTodos();
    });

    this.addEventListener('delete-todo', event => {
      const { id } = event.detail;
      this.deleteToDo(id);
      this.setSpanMsg('success', 'ToDo deleted successfully');
      this.setFilteredTodos();
    });

    this.addEventListener('radio-selected', event => {
      const { radioSelected } = event.detail;
      this.setTodosToShow(radioSelected);
    });
  }

  render() {
    return html` <div class="container">
      <h2 class="todo-title">ToDo Creator</h2>
      <div class="todo-container">
        <span-msg variant="error" text="hola"></span-msg>
        <div class=${`radio-wrapper ${this.todos.length === 0 && 'hidden'}`}>
          <input-radio-labeled
            radioValue="all"
            ?isChecked=${this.getRadioSelected('all')}
          ></input-radio-labeled>
          <input-radio-labeled
            radioValue="completed"
            ?isChecked=${this.getRadioSelected('completed')}
          ></input-radio-labeled>
          <input-radio-labeled
            radioValue="uncompleted"
            ?isChecked=${this.getRadioSelected('uncompleted')}
          ></input-radio-labeled>
        </div>
        <form-add-todo></form-add-todo>
        <todo-list
          .todos=${this.getTodosToShow()}
          radioSelected=${this.todos.length !== 0 ? this.todosToShow : 'all'}
        ></todo-list>
      </div>
    </div>`;
  }

  get spanMsg() {
    return this.renderRoot?.querySelector('span-msg') ?? null;
  }

  getTodosToShow() {
    // eslint-disable-next-line no-nested-ternary
    return this.todosToShow === 'completed'
      ? this.todosCompleted
      : this.todosToShow === 'uncompleted'
      ? this.todosUncompleted
      : this.todos;
  }

  setTodosToShow(radioSelected) {
    this.todosToShow = radioSelected;
  }

  setFilteredTodos() {
    this.todosCompleted = this.todos.filter(todo => todo.completed);
    this.todosUncompleted = this.todos.filter(todo => !todo.completed);
  }

  getRadioSelected(value) {
    return this.todosToShow === value;
  }

  setSpanMsg(variant, text) {
    this.spanMsg.setAttribute('variant', variant);
    this.spanMsg.setAttribute('text', text);
    // TODO: Mirar timer
    /**
     * Creamos un temporizador que nos ocultará el mensaje ya sea de error o éxito
     * pasado X tiempo. Tambien nos lo reiniciará y limpiará el timer
     */
    this.spanTimer = setTimeout(() => {
      this.resetSpanMsg();
      clearTimeout(this.spanTimer);
    }, 1500);
  }

  resetSpanMsg() {
    this.spanMsg.setAttribute('variant', 'hidden');
    this.spanMsg.setAttribute('text', '');
  }

  addToDo(todo) {
    this.todos = [...this.todos, todo];
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
    this.todosToShow = this.todos.length === 0 ? 'all' : this.todosToShow;
  }
}
