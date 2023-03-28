import {PostsRepository} from "../domain/PostsRepository";
import {Post} from "../domain/Post";

export class CreatePost {
    private _postsRepository: PostsRepository

    constructor(postsRepository: PostsRepository) {
        this._postsRepository = postsRepository
    }

    async execute(post: Post) {
        this._postsRepository.create(post)

    }
}

type PostRequest = {
    name: string,
    author: string,
    createdAt: Date
}