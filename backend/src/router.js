import express from 'express';

import authorize from './middleware/authorize';

import AuthController from './controllers/AuthController';
import UsersController from './controllers/UsersController';
import PostsController from './controllers/PostsController';

let router = express.Router();

router.post('/auth', AuthController.auth);
router.get('/users', UsersController.list);
router.get('/users/:id', authorize, UsersController.get);
router.get('/posts', PostsController.list);
router.get('/posts/:id', PostsController.get);
router.get('/posts/slug/:slug', PostsController.getBySlug);
router.get('/posts/tag/:tag', PostsController.listByTag);
router.put('/posts/:id', PostsController.update);
router.delete('/posts/:id', PostsController.delete);
router.post('/posts', authorize, PostsController.create);

export default router;
