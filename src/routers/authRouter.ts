import baseRoutes from "./baseRouter";

import userController from "../controllers/userController";

class UserRoutes extends baseRoutes {

    public routes(): void {
        this.router.get('/', userController.index)
        this.router.post('/create', userController.create)
        this.router.get('/show/:id', userController.show)
        this.router.post('/update/:id', userController.update)
        this.router.get('/del/:id', userController.delete)
    }
}

export default new UserRoutes().router;