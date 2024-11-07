// src/modules/dom.js

import createProject from "./project";
import createTodo from "./todo";
import { saveProjects, loadProjects } from "./storage";

let selectedProjectIndex = -1;

const displayProjects = (projects) => {
  const projectsContainer = document.getElementById("projects");
  projectsContainer.innerHTML = "";

  projects.forEach((project, index) => {
    const projectElement = document.createElement("div");
    projectElement.classList.add("project");
    projectElement.textContent = project.title;
    projectElement.dataset.index = index;

    projectElement.addEventListener("click", () => {
      selectedProjectIndex = index;
      displayTodos(project);
      updateSelectedProjectUI(index);
    });

    projectsContainer.appendChild(projectElement);
  });
};

const displayTodos = (project, index) => {
  const todosContainer = document.getElementById("todos");
  todosContainer.innerHTML = "";

  project.todos.forEach((todo) => {
    const todoElement = document.createElement("div");
    todoElement.classList.add("todo");
    todoElement.textContent = `${todo.title} - Due: ${todo.dueDate} - Priority: ${todo.priority}`;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("Click", () => {
      editTodoForm(todo, index, project);
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      deleteTodo(index, project);
    });

    todoElement.appendChild(editButton);
    todoElement.appendChild(deleteButton);
    todosContainer.appendChild(todoElement);
  });
};

const updateSelectedProjectUI = (index) => {
  const projectElements = document.querySelectorAll("#projects .project");
  projectElements.forEach((el, i) => {
    if (i === index) {
      el.classList.add("selected");
    } else {
      el.classList.remove("selected");
    }
  });
};

const initializeUI = () => {
  let projects = loadProjects();
  displayProjects(projects);

  const projectForm = document.getElementById("project-form");
  projectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("project-title").value;
    const newProject = createProject(title);
    projects.push(newProject);
    saveProjects(projects);
    displayProjects(projects);
    projectForm.reset();
  });

  const todoForm = document.getElementById("todo-form");
  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const selectedProjectIndex = projects.findIndex(
      (p) =>
        p.title === document.querySelector("#projects .selected")?.textContent,
    );
    if (selectedProjectIndex === -1) return alert("Select a project first!");

    const title = document.getElementById("todo-title").value;
    const description = document.getElementById("todo-description").value;
    const dueDate = document.getElementById("todo-due-date").value;
    const priority = document.getElementById("todo-priority").value;
    const newTodo = createTodo(title, description, dueDate, priority);

    const selectedProject = projects[selectedProjectIndex];
    selectedProject.addTodo(newTodo);
    saveProjects(projects);
    displayTodos(projects[selectedProjectIndex]);
    todoForm.reset();
  });
};

const editTodoForm = (todo, index, project) => {
  document.getElementById("todo-title").value = todo.title;
  document.getElementById("todo-description").value = todo.description;
  document.getElementById("todo-due-date").value = todo.dueDate;
  document.getElementById("todo-priority").value = todo.priority;

  const todoForm = document.getElementById("todo-forml");
  todoForm.onsubmit = (e) => {
    e.preventDefault();

    todo.title = document.getElementById("todo-title").value;
    todo.description = document.getElementById("todo-description").value;
    todo.dueDate = document.getElementById("todo-due-date").value;
    todo.priority = document.getElementById("todo-priority").value;

    saveProjects(loadProjects());
    displayTodos(project);

    todoForm.onsubmit = addNewTodo;
    todoForm.reset();
  };
};

export { initializeUI, displayProjects, displayTodos };
