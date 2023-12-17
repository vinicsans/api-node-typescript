import * as getAll from './GetAll'
import * as deleteById from './DeleteById'
import * as updateById from './UpdateById'
import * as getById from './GetById'
import * as create from './Create'

export const CitiesController = {
  ...getAll,
  ...getById,
  ...updateById,
  ...deleteById,
  ...create,
}

