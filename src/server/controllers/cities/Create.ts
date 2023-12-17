import { Request, RequestHandler, Response } from 'express'
import * as yup from 'yup'

import { validation } from '../../shared/middleware'
import { StatusCodes } from 'http-status-codes'

interface ICities {
  name: string,
}

export const createValidation = validation((getSchema) => ({
  body: getSchema<ICities>(yup.object().shape({
    name: yup.string().required().min(3)
  }))
}))

// Se der erro, pode ser isso

export const create: RequestHandler = async (req: Request<unknown, unknown, ICities>, res: Response) => {
  console.log(req.body)
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado.')
}
