const express = require("express");

const loaders = require("./loaders");
const config = require("./config");

async function startServer() {
    //Create an express app
    const app = express();
    //Create a container

    //Run loaders
    await loaders({ app: app });

    //Start listening
    app.listen(config.server.port, (err) => {
        if (err) {
            console.log(`Unable to start listening on ${config.server.port}`);
            process.exit(1);
        } else {
            console.log(`Started listening on ${config.server.port}`);
        }
    });
}

startServer();

// async function a() {
//     setTimeout(() => {
//         console.log("Hi from A");
//     }, 1000);
// }
// async function b() {
//     setTimeout(() => {
//         console.log("Hi from B");
//     }, 1000);
// }
// async function main() {
//     await a();
//     await b();
//     console.log("Hello");
// }

// main();