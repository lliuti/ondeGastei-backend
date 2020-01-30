import { Router } from 'express';

import ExpenseController from './app/controllers/ExpenseController';

const routes = new Router();

routes.get('/expenses', ExpenseController.index);
routes.post('/expenses', ExpenseController.store);

export default routes;