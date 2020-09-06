const router = require("express").Router();

const todosRouter = require("./todos");

module.exports = (app) => {
    app.use("/", router);

    todosRouter(app);

    router.get("/", (req, res) => {
        res.send("index");
    });
}