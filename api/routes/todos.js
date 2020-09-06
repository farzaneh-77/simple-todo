const router = require("express").Router();

module.exports = (app) => {
    app.use("/todos", router);

    router.get("/", (req, res) => {
        res.status(200).send("HI");
    });
};