const controller = require('../controllers/works')
const validate = require('../controllers/works.validate')
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
 * Cities routes
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
  AuthController.roleAuthorization(['admin']),
  trimRequest.all,
  controller.getItems
)

/*
 * Create new item route
 */
/*
router.post(
  '/',
  requireAuth,
  AuthController.roleAuthorization(['admin']),
  trimRequest.all,
  validate.createItem,
  controller.createItem
)
*/
router.post(
  '/forGroup/:group_id',
  requireAuth,
  AuthController.roleAuthorization(['admin']),
  trimRequest.all,
  // validate.createItemForGroup,
  controller.createItemForGroup
)

/*
 * Get item route
 */
router.get(
  '/:id',
  requireAuth,
  AuthController.roleAuthorization(['admin']),
  trimRequest.all,
  validate.getItem,
  controller.getItem
)

router.get(
  '/byUserID/:user_id',
  requireAuth,
  AuthController.roleAuthorization(['admin', 'lecturer', 'student']),
  trimRequest.all,
  // validate.getItem,
  controller.getUSersItems
)

/*
 * Update item route
 */
router.patch(
  '/:id',
  requireAuth,
  AuthController.roleAuthorization(['admin']),
  trimRequest.all,
  validate.updateItem,
  controller.updateItem
)

router.patch(
  '/sendRewiew/:id',
  requireAuth,
  AuthController.roleAuthorization(['admin', 'lecturer']),
  trimRequest.all,
  // validate.updateItem,
  controller.sendRewiew
)

router.patch(
  '/sendGrade/:id',
  requireAuth,
  AuthController.roleAuthorization(['admin', 'lecturer']),
  trimRequest.all,
  // validate.updateItem,
  controller.sendGrade
)

router.patch(
  '/sendWork/:id',
  requireAuth,
  AuthController.roleAuthorization(['admin', 'student']),
  trimRequest.all,
  // validate.updateItem,
  controller.sendWork
)

/*
 * Delete item route
 */
router.delete(
  '/:id',
  requireAuth,
  AuthController.roleAuthorization(['admin']),
  trimRequest.all,
  validate.deleteItem,
  controller.deleteItem
)

module.exports = router
