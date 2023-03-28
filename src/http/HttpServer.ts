import express, {Request, Response} from 'express';

export class HttpServer {
    server = express()

    start() {
        this.server.use(express.json());
        this.server.listen(4000, () => console.log("Running on http://localhost:4000"))
    }

    registerControllers() {
        this.server.get("/", (req: Request, res: Response) => { res.send('Home II') })
    }
}
