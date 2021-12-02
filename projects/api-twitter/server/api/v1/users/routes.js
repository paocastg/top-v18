const express = require('express');
const controller = require('./controller');
const tweetsRouter = require('../tweets/routes');

const router = express.Router();

/*
 * /api/tweets      GET    - Get All
 * /api/tweets      POST   - Create a new Tweet
 * /api/tweets/:id  GET    - Get a tweet
 * /api/tweets/:id  PUT    - Update a tweet
 * /api/tweets/:id  DELETE - Delete a tweet
 *
 */

router.route('/').get(controller.all).post(controller.create);

router.param('id', controller.id);

router
  .route('/:id')
  .get(controller.read)
  .put(controller.update)
  .patch(controller.update)
  .delete(controller.delete);

router.use('/:user/tweets', tweetsRouter);

module.exports = router;
