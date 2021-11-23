import { LitElement, html } from 'lit';

import styles from './custom-input-text-styles.js';

export default class CustomInputText extends LitElement {
  static get properties() {
    return {
      placeholder: { type: String },
      size: { type: String },
      variant: { type: String },
      value: { type: String },
      cleanBtn: { type: Boolean },
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this.value = '';
  }

  render() {
    if (this.cleanBtn) {
      return this.getInputWithCleanBtnTemplate();
    }
    return this.getInputTemplate();
  }

  getInputTemplate() {
    return html`
      <input
        class=${`input ${this.size} ${this.variant}`}
        type="text"
        placeholder=${this.placeholder}
      />
    `;
  }

  getInputWithCleanBtnTemplate() {
    return html`
      <div class=${`wrapper-clean-btn ${this.size || 'full-width'}`}>
        <input
          class=${`input full-width ${this.variant || ''}`}
          type="text"
          @input=${this.handleChange}
          placeholder=${this.placeholder}
          .value=${this.value}
        />
        <span
          class="clean-btn hidden"
          @click=${this.cleanInput}
          @keydown=${onkeydown}
          >&#10006;</span
        >
      </div>
    `;
  }

  get input() {
    return this.renderRoot?.querySelector('input') ?? null;
  }

  get span() {
    return this.renderRoot?.querySelector('span') ?? null;
  }

  handleChange(event) {
    this.value = event.target.value;
    this.toggleHideSpan();
  }

  cleanInput() {
    this.value = '';
    this.input.focus();
    this.span.classList.add('hidden');
  }

  toggleHideSpan() {
    if (this.value === '') {
      this.span.classList.add('hidden');
    } else {
      this.span.classList.remove('hidden');
    }
  }
}

customElements.define('custom-input-text', CustomInputText);
