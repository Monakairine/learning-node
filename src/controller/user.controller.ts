import { Controller, Get, Req, Body} from "routing-controllers";

@Controller()
export class UserController {
  @Get("/users")
  getUsers(@Req() @Body() body: any) {
    return "list of users";
  }
}

// 1 . About the @Controller 
// The @Controller() decorator is used to define a class as a controller in the routing - controllers framework.
// It specifies that the class should be used to handle HTTP requests and route them to the appropriate handler
// functions(also known as action methods).The @Controller() decorator can also accept a path parameter,
// which specifies the base path for all routes defined in the controller.For example, 
// if you use @Controller("/users"), all routes defined in the controller will be prefixed with /users.


// 2. About decorator
// In TypeScript, a decorator is a special kind of function that can be used to modify or 
// decorate classes, methods, properties, and parameters.It is a design pattern that 
// is used to extend the functionality of a class or object without modifying its source code.Decorators 
// are a feature of the TypeScript language, and they can be used to add additional 
// functionality to classes, methods, properties, and parameters at runtime.
