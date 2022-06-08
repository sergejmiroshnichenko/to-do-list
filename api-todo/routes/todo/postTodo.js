const { todo } = require('../data');
const { v4: getId } = require('uuid');
const {sendBadResponse, sendGoodResponse} = require("../utils");

const postTodo = (app) => {
    app.post('/todo', (req, res) => {
        if (!req.body?.text ) {
            sendBadResponse(res, 400, `Body is required. Expected format: { text: 'some text' }`);
            return;
        }

            todo.push({
                id: getId(),
                isDone: false,
                text: req.body.text,
            })
            sendGoodResponse(res, todo[todo.length - 1]);
    })
}
module.exports = postTodo;