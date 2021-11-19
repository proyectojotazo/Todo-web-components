import { LitElement, html } from 'lit';

import styles from './button-styles.js';

export default class Button extends LitElement {
  static get properties() {
    return {
      variant: { type: String },
    };
  }

  static get styles() {
    return styles;
  }

  render() {
    return html`
      <button class=${this.variant ? `btn ${this.variant}` : 'btn'}>
        <slot></slot>
      </button>
    `;
  }
}

customElements.define('custom-button', Button);
