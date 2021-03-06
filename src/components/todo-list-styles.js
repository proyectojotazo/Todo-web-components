import { css } from 'lit';

export default css`
  .todo-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    margin-top: 1rem;
    list-style: none;
  }

  .todo-list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .todo-list-item-icon {
    cursor: pointer;
    margin-left: auto;
    margin-right: 0.5rem;
    font-size: 14px;
  }

  .completed {
    text-decoration: line-through;
  }
`;
