import {HttpServer} from "./HttpServer";
import {Core} from "../Core";

export class HttpApp {
    public httpServer: HttpServer

    constructor(config: Config) {
        this.httpServer = config.httpServer
        this.registerControllers()
    }

    private registerControllers() {
        this.httpServer.registerControllers()
    }

    start() {
        this.httpServer.start()
    }
}

export class Config {
    httpServer: HttpServer
    core: Core

    constructor(httpServer: HttpServer, core: Core) {
        this.httpServer = httpServer
        this.core = core
    }
}