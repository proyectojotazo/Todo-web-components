import { css } from 'lit';

export default css`
  :host {
    --btn-default-font-family: 'Trebuchet MS', 'Lucida Sans Unicode',
      'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

    --border: var(--btn-border, none);
    --border-radius: var(--btn-border-radius, 8px);
    --box-shadow: var(--btn-box-shadow, 1px 1px 1px black);
    --color: var(--btn-color, #000);
    --cursor: var(--btn-cursor, pointer);
    --font-family: var(--btn-font-family, var(--btn-default-font-family));
    --height: var(--btn-height, 40px);
    --padding: var(--btn-padding, 0.5rem);
    --transition: var(--btn-transition, all 0.1s);
    --width: var(--btn-width, 90px);
  }

  .btn {
    background-color: #9c9c9c;
    border: var(--border);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    color: var(--color);
    cursor: var(--cursor);
    font-family: var(--font-family);
    height: var(--height);
    padding: var(--padding);
    width: var(--width);
    transition: var(--transition);
  }

  .btn:hover {
    box-shadow: 2px 2px 1px black;
  }

  .btn:focus.primary,
  .btn:focus.danger,
  .btn:focus.secondary {
    box-shadow: 1px 1px 1px black;
  }

  /* Bg-colors */

  .primary,
  .secondary,
  .danger {
    color: #fff;
  }

  .primary {
    background-color: #4eaa03;
  }

  .btn:hover.primary {
    background-color: #419f00;
  }

  .secondary {
    background-color: #155db1;
  }

  .btn:hover.secondary {
    background-color: #005999;
  }

  .danger {
    background-color: #ff0000;
  }

  .btn:hover.danger {
    background-color: #f10010;
  }

  /* Sizes */

  .full-width,
  .lg,
  .md,
  .sm {
    letter-spacing: 1px;
  }

  .full-width {
    margin: 0 auto;
    height: 50px;
    width: 100%;
    font-size: 20px;
  }

  .lg {
    height: 50px;
    width: 105px;
    font-size: 18px;
  }

  .md {
    height: 40px;
    width: 80px;
    font-size: 14px;
  }

  .sm {
    height: 35px;
    width: 70px;
    font-size: 13px;
  }
`;
