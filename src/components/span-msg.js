import { LitElement, html } from 'lit';

import styles from './span-msg-styles.js';

export default class SpanMsg extends LitElement {
  static get properties() {
    return {
      variant: { type: String },
      text: { type: String },
    };
  }

  static get styles() {
    return styles;
  }

  render() {
    return html`
      <span class=${`span-msg ${this.variant}`}>${this.text}</span>
    `;
  }
}

customElements.define('span-msg', SpanMsg);
