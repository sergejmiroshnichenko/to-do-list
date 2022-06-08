const express = require('express');
require('colors'); //eslint-disable-line

const cors = require('cors')
const bodyParser = require("body-parser");
const { queryParser } = require('express-query-parser')
const routes = require('./routes');
const PORT = 3001;

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(
    queryParser({
        parseNull: true,
        parseUndefined: true,
        parseBoolean: true,
        parseNumber: true
    })
)

routes(app);


app.listen(PORT, () => {
    console.log('================================================'.white)
    console.log(`Host is listening on PORT: ${PORT}`.white);
    console.log(`http://localhost:${PORT}/`.cyan);
    console.log('================================================'.white)
})