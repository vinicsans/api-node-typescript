import { Request, RequestHandler, Response } from 'express'
import * as yup from 'yup'

import { validation } from '../../shared/middleware'
import { StatusCodes } from 'http-status-codes'

interface IParamsProps {
  id?: number
}

export const deleteByIdValidation = validation((getSchema) => ({
  params: getSchema<IParamsProps>(yup.object().shape({
    id: yup.number().integer().required().moreThan(0)
  }))
}))

// Se der erro, pode ser isso

export const deleteById: RequestHandler = async (req: Request<IParamsProps>, res: Response) => {
  console.log(req.params)
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado.')
}
