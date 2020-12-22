const controller = require('../controllers/html')
    //const validate = require('../controllers/groups.validate')
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
    //requireAuth,
    //AuthController.checkAccess(1, 'groups'),
    // AuthController.roleAuthorization(['student', 'lecturer', 'admin']),
    trimRequest.all,
    controller.getItems
)

/*
 * Create new item route
 */
router.post(
    '/',
    //requireAuth,
    //AuthController.checkAccess(4, 'groups'),
    // AuthController.roleAuthorization(['admin']),
    trimRequest.all,
    //validate.createItem,
    controller.createItem
)

/*
 * Get item route
 */
router.get(
    '/:id',
    requireAuth,
    //AuthController.checkAccess(1, 'groups'),
    // AuthController.roleAuthorization(['student', 'lecturer', 'admin']),
    trimRequest.all,
    //validate.getItem,
    controller.getItem
)

/*
 * Update item route
 */
router.patch(
    '/:id',
    //requireAuth,
    //AuthController.checkAccess(2, 'groups'),
    // AuthController.roleAuthorization(['admin']),
    trimRequest.all,
    //validate.updateItem,
    controller.updateItem
)

/*
 * Delete item route
 */
router.delete(
    '/:id',
    //requireAuth,
    //AuthController.checkAccess(4, 'groups'),
    // AuthController.roleAuthorization(['admin']),
    trimRequest.all,
    //validate.deleteItem,
    controller.deleteItem
)

module.exports = router