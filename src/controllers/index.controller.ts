// import node modules
import { Request, Response } from "express";

// Index controller class definition
export class IndexController {

    static home(req: Request, res: Response): Response<JSON> {
        return res.status(200).json({ message: 'Hello, how are you?'});
    }
}