// import node modules
import { Router } from "express";

// import functions/controllers
import { getPost, getPosts, createPost, updatePost, deletePost } from "../controllers/posts.controller";

// Posts router definition
class PostsRouter {

    public router: Router;

    constructor() {
        this.router = Router();
        this.setRoutes();
    }

    private setRoutes(): void {
        this.router.route('/')
        .get(getPosts)
        .post(createPost);

        this.router.route('/:id')
        .get(getPost)
        .put(updatePost)
        .delete(deletePost);
    }
}

export const postsRouter: Router = new PostsRouter().router;