import { css } from 'lit';

export default css`
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
    width: 500px;
  }

  .radio-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    width: 100%;
    gap: 1.5rem;
  }

  .hidden {
    visibility: hidden;
  }
`;
