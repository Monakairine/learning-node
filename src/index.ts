import "reflect-metadata";
import { useExpressServer } from "routing-controllers";
import dotenv from "dotenv"
import * as path from "path";
import express = require("express");

dotenv.config()
const PORT = process.env.PORT;
const app = express();

console.info(`Starting server on http://localhost:${PORT}`);

useExpressServer(app, {
  controllers: [path.join(__dirname, "**", "*.controller.ts")],
});

app.listen(PORT);

//Some questions:
// 1 -------------------- About different ways of starting a server
// import { UserController } from "controller/user.controller";
// import { createExpressServer } from "routing-controllers";
// import * as path from "path";

// const PORT = 4000;

// console.info(`Starting server on http://localhost:${PORT}`);

// const routes = [UserController];

// const app = createExpressServer({
//   controllers: [path.join(__dirname, "**", "*.controller.ts")],
// });

// app.listen(PORT);

// The main difference between the two codes is in the way that the Express server is being configured.
// In the second code, the server is being created using the express module,
//which is a popular framework for building web applications in Node.js.The server is then configured using the useExpressServer function 
//from the routing - controllers package.This function adds routing and controllers to the server.
// In the first code, the server is being created using the createExpressServer
//function from the routing - controllers package.This function creates an Express server
//and automatically configures routing and controllers for you.

// Both codes are doing the same thing, but the second code is using a convenience
//function that simplifies the process of creating and configuring an Express server.
//The first code gives you more control over the server, but it requires more code to set up.

// In both cases, the routes array is not being used.
//Instead, the controllers option is being set to a path pattern that specifies the location of the controllers.
//The path pattern path.join(__dirname, "**", "*.controller.ts") will match all files with the.controller.ts
//extension that are located in the current directory or any subdirectory.



// 2- About the reflect-metada lib ------------------------------
//it is necessary to import "reflect-metadata" when using routing-controllers. 
//This is because routing - controllers uses the Reflect metadata API, which is a part of the JavaScript language that allows 
//you to annotate your code with metadata that can be used at runtime.The "reflect-metadata" import is required to enable this feature.