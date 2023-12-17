import { Request, RequestHandler, Response } from 'express'
import * as yup from 'yup'

import { validation } from '../../shared/middleware'

interface ICities {
  name: string,
  state: string
}

interface IFilter {
  filter?: string,
}

export const createValidation = validation((getSchema) => ({
  body: getSchema<ICities>(yup.object().shape({
    name: yup.string().required().min(3),
    state: yup.string().required().min(3),
  })),

  query: getSchema<IFilter>(yup.object().shape({
    filter: yup.string().required().min(3),
  }))
}))

// Se der erro, pode ser isso

export const create: RequestHandler = async (req: Request<unknown, unknown, ICities>, res: Response) => {
  console.log(req.body)
  return res.send('Created.')
}
