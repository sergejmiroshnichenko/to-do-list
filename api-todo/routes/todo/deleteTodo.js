const {todo} = require("../data");
const {sendBadResponse, sendGoodResponse} = require("../utils");

const deleteTodo = (app) => {
    app.delete('/todo', (req, res) => {

        if (!req.query?.id) {
            sendBadResponse(res, 400, `Query param id is required. Get ${req.query?.id} instead of 'e697182e-3410-4fbc-b0e5-03b8cdd51b51`);
            return;
        }

        const index = todo.findIndex(({ id }) => id === req.query.id);
        if (index === -1) {
            sendBadResponse(res, 404, `Item with id '${req.query.id}' not found`);
            return;
        }


        todo.splice(index, 1);
        sendGoodResponse(res, todo);
    })
}
module.exports = deleteTodo;