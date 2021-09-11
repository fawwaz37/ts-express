import express, { Application, Request, Response } from "express";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";
import { config as dotenv } from "dotenv"

// Router
import UserRoutes from "./routers/users";

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.plugins();
        this.routes();
        dotenv();
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
            res.send('Hello World');
        })
        this.app.use('/users', UserRoutes);
    }
}

const app = new App().app;
app.listen(process.env.PORT, () => {
    console.log(`App Listening at http://localhost:${process.env.PORT}`);
})

