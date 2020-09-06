const bodyParser = require("body-parser");
const config = require("../config");
const routes = require("../api");

module.exports = async ({ app }) => {
    app.use(bodyParser.json());

    //Add middleware to add the container to req

    app.use(config.server.prefix, routes());
};