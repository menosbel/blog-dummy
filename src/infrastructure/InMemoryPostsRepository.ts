import {PostsRepository} from "../domain/PostsRepository";
import {Post} from "../domain/Post";

export class InMemoryPostsRepository implements PostsRepository {
    create(post: Post): number {
        return 1
    }

    getAll(): Post[] {
        return [new Post('Post title', 'Author')];
    }

}