// node modules
import { Router } from "express";

// controllers
import { IndexController } from "../controllers/index.controller";

// Index router definition
class IndexRouter {

    public router: Router;

    constructor() {
        this.router = Router();
        this.setRoutes();
    }

    private setRoutes(): void {
        this.router.route('/')
        .get(IndexController.home);
    }
}

export const indexRouter: Router = new IndexRouter().router;