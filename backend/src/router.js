import express from 'express';

import authorize from './middleware/authorize';

import AuthController from './controllers/AuthController';
import UsersController from './controllers/UsersController';

let router = express.Router();

router.post('/auth', AuthController.auth);
router.get('/users', UsersController.list);
router.get('/users/:id', authorize, UsersController.get);

export default router;
