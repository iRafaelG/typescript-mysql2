// import node modules
import { Pool } from "mysql2/promise";
import { Request, Response } from "express";

// import database
import { connect } from "../database.config";

// import interfaces
import { IPost } from "../interfaces/posts.interface";

export async function getPost(req: Request, res: Response): Promise<Response<JSON>> {

    const postID: string = req.params.id;

    const conn: Pool = connect();

    const post: IPost | any = await conn.query('SELECT * FROM posts WHERE id = ?', postID);

    return res.status(200).json({ message: "OK", post: post[0] });
}

export async function getPosts(req: Request, res: Response): Promise<Response<JSON>> {

    const conn: Pool = connect();

    const posts: IPost[] | any = await conn.query('SELECT * FROM posts');

    return res.status(200).json({ message: "OK", posts: posts[0] });
}

export async function createPost(req: Request, res: Response): Promise<Response<JSON>> {

    const newPost: IPost = req.body;

    const conn: Pool = connect();

    await conn.query('INSERT INTO posts SET ?', newPost);

    return res.status(201).json({ message: 'Post created!'});
}

export async function updatePost(req: Request, res: Response): Promise<Response<JSON>> {

    const postUpdate: IPost = req.body;
    const postID: string = req.params.id;

    const conn: Pool = connect();

    await conn.query('UPDATE posts SET ? WHERE id = ?', [postUpdate, postID]);

    return res.status(202).json({ message: 'Post updated!'});    
}

export async function deletePost(req: Request, res: Response): Promise<Response<JSON>> {

    const postID: string = req.params.id;

    const conn: Pool = connect();

    await conn.query('DELETE FROM posts WHERE id = ?', postID);

    return res.status(204).json({ message: 'Post removed!'});
}