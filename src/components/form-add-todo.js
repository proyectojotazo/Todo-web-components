import { LitElement, html } from 'lit';
import { v4 as uuidv4 } from 'uuid';

import './button.js';
import './custom-input-text.js';

import styles from './form-add-todo-styles.js';
import resetStyles from '../reset-styles.js';

export default class FormAddTodo extends LitElement {
  static get styles() {
    return [resetStyles, styles];
  }

  render() {
    return html` <form novalidate class="input-wrapper">
      <custom-input-text
        placeholder="Add new ToDo"
        ?cleanBtn=${true}
      ></custom-input-text>
      <custom-button
        @click=${this.dispatchCustomEvent}
        size="full-width"
        bgColor="primary"
        >Add</custom-button
      >
    </form>`;
  }

  get input() {
    return (
      this.renderRoot
        ?.querySelector('custom-input-text')
        .shadowRoot.querySelector('input') ?? null
    );
  }

  get spanClearBtn() {
    return (
      this.renderRoot
        ?.querySelector('custom-input-text')
        .shadowRoot.querySelector('span') ?? null
    );
  }

  dispatchCustomEvent(event) {
    event.preventDefault();

    const newTodo = {
      id: uuidv4(),
      text: this.input.value,
      completed: false,
    };

    const newEvent = this.createEvent('add-todo', {
      newTodo,
      error: this.input.value === '',
    });

    this.dispatchEvent(newEvent);

    // Reseting custom-input
    this.input.value = '';
    this.input.focus();
    this.spanClearBtn?.classList.add('hidden');
  }

  // eslint-disable-next-line class-methods-use-this
  createEvent(eventName, detail) {
    return new CustomEvent(eventName, {
      detail,
      bubbles: true,
      composed: true,
    });
  }
}

customElements.define('form-add-todo', FormAddTodo);
