import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";

const PORT: number = 8000;

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.plugins();
        this.routes();
    }

    protected plugins(): void {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
    }

    protected routes(): void {
        this.app.get('/', (req: Request, res: Response) => {
            res.send('Masuk Pak Eko');
        })

        this.app.post('/posts', (req: Request, res: Response) => {
            console.log(req.body)
            res.send(req.body);
        })
    }
}

// const app = express();
//         app.use(express.urlencoded({ extended: true }));
//         app.use(express.json());
// app.get('/', (req, res) => {
//     res.send('test')
// })
// app.post('/post', (req, res) => {
//     res.send(req.body)
// })
const app = new App().app;
app.listen(PORT, () => {
    console.log(`App Listening at http://localhost:${PORT}`);
})

