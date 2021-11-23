import { LitElement, html } from 'lit';

import styles from './button-styles.js';

export default class Button extends LitElement {
  static get properties() {
    return {
      bgColor: { type: String },
      variant: { type: String },
      size: { type: String },
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();

    this.size = 'sm';
  }

  render() {
    return html`
      <button class=${this.getStyledBtn()}>
        <slot></slot>
      </button>
    `;
  }

  getStyledBtn() {
    let basicStyle = `btn ${this.size}`;

    if (this.bgColor) {
      basicStyle += ` ${this.bgColor}`;
    }

    if (this.variant) {
      basicStyle += ` ${this.variant}`;
    }

    return basicStyle;
  }
}

customElements.define('custom-button', Button);
