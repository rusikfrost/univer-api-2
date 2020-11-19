const controller = require('../controllers/news')
const validate = require('../controllers/news.validate')
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
 * news routes
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
  // AuthController.checkAccess(4, 'news'),
  trimRequest.all,
  controller.getItems
)

/*
 * Create new item route
 */
router.post(
  '/',
  requireAuth,
  // AuthController.roleAuthorization(['admin']),
  AuthController.checkAccess(4, 'news'),
  trimRequest.all,
  validate.createItem,
  controller.createItem
)
/* 
router.post(
  '/:id',
  requireAuth,
  // AuthController.roleAuthorization(['admin']),
  AuthController.checkAccess(1, 'news'),
  trimRequest.all,
  validate.viewCounter,
  controller.viewCounter
) */

/*
 * Get item route
 */
router.get(
  '/:id',
  requireAuth,
  // AuthController.roleAuthorization(['student', 'lecturer', 'admin']),
  // AuthController.checkAccess(1, 'news'),
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
  // AuthController.roleAuthorization(['admin']),
  AuthController.checkAccess(2, 'news'),
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
  // AuthController.roleAuthorization(['admin']),
  AuthController.checkAccess(4, 'news'),
  trimRequest.all,
  validate.deleteItem,
  controller.deleteItem
)

module.exports = router
