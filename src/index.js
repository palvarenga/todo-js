import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

// import { TodoList } from './classes/todo-list.class';
// import { Todo } from './classes/todo.class';

import './styles.css';

export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml(todo));

console.log('Todos', todoList.todos);

// todoList.todos[0].imprimirClase();


// const tarea = new Todo('Aprender JavaScript');

// todoList.nuevoTodo(tarea);

// crearTodoHtml(tarea);

// localStorage.setItem('mi-key', 'ABC1234');

// sessionStorage.setItem('mi-key', 'ABC123');

// setTimeout(() => {

//     localStorage.removeItem('mi-key');

// });