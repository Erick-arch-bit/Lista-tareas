// index.js
import './styles.css';
import './darkmode.css';
import './js/darkmode';  // Importa la funcionalidad del modo oscuro

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml);
