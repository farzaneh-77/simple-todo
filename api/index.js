const Router = require("express").Router;
const routes = require("./routes");

module.exports = () => {
    const app = Router();
    routes(app);
    return app;
}