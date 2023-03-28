import {PostsRepository} from "../domain/PostsRepository";

export class GetPosts {
    private _postsRepository: PostsRepository

    constructor(postsRepository: PostsRepository) {
        this._postsRepository = postsRepository
    }

    async execute(): Promise<Post[]> {
        return this._postsRepository.getAll();
    }
}

type Post = {

}