// src/index.js

import "./style.css";
import createTodo from "./modules/todo";
import createProject from "./modules/project";
import { saveProjects, loadProjects } from "./modules/storage";
import { initializeUI } from "./modules/dom";

const sampleProject1 = createProject("Project Alpha");
const sampleProject2 = createProject("Project Beta");

const todo1 = createTodo(
  "Task 1",
  "First task description",
  "2024-12-01",
  "High",
);

const todo2 = createTodo(
  "Task 2",
  "Second task description",
  "2024-12-02",
  "Medium",
);

const todo3 = createTodo(
  "Task 3",
  "Third task description",
  "2024-12-03",
  "High",
);

sampleProject1.addTodo(todo1);
sampleProject1.addTodo(todo2);
sampleProject2.addTodo(todo3);

const projects = [sampleProject1, sampleProject2];
saveProjects(projects);

document.addEventListener("DOMContentLoaded", () => {
  initializeUI();
});
