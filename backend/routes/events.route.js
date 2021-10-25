const express = require('express');
const EventsController = require('../controllers/events.controller');

const router = express.Router();

/**
 * @api {get} / Get All events
 * @apiName Events
 * @apiGroup Events
 *
 * @apiSuccess {json} Return events.
 */
router.get('/', EventsController.getAll);

/**
 * @api {get} /:id Get event by Id.
 * @apiName GetEventById
 * @apiGroup Events
 *
 * @apiParam {String} id The Id to get event.
 *
 * @apiSuccess {json} Return event.
 */
router.get('/:id', EventsController.getById);

/**
 * @api {post} / Add the new event.
 * @apiName AddEvent
 * @apiGroup Events
 *
 * @apiSuccess {json} Return event.
 */
router.post('/', EventsController.add);

/**
 * @api {delete} / Delete all events.
 * @apiName deleteEvent
 * @apiGroup Events
 *
 * @apiSuccess {json} Return result.
 */
router.delete('/', EventsController.deleteAll);

/**
 * @api {delete} /:id Delete event by id.
 * @apiName deleteEventById
 * @apiGroup Events
 *
 * @apiParam {String} id The Id to delete event.
 *
 * @apiSuccess {json} Return result.
 */
router.delete('/:id', EventsController.deleteById);

module.exports = router;
