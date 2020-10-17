const controller = require('../controllers/accesses')
const validate = require('../controllers/accesses.validate')
const AuthController = require('../controllers/auth')
const express = require('express')
const router = express.Router()
require('../../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
  session: false
})
const trimRequest = require('trim-request')

/*
 * accesses routes
 */

/*
 * Get all items route
 */
router.get('/all', controller.getAllItems)

/*
 * Get items route
 */
router.get(
  '/',
  requireAuth,
  //AuthController.checkAccess(4, 'accesses'),
  trimRequest.all,
  controller.getItems
)

/*
 * Get item route
 */
router.get(
  '/:id',
  requireAuth,
  //AuthController.roleAuthorization(['student', 'lecturer', 'admin']),
  //AuthController.checkAccess(1, 'accesses'),
  trimRequest.all,
  validate.getItem,
  controller.getItem
)

/*
 * Update item route
 */
router.patch(
  '/:id',
  requireAuth,
  //AuthController.roleAuthorization(['admin']),
  AuthController.checkAccess(2, 'accesses'),
  trimRequest.all,
  validate.updateItem,
  controller.updateItem
)

/*
 * Delete item route
 */
router.delete(
  '/:id',
  requireAuth,
  //AuthController.roleAuthorization(['admin']),
  AuthController.checkAccess(4, 'accesses'),
  trimRequest.all,
  validate.deleteItem,
  controller.deleteItem
)

module.exports = router
