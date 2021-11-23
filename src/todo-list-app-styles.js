import { css } from 'lit';

export default css`
  .container {
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
    letter-spacing: 1px;
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

  @media all and (max-width: 631px) {
    .container {
      width: 95%;
    }

    .todo-container {
      width: 100%;
    }
  }

  @media all and (max-width: 470px) {
    .radio-wrapper {
      flex-direction: column;
    }
  }
`;
