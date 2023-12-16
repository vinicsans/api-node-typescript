import { server } from './server/Server'
import 'dotenv/config'

server.listen(process.env.PORT, () => {
  console.log(`Servidor HTTP funcionando em: http://localhost:${process.env.PORT}`)
})
