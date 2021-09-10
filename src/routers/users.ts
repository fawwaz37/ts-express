import { Router, Response, Request } from "express";
import IRouter from "./routerInterface";

import userController from "../controllers/userController";

class UserRoutes implements IRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public routes(): void {
        this.router.get('/', userController.index)
        this.router.post('/post', userController.create)
    }
}

export default new UserRoutes().router;