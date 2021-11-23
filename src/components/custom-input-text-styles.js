import { css } from 'lit';

export default css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :host {
    flex-grow: 1;

    --bg-color: var(--input-bg-color, #fff);
    --border: var(--input-border, 1px solid #888);
    --box-shadow: var(--input-box-shadow, 1px 1px 1px #ccc);
    --font-family: var(--input-font-family, unset);
    --font-size: var(--input-font-size, 18px);
    --height: var(--input-height, 100%);
    --min-height: var(--input-min-heigth, 50px);
    --outline: var(--input-outline, none);
    --padding: var(--input-padding, 0.1rem 0.7rem);
    --width: var(--input-width, 75%);

    /* Variant vars */

    /* Bordered-bottom-vars*/
    --bordered-bottom-bg: var(--input-bordered-bottom-bg, #dad6d6);
    --bordered-bottom-border: var(
      --input-bordered-bottom-border,
      2px solid #000
    );
    --bordered-bottom-color: var(--input-bordered-bottom-color, #fff);
    --bordered-bottom-placeholder-color: var(
      --input-bordered-bottom-color,
      #fff
    );
    --bordered-bottom-box-shadow: var(
      --input-bordered-bottom-box-shadow,
      0px 0px 5px #999
    );

    /* CleanBtn vars */
  }

  .input {
    background-color: var(--bg-color);
    border: var(--border);
    box-shadow: var(--box-shadow);
    font-family: var(--font-family);
    font-size: var(--font-size);
    height: var(--height);
    min-height: var(--min-height);
    outline: var(--outline);
    padding: var(--padding);
    position: relative;
    width: var(--width);
  }

  /* Sizes */

  .full-width {
    width: 100%;
  }

  .lg {
    width: 75%;
  }

  .md {
    width: 50%;
  }

  .sm {
    width: 25%;
  }

  .full-width,
  .lg,
  .md,
  .sm,
  .clean-btn {
    margin-right: 0.5rem;
  }

  /* Variants */

  /* Bordered-bottom */

  .bordered-bottom {
    border: none;
    border-bottom: var(--bordered-bottom-border);
    box-shadow: var(--bordered-bottom-box-shadow);
    background-color: var(--bordered-bottom-bg);
    color: var(--bordered-bottom-color);
  }

  .bordered-bottom::placeholder {
    color: var(--bordered-bottom-placeholder-color);
  }

  /* Clean-Btn */

  .wrapper-clean-btn {
    display: flex;
    position: relative;
    height: 100%;
    align-items: center;
  }

  .clean-btn {
    cursor: pointer;
    font-size: 20px;
    height: inherit;
    line-height: var(--min-height);
    position: absolute;
    right: 0px;
    text-align: center;
    width: 40px;
  }

  .hidden {
    visibility: hidden;
  }
`;
