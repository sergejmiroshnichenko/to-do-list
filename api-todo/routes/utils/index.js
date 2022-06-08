/**
 * @param res {{status: function, send: function}}
 * @param data {any}
 */
const sendGoodResponse = (res, data) => {
    res.status(200).send(JSON.stringify({
        status: 'success',
        data,
    }))
}

/**
 * @param res {{status: function, send: function}}
 * @param status {number}
 * @param error {string}
 */
const sendBadResponse = (res, status, error) => {
    res.status(status).send(JSON.stringify({
        status: 'error',
        error,
    }))
}

module.exports = {
    sendGoodResponse,
    sendBadResponse,
}