import {Router} from 'express';
import NaversController from './controllers/NaversController';
import ProjectsController from './controllers/ProjectsController';

const routes = Router();
//rotas da API
routes.get('/navers', NaversController.index);

routes.get('/navers/:id', NaversController.show);

routes.post('/navers', NaversController.create);

routes.get('/projects', ProjectsController.index);

routes.get('/projects/:id', ProjectsController.show);

routes.post('/projects', ProjectsController.create);

export default routes;