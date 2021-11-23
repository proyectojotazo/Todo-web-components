import { LitElement, html } from 'lit';

export class InputRadioLabeled extends LitElement {
  static get properties() {
    return {
      radioValue: { type: String },
      isChecked: { type: Boolean },
    };
  }

  render() {
    return html`
      <label for=${this.radioValue}>Show ${this.radioValue}</label>
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
