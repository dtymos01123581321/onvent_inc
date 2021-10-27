const express = require('express');
const UsersController = require('../controllers/users.controller');
const AuthController = require('../controllers/auth.controller');
const auth = require('./middlewares/auth');

const router = express.Router();

router.post('/login', AuthController.login);

/**
 * @api {get} / Get All users
 * @apiName GetUsers
 * @apiGroup Users
 *
 * @apiSuccess {json} Return users.
 */
router.get('/', auth,  UsersController.getAll);

/**
 * @api {get} /:id Get user by Id.
 * @apiName GetUserById
 * @apiGroup Users
 *
 * @apiParam {String} id The Id to get user.
 *
 * @apiSuccess {json} Return user.
 */
router.get('/:id', UsersController.getById);

/**
 * @api {post} / Add the new user.
 * @apiName AddUser
 * @apiGroup Users
 *
 * @apiSuccess {json} Return user.
 */
router.post('/', UsersController.add);

/**
 * @api {delete} / Delete all users.
 * @apiName deleteUser
 * @apiGroup Users
 *
 * @apiSuccess {json} Return result.
 */
router.delete('/', UsersController.deleteAll);

/**
 * @api {delete} /:id Delete user by id.
 * @apiName deleteUserById
 * @apiGroup Users
 *
 * @apiParam {String} id The Id to delete user.
 *
 * @apiSuccess {json} Return result.
 */
router.delete('/:id', UsersController.deleteById);

module.exports = router;
