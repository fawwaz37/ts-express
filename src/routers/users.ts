import { Router, Response, Request } from "express";
import IRouter from "./routerInterface";

class UserRoutes implements IRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public routes(): void {
        this.router.get('/', (req, res) => {
            res.send('ini Users');
        })
        this.router.post('/post', (req: Request, res: Response) => {
            res.send(req.body);
        })
    }
}

export default new UserRoutes().router;