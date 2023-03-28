import {Request, Response, Router} from "express";

const express = require('express')
const expressRouter = express.Router()
module.exports = () => {
    const router = new SignUpRouter()
    expressRouter.post('/signup', ExpressRouterAdapter.adapt(router))
}

class ExpressRouterAdapter {
    static adapt(router: any) { // TODO clase base para el tipo
        return async (req: Request, res: Response) => {
            const httpRequest = {
                body: req.body
            }
            const httpResponse = await router.route(httpRequest)
            res.status(httpResponse.statusCode).json(httpResponse.body)
        }
    }

}

class SignUpRouter {
    async route (httpRequest: any) {
        const { email, password, repeatPassword } = httpRequest.body
        const user = await new SignUpUseCase().signUp(email, password, repeatPassword)
        return {
            statusCode: 200,
            body: user
        }
    }
}



class SignUpUseCase {
    async signUp (email: string, password: string, repeatPassword: string) {
        if (password === repeatPassword) {
            await new AccountsRepository().add(email, password)
        }
    }
}

const mongoose = require('mongoose')
const AccountModel = mongoose.model('Account')
class AccountsRepository {
    async add (email: string, password: string) {
        const user = await AccountModel.create({ email, password })
        return user
    }
}