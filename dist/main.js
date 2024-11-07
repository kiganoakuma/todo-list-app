/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/todo */ \"./src/modules/todo.js\");\n/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/project */ \"./src/modules/project.js\");\n/* harmony import */ var _modules_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/storage */ \"./src/modules/storage.js\");\n/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/dom */ \"./src/modules/dom.js\");\n// src/index.js\n\n\n\n\n\n\nconst sampleProject1 = (0,_modules_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"Project Alpha\");\nconst sampleProject2 = (0,_modules_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"Project Beta\");\n\nconst todo1 = (0,_modules_todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n  \"Task 1\",\n  \"First task description\",\n  \"2024-12-01\",\n  \"High\",\n);\n\nconst todo2 = (0,_modules_todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n  \"Task 2\",\n  \"Second task description\",\n  \"2024-12-02\",\n  \"Medium\",\n);\n\nconst todo3 = (0,_modules_todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n  \"Task 3\",\n  \"Third task description\",\n  \"2024-12-03\",\n  \"High\",\n);\n\nsampleProject1.addTodo(todo1);\nsampleProject1.addTodo(todo2);\nsampleProject2.addTodo(todo3);\n\nconst projects = [sampleProject1, sampleProject2];\n(0,_modules_storage__WEBPACK_IMPORTED_MODULE_2__.saveProjects)(projects);\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  (0,_modules_dom__WEBPACK_IMPORTED_MODULE_3__.initializeUI)();\n});\n\n\n//# sourceURL=webpack://todo-list-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayProjects: () => (/* binding */ displayProjects),\n/* harmony export */   displayTodos: () => (/* binding */ displayTodos),\n/* harmony export */   initializeUI: () => (/* binding */ initializeUI)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/modules/todo.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ \"./src/modules/storage.js\");\n// src/modules/dom.js\n\n\n\n\nlet selectedProjectIndex = -1;\n\nconst displayProjects = (projects) => {\n  const projectsContainer = document.getElementById(\"projects\");\n  projectsContainer.innerHTML = \"\";\n\n  projects.forEach((project, index) => {\n    const projectElement = document.createElement(\"div\");\n    projectElement.classList.add(\"project\");\n    projectElement.textContent = project.title;\n    projectElement.dataset.index = index;\n\n    projectElement.addEventListener(\"click\", () => {\n      selectedProjectIndex = index;\n      displayTodos(project);\n      updateSelectedProjectUI(index);\n    });\n\n    projectsContainer.appendChild(projectElement);\n  });\n};\n\nconst displayTodos = (project) => {\n  const todosContainer = document.getElementById(\"todos\");\n  todosContainer.innerHTML = \"\";\n\n  project.todos.forEach((todo) => {\n    const todoElement = document.createElement(\"div\");\n    todoElement.classList.add(\"todo\");\n    todoElement.textContent = `${todo.title} - Due: ${todo.dueDate}`;\n\n    todosContainer.appendChild(todoElement);\n  });\n};\n\nconst updateSelectedProjectUI = (index) => {\n  const projectElements = document.querySelectorAll(\"#projects .project\");\n  projectElements.forEach((el, i) => {\n    if (i === index) {\n      el.classList.add(\"selected\");\n    } else {\n      el.classList.remove(\"selected\");\n    }\n  });\n};\n\nconst initializeUI = () => {\n  let projects = (0,_storage__WEBPACK_IMPORTED_MODULE_2__.loadProjects)();\n  displayProjects(projects);\n\n  const projectForm = document.getElementById(\"project-form\");\n  projectForm.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    const title = document.getElementById(\"project-title\").value;\n    const newProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(title);\n    projects.push(newProject);\n    (0,_storage__WEBPACK_IMPORTED_MODULE_2__.saveProjects)(projects);\n    displayProjects(projects);\n    projectForm.reset();\n  });\n\n  const todoForm = document.getElementById(\"todo-form\");\n  todoForm.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    const selectedProjectIndex = projects.findIndex(\n      (p) =>\n        p.title === document.querySelector(\"#projects .selected\")?.textContent,\n    );\n    if (selectedProjectIndex === -1) return alert(\"Select a project first!\");\n\n    const title = document.getElementById(\"todo-title\").value;\n    const description = document.getElementById(\"todo-description\").value;\n    const dueDate = document.getElementById(\"todo-due-date\").value;\n    const priority = document.getElementById(\"todo-priority\").value;\n    const newTodo = (0,_todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(title, description, dueDate, priority);\n\n    const selectedProject = projects[selectedProjectIndex];\n    selectedProject.addTodo(newTodo);\n    (0,_storage__WEBPACK_IMPORTED_MODULE_2__.saveProjects)(projects);\n    displayTodos(projects[selectedProjectIndex]);\n    todoForm.reset();\n  });\n};\n\n\n\n\n//# sourceURL=webpack://todo-list-app/./src/modules/dom.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/modules/todo.js\");\n\n\nconst createProject = (title) => {\n  const todos = [];\n\n  return {\n    title,\n    todos,\n\n    addTodo(todo) {\n      this.todos.push(todo);\n    },\n\n    removeTodo(index) {\n      this.todos.splice(index, 1);\n    },\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProject);\n\n\n//# sourceURL=webpack://todo-list-app/./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadProjects: () => (/* binding */ loadProjects),\n/* harmony export */   saveProjects: () => (/* binding */ saveProjects)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/modules/todo.js\");\n// src/moudles/storage.js\n\n\n\n\nconst saveProjects = (projects) => {\n  localStorage.setItem(\"projects\", JSON.stringify(projects));\n};\n\nconst loadProjects = () => {\n  const projectsData = localStorage.getItem(\"projects\");\n  if (!projectsData) return [];\n\n  return JSON.parse(projectsData).map((projectData) => {\n    const project = (0,_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(projectData.title);\n    console.log(projectsData);\n    projectData.todos.forEach((todoData) => {\n      const todo = (0,_todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n        todoData.title,\n        todoData.description,\n        todoData.dueDate,\n        todoData.priority,\n      );\n      project.addTodo(todo);\n    });\n    return project;\n  });\n};\n\n\n\n\n//# sourceURL=webpack://todo-list-app/./src/modules/storage.js?");

/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createTodo = (\n  title,\n  description,\n  dueDate,\n  priority,\n  notes = \"\",\n  checklist = [],\n) => {\n  return {\n    title,\n    description,\n    dueDate,\n    priority,\n    notes,\n    checklist,\n    completed: false,\n\n    toggleComplete() {\n      this.completed = !this.completed;\n    },\n\n    addChecklistItem(item) {\n      this.checklist.push(item);\n    },\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTodo);\n\n\n//# sourceURL=webpack://todo-list-app/./src/modules/todo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;