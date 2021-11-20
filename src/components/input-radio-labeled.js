import { LitElement, html } from 'lit';

// TODO: Add styles?

// import styles from './input-radio-labeled-styles.js';

export class InputRadioLabeled extends LitElement {
  static get properties() {
    return {
      radioValue: { type: String },
      isChecked: { type: Boolean },
    };
  }

  // static get styles() {
  //   return styles;
  // }

  render() {
    return html`
      <label for=${this.radioValue} class="radio-label"
        >Show ${this.radioValue}</label
      >
      <input
        type="radio"
        @click=${() => this.dispatchCustomEvent()}
        id=${this.radioValue}
        name="todosToShow"
        .value=${this.radioValue}
        .checked=${this.isChecked}
      />
    `;
  }

  dispatchCustomEvent() {
    const event = new CustomEvent('radio-selected', {
      detail: {
        radioSelected: this.radioValue,
      },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }
}

customElements.define('input-radio-labeled', InputRadioLabeled);
