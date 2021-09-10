import express, { Application, Request, Response } from "express";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";

// Router
import UserRoutes from "./routers/users";

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
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
    }

    protected routes(): void {
        this.app.get('/', (req: Request, res: Response) => {
            res.send('Masuk Pak Eko');
        })
        this.app.use('/users', UserRoutes);
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

