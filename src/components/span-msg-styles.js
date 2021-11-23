import { css } from 'lit';

export default css`
  .span-msg {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    height: 38.4px;
    text-align: center;
  }

  .success {
    background-color: #0028004c;
    border: 1px solid #009929;
    color: #005d16;
  }

  .error {
    background-color: #6a00004c;
    border: 1px solid #ff0000;
    color: #b10005;
  }

  .hidden {
    visibility: hidden;
  }
`;
