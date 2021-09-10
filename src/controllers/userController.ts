import { Request, Response } from "express";
import Icontroller from "./userInterface";

let data: any[] = [
    {id: 1, name: "ini a"},
    {id: 2, name: "ini b"},
    {id: 3, name: "ini c"},
    {id: 4, name: "ini d"},
]

class userController implements Icontroller {
    index(req: Request, res: Response): Response {
        return res.send(data);
    }
    create(req: Request, res: Response): Response {
        let { id, name } = req.body;
        data.push({ id, name });
        return res.send(`Sukses Menambahkan: id: ${id}, name: ${name}`);
    }
    show(req: Request, res: Response): Response {
        let { id } = req.params;
        let find = data.find(x => x.id == id);
        return res.send(find);
    }
    update(req: Request, res: Response): Response {
        let { id } = req.params;
        let { name } = req.body;
        let find = data.find(x => x.id == id);
        find.name = name;
        return res.send(`Update id: ${id} name: ${name}`);
    }
    delete(req: Request, res: Response): Response {
        let { id } = req.params;
        let deletes = data.filter(x => x.id != id)
        return res.send(deletes)
    }

}

export default new userController();