import createTodo from "./todo";

const createProject = (title) => {
  const todos = [];

  return {
    title,
    todos,

    addTodo(todo) {
      this.todos.push(todo);
    },

    removeTodo(index) {
      this.todos.splice(index, 1);
    },
  };
};

export default createProject;
