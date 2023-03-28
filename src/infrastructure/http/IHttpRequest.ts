import {Request} from "express";

export interface IHttpRequest {
    body: Request['body'];
    query: Request['query'];
    params: Request['params'];
}