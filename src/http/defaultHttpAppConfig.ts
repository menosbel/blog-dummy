import {HttpServer} from "./HttpServer";
import {Config} from "./HttpApp";
import {Core} from "../Core";

export function defaultHttpAppConfig(): Config {
    const httpServer = new HttpServer()
    const core = new Core()
    return new Config(httpServer, core)
}