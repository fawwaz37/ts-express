import { Request, Response } from "express";
import Icontroller from "./userInterface";

class userController implements Icontroller {
    index(req: Request, res: Response): Response {
        return res.send('ini Users');
    }
    create(req: Request, res: Response): Response {
        return res.send(req.body);
    }

}

export default new userController();