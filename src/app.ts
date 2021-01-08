// import node modules
import morgan from "morgan";
import express, { Application } from "express";

// import routers
import { indexRouter } from "./routers/index.router";
import { postsRouter } from "./routers/posts.router";

// App class definition
export class App {

    private app: Application;

    constructor(private port?: number | string) {
        this.app = express();
        this.middlewares();
        this.settings();
        this.routers();
    }

    private settings(): void {
        this.app.set('port', this.port || process.env.PORT || 3001);
    }

    private middlewares(): void {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    private routers(): void {
        this.app.use('/', indexRouter);
        this.app.use('/posts', postsRouter);
    }

    public listen(): void {
        this.app.listen(this.app.get('port'));
        console.log(`Server on port ${this.app.get('port')}`);
    }
}