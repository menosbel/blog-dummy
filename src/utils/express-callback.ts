import {Request, Response} from 'express';
import {StatusCodes} from "http-status-codes";
import {ClientError} from "../infrastructure/http/errors/ClientError";
import {IHttpResponse} from "../infrastructure/http/IHttpResponse";
import {Controller} from "../controllers/Controller";

export const buildExpressCallback = (controller: Controller) => {
	return async (req: Request, res: Response) => {
		try {
			const httpRequest = {
				body: req.body,
				query: req.query,
				params: req.params,
			};
			const httpResponse: IHttpResponse = await controller(httpRequest);

			res.json(httpResponse.body);
		} catch (error: any) {
			console.log(error);

			const errorMessage =
				error instanceof ClientError ? error.message : 'Some error occurred';

			res.json({
				success: false,
				statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
				body: {
					error: errorMessage,
				},
			});
		}
	};
};
