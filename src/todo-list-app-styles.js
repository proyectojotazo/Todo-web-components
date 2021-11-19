import { css } from 'lit';

export default css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .container {
    background-color: #ccc;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    min-height: 100vh;
    width: 80%;
  }

  .todo-title {
    border-bottom: 1px solid black;
    margin: 1rem 0;
    padding-bottom: 1rem;
    text-align: center;
    width: 100%;
  }

  .todo-container {
    width: 300px;
  }

  .input-wrapper {
    border-top: 1px solid black;
    display: flex;
    justify-content: space-between;
    padding-top: 0.5rem;
    width: 100%;
  }

  .input-name {
    outline: none;
    border: none;
    padding-left: 0.3rem;
  }
`;
