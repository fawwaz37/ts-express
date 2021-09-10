import { Request, Response } from "express";

interface Icontroller {
    index(req: Request, res: Response): Response;
    create(req: Request, res: Response): Response;
}

export default Icontroller;