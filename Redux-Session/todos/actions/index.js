/*
let nextTodoId = 0
 export const addTodo = (text) => {
 return {
 type: 'ADD_TODO',
 id: nextTodoId++,
 text
 }
 }
 */
var nextTodoId = 0;
var addTodo = exports.addTodo = function addTodo(text) {
    console.log('Inside Adding TODo------------');
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text: text
  };
};


/*
 export const setVisibilityFilter = (filter) => {
 return {
 type: 'SET_VISIBILITY_FILTER',
 filter
 }
 }
 */
var setVisibilityFilter = exports.setVisibilityFilter = function setVisibilityFilter(filter) {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter: filter
  };
};

/*export const toggleTodo = (id) => {
 return {
 type: 'TOGGLE_TODO',
 id
 }
 }*/
var toggleTodo = exports.toggleTodo = function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    id: id
  };
};
