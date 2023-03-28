export interface IHttpResponse {
    success: boolean;
    statusCode: number;
    body: {
        [result: string]: any;
        error?: string;
    };
}