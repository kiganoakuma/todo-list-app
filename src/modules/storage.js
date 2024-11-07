// src/moudles/storage.js

import createProject from "./project";
import createTodo from "./todo";

const saveProjects = (projects) => {
  localStorage.setItem("projects", JSON.stringify(projects));
};

const loadProjects = () => {
  const projectsData = localStorage.getItem("projects");
  if (!projectsData) return [];

  return JSON.parse(projectsData).map((projectData) => {
    const project = createProject(projectData.title);
    console.log(projectsData);
    projectData.todos.forEach((todoData) => {
      const todo = createTodo(
        todoData.title,
        todoData.description,
        todoData.dueDate,
        todoData.priority,
      );
      project.addTodo(todo);
    });
    return project;
  });
};

export { saveProjects, loadProjects };
