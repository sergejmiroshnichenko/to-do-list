const { todo } = require('../data');
const { sendGoodResponse } = require("../utils");

const getTodo = (app) => {
    app.get('/todo', (req, res) => {
        sendGoodResponse(res, todo)
    })
}
module.exports = getTodo;