import { LitElement, html } from 'lit';
import { v4 as uuidv4 } from 'uuid';

import './button.js';

import styles from './form-add-todo-styles.js';

export default class FormAddTodo extends LitElement {
  static get styles() {
    return styles;
  }

  render() {
    return html` <form
      @submit=${this.dispatchCustomEvent}
      novalidate
      class="input-wrapper"
    >
      <input
        class="input-name"
        id="newitem"
        aria-label="New item"
        placeholder="Add new ToDo"
      />
      <custom-button @click=${this.dispatchCustomEvent} variant="primary"
        >Add</custom-button
      >
    </form>`;
  }

  get input() {
    return this.renderRoot?.querySelector('#newitem') ?? null;
  }

  dispatchCustomEvent(event) {
    event.preventDefault();

    const newTodo = {
      id: uuidv4(),
      text: this.input.value,
      completed: false,
    };

    const newEvent = new CustomEvent('add-todo', {
      detail: {
        newTodo,
        error: this.input.value === '',
      },
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(newEvent);

    this.input.value = '';
    this.input.focus();
  }
}

customElements.define('form-add-todo', FormAddTodo);
