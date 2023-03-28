import express, {Request, Response} from "express";
import {GetPosts} from "../app/GetPosts";
import {CreatePost} from "../app/CreatePost";
import {PostsRepository} from "../domain/PostsRepository";

export default function postsController(postsRepository: PostsRepository) {
    const router = express.Router()
    const getPosts = new GetPosts(postsRepository)
    const createPost = new CreatePost(postsRepository)

    router.get('/', async (req: Request, res: Response) => {
        try {
            const posts = await getPosts.execute()
            res.send(posts)
        } catch (err: any) {
            console.log(err.message)
            res.status(500).send({ message: "Error fetching data" })
        }
    })

    router.post('/', async (req: Request, res: Response) => {
        try {
            await createPost.execute(req.body)
            res.statusCode = 201
            res.json({ message: "Created" })
        } catch (err: any) {
            console.log(err.message)
            res.status(500).send({ message: "Error saving data" })
        }
    })

    return router
}