import { Router } from 'express'

import { CitiesController } from './../controllers'

const router = Router()

router.get('/', (_, response) => {
  return response.send('O servidor está funcionando.')
})

router.post('/cities', CitiesController.createValidation, CitiesController.create)

export default router
