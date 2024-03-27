const express = require('express')

module.exports = class Server {
    _app = express()

    constructor() {
        this._app.use(express.json())

        this._app.use(require("cors")({
            origin: true,
            credentials: true,
        }))

        this._app.use(require('./routes'))
    }
}