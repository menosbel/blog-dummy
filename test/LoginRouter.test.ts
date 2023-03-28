import {HttpRequest} from "../src/infrastructure/http/HttpRequest";

type LoginRequest = {
    body: {
        email: string
        password: string
    }
}

type HttpResponse = {
    statusCode: number
}

class LoginRouter {
    route(httpRequest: LoginRequest): HttpResponse {
        if (!httpRequest.body.email) {
            return {
                statusCode: 400
            }
        }
        return { statusCode: 200 }
    }
}

describe('Login Router', () => {
    test('should return 400 if email is not provided', () => {
        const loginRouter = new LoginRouter()
        const httpRequest = {
            body: {
                password: 'any_password'
            }
        }
        const httpResponse = loginRouter.route(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
    })
})