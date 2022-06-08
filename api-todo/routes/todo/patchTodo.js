const {todo} = require("../data");
const {sendBadResponse, sendGoodResponse} = require("../utils");

const patchTodo = (app) => {
    app.patch('/todo', (req, res) => {

        if (!req.body?.id) {
            sendBadResponse(res, 400, `Body is required. Expected format: { id: 'e697182e-3410-4fbc-b0e5-03b8cdd51b51' }`);
            return;
        }

        const index = todo.findIndex(({ id }) => id === req.body.id);
        if (index === -1) {
            sendBadResponse(res, 404, `Item with id '${req.body.id}' not found`);
            return;
        }


        todo[index].isDone = !todo[index].isDone;
        sendGoodResponse(res, todo[index]);
    })
}
module.exports = patchTodo;