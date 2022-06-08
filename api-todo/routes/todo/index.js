const getTodo = require('./getTodo');
const postTodo = require('./postTodo');
const patchTodo = require('./patchTodo');
const putTodo = require('./putTodo');
const deleteTodo = require('./deleteTodo');

module.exports = (app) => {
    getTodo(app);
    postTodo(app);
    patchTodo(app);
    putTodo(app);
    deleteTodo(app);
}