const {todo} = require("../data");
const {sendBadResponse, sendGoodResponse} = require("../utils");

const putTodo = (app) => {
    app.put('/todo', (req, res) => {

        if (!req.body?.text || !req.body?.id) {
            sendBadResponse(res, 400, `Body is required. Expected format: { id: 'e697182e-3410-4fbc-b0e5-03b8cdd51b51', text: 'some text' }`);
            return;
        }

        const index = todo.findIndex(({ id }) => id === req.body.id);
        if (index === -1) {
            sendBadResponse(res, 404, `Item with id '${req.body.id}' not found`);
            return;
        }


        todo[index].text = req.body.text;
        sendGoodResponse(res, todo[index]);
    })
}
module.exports = putTodo;