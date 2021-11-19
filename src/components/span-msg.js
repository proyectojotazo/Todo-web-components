import { LitElement, html } from 'lit';

import styles from './span-msg-styles.js';

export default class SpanMsg extends LitElement {
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
      <span class=${this.getStylesClass()}>
        <slot></slot>
      </span>
    `;
  }

  getStylesClass() {
    return this.variant ? `span-msg ${this.variant}` : 'span-msg';
  }
}

customElements.define('span-msg', SpanMsg);
