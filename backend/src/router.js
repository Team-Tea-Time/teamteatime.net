import express from 'express';

import UsersController from './controllers/UsersController';

let router = express.Router();

router.get('/users/:id', UsersController.get);

export default router;
