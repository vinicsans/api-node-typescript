import { Request, RequestHandler, Response } from 'express'
import * as yup from 'yup'

import { validation } from '../../shared/middleware'
import { StatusCodes } from 'http-status-codes'

interface IParamsProps {
  id?: number
}

interface IBodyProps {
  name: string
}

export const updateByIdValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(yup.object().shape({
    name: yup.string().required().min(3)
  })),

  params: getSchema<IParamsProps>(yup.object().shape({
    id: yup.number().integer().required().moreThan(0)
  }))
}))

// Se der erro, pode ser isso

export const updateById: RequestHandler = async (req: Request<IParamsProps, unknown, IBodyProps>, res: Response) => {
  console.log(req.body)
  console.log(req.params)
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado.')
}
