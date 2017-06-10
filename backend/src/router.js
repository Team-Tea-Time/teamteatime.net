import express from 'express';

import authorize from './middleware/authorize';

import AuthController from './controllers/AuthController';
import GitHubController from './controllers/GitHubController';
import MediaController from './controllers/MediaController';
import PostsController from './controllers/PostsController';
import ProjectCategoriesController from './controllers/ProjectCategoriesController';
import ProjectsController from './controllers/ProjectsController';
import UsersController from './controllers/UsersController';

let router = express.Router();

router.post('/auth', AuthController.auth);

router.get('/users', UsersController.list);
router.get('/users/:id', authorize, UsersController.get);

router.post('/media/signed-url', authorize, MediaController.getSignedURL);
router.delete('/media/:key', authorize, MediaController.delete);

router.get('/posts', PostsController.list);
router.get('/posts/:id', PostsController.get);
router.get('/posts/slug/:slug', PostsController.getBySlug);
router.get('/posts/tag/:tag', PostsController.listByTag);
router.post('/posts', authorize, PostsController.create);
router.put('/posts/:id', authorize, PostsController.update);
router.delete('/posts/:id', authorize, PostsController.delete);

router.get('/project-categories', ProjectCategoriesController.list);
router.get('/project-categories/:id', ProjectCategoriesController.get);
router.post('/project-categories', authorize, ProjectCategoriesController.create);
router.put('/project-categories/:id', authorize, ProjectCategoriesController.update);
router.delete('/project-categories/:id', authorize, ProjectCategoriesController.delete);

router.get('/projects', ProjectsController.list);
router.get('/projects/:id', ProjectsController.get);
router.get('/projects/slug/:slug', ProjectsController.getBySlug);
router.post('/projects', authorize, ProjectsController.create);
router.put('/projects/:id', authorize, ProjectsController.update);
router.delete('/projects/:id', authorize, ProjectsController.delete);

router.get('/github/:owner/:repo/branches', GitHubController.getBranches);
router.get('/github/:owner/:repo/tree/:sha', GitHubController.getTree);
router.get('/github/:owner/:repo/blob/:sha', GitHubController.getBlob);

export default router;
