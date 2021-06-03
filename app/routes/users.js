const controller = require('../controllers/users')
const validate = require('../controllers/users.validate')
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
 * Users routes
 */

/*
 * Get items route
 */
router.get(
  '/',
  requireAuth,
  // AuthController.roleAuthorization(['admin']),
  AuthController.checkAccess(1, 'users'),
  trimRequest.all,
  controller.getItems
)

/*
 * Create new item route
 */
router.post(
  '/',
  requireAuth,
  AuthController.checkAccess(4, 'users'),
  // AuthController.roleAuthorization(['admin']),
  trimRequest.all,
  validate.createItem,
  controller.createItem
)

/*
 * Get item route
 */
router.get(
  '/role/:role',
  requireAuth,
  AuthController.checkAccess(1, 'users'),
  // AuthController.roleAuthorization(['admin']),
  trimRequest.all,
  controller.getItemByRole
)

/*
 * Get item route
 */
router.get(
  '/:id',
  requireAuth,
  AuthController.checkAccess(1, 'users'),
  // AuthController.roleAuthorization(['admin']),
  trimRequest.all,
  validate.getItem,
  controller.getItem
)

/*
 * Update item route
 */
router.patch(
  '/:id/group',
  requireAuth,
  AuthController.checkAccess(1, 'users'),
  // AuthController.roleAuthorization(['admin']),
  trimRequest.all,
  validate.updateItemGroup,
  controller.updateItemGroup
)

/*
 * Update item route
 */
router.patch(
  '/:id/notifications/on',
  requireAuth,
  AuthController.checkAccess(1, 'users'),
  // AuthController.roleAuthorization(['admin']),
  trimRequest.all,
  controller.addNotificationToken
)

/*
 * Update item route
 */
router.patch(
  '/:id/notifications/off',
  requireAuth,
  AuthController.checkAccess(1, 'users'),
  // AuthController.roleAuthorization(['admin']),
  trimRequest.all,
  controller.deleteNotificationToken
)

/*
 * Update item route
 */
router.patch(
  '/:id/role',
  requireAuth,
  AuthController.checkAccess(1, 'users'),
  // AuthController.roleAuthorization(['admin']),
  trimRequest.all,
  validate.updateItemRole,
  controller.updateItemRole
)
/*
 * Update item route
 */
router.patch(
  '/:id/phone',
  requireAuth,
  AuthController.checkAccess(1, 'users'),
  // AuthController.roleAuthorization(['admin']),
  trimRequest.all,
  validate.updateItemPhone,
  controller.updateItemPhone
)

/*
 * Update item route
 */
router.patch(
  '/:id',
  requireAuth,
  AuthController.checkAccess(2, 'users'),
  // AuthController.roleAuthorization(['admin']),
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
  AuthController.checkAccess(4, 'users'),
  // AuthController.roleAuthorization(['admin']),
  trimRequest.all,
  validate.deleteItem,
  controller.deleteItem
)

module.exports = router
