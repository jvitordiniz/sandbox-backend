import { Router, Request, Response } from 'express'

import { getTasks, saveTask, getTask, updateTask, finishedTask, removeTask } from './controller/TasksController'

const routes = Router()

routes.get('/', (req: Request, res: Response) => {
  return res.json({ message: 'hello' })
})

routes.get('/tasks', getTasks)
routes.get('/task/:id', getTask)
routes.post('/tasks', saveTask)
routes.put('/task/:id', updateTask)
routes.patch('/task/:id', finishedTask)
routes.delete('/task/:id', removeTask)

export default routes
