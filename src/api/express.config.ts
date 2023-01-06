import "reflect-metadata";
import { useExpressServer } from "routing-controllers";
import * as path from "path";

import express = require("express");

export async function startServer(port: string | number): Promise<void> {

    const app = express();
    app.use(express.json());

    console.info(`Starting server on http://localhost:${port}`);

    useExpressServer(app, {
        controllers: [path.join(__dirname,'..', "**", "*.controller.ts")],
    });

    await app.listen(port);

    console.info(`Server started on http://localhost:${port}`);
}



//Some questions:
// ------------------------------ 1. About different ways of starting a server ------------------------------
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



// ------------------------------ 2. About the reflect-metada lib ------------------------------
//it is necessary to import "reflect-metadata" when using routing-controllers. 
//This is because routing - controllers uses the Reflect metadata API, which is a part of the JavaScript language that allows 
//you to annotate your code with metadata that can be used at runtime.The "reflect-metadata" import is required to enable this feature.



// ------------------------------ 3. About the use of a Async function ------------------------------
// In general, it is a good practice to use async functions when working
// with asynchronous operations, such as starting a server,
// to make the code easier to read and understand.However,
// it is ultimately up to you to decide which approach is best for your specific use case.


// ------------------------------4. About the namespace 
// A namespace is a way to organize and group related code together. 
// It can contain functions, classes, variables, and other types that can be used by other modules
// Using namespaces can help you organize and group related code together, and it can also help you avoid naming conflicts when you have multiple types with the same name.
//For example, you might use a namespace to group all the types related to a specific feature 
// or functionality of your application, such as a "database" namespace that contains functions and classes related to interacting with a database.
// Using namespaces can also make your code easier to read and understand, as it helps to clearly separate different 
// parts of your code and indicate their purpose.
// link: https://www.typescriptlang.org/docs/handbook/namespaces.html

//In recent versions of TypeScript, the use of namespaces is generally considered to be less necessary, as the language has introduced 
// other features that can help you organize and modularize your code, such as modules and namespaces.
// That being said, there is nothing inherently wrong with using namespaces
// in your code, and you are free to use them if you think they can help you 
// organize and structure your code in a way that makes sense for your specific use case.
// link: https://levelup.gitconnected.com/typescript-best-practices-namespaces-exceptions-and-type-definitions-131d85579fa3


// ------------------------------4. About the express.json())
// When using express and routing - controllers to build a server application, you might want 
// to accept and process request bodies with different content types, such as JSON, form data, or raw text.
// To do this, you can use various middleware functions provided by express, such as express.json, express.urlencoded,
// and express.text, depending on the content type of the request body.
// For example, if you want to accept and process request bodies with a JSON content type,
// you can use the express.json middleware function. This function parses the request body as
// JSON and makes it available in the req.body property of the request object.
// On the other hand, if you are not using the express.json middleware function, the req.body 
// property will not be automatically populated with the parsed request body.You will need to parse the 
// request body yourself using other means, such as the Buffer or string functions.
// link: https://expressjs.com/en/api.html
