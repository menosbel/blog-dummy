import {HttpApp} from "./http/HttpApp";
import {defaultHttpAppConfig} from "./http/defaultHttpAppConfig";

(async () => {
    const app = new HttpApp(defaultHttpAppConfig())
    app.start()

    // const postsRepository = new InMemoryPostsRepository()
    // httpServer.use("/posts", postsController(postsRepository))
})()
