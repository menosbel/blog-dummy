import {Post} from "./Post";

export interface PostsRepository {
    getAll(): Post[]
    create(post: Post): number
}