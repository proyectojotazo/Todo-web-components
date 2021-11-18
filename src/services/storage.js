export default {
  setTodos(array) {
    localStorage.setItem('todosList', JSON.stringify(array));
  },
  getTodos() {
    return JSON.parse(localStorage.getItem('todosList')) || [];
  },
};
