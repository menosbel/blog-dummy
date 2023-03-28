import {IHttpResponse} from "../infrastructure/http/IHttpResponse";
import {IHttpRequest} from "../infrastructure/http/IHttpRequest";

export type Controller = (
    request: Partial<IHttpRequest>,
) => Promise<IHttpResponse>;