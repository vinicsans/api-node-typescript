import { Request, RequestHandler, Response } from 'express'
import * as yup from 'yup'

import { validation } from '../../shared/middleware'
import { StatusCodes } from 'http-status-codes'

interface IQueryProps {
  page?: number,
  limit?: number,
  filter?: string
}

export const getAllValidation = validation((getSchema) => ({
  query: getSchema<IQueryProps>(yup.object().shape({
    page: yup.number().optional().moreThan(0),
    limit: yup.number().optional().moreThan(0),
    filter: yup.string().optional(),
  }))
}))

// Se der erro, pode ser isso

export const getAll: RequestHandler = async (req: Request<unknown, unknown, unknown, IQueryProps>, res: Response) => {
  console.log(req.query)
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado.')
}
