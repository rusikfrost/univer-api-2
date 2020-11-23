const model = require('../models/access')
const { matchedData } = require('express-validator')
const utils = require('../middleware/utils')
const db = require('../middleware/db')

/*********************
 * Private functions *
 *********************/

/**
 * Checks if a accesses already exists excluding itself
 * @param {string} id - id of item
 * @param {string} name - name of item
 */
const accessesExistsExcludingItself = async (id, name) => {
  return new Promise((resolve, reject) => {
    model.findOne(
      {
        name,
        _id: {
          $ne: id
        }
      },
      (err, item) => {
        utils.itemAlreadyExists(err, item, reject, 'ROLES_ALREADY_EXISTS')
        resolve(false)
      }
    )
  })
}

/**
 * Checks if a accesses already exists in database
 * @param {string} name - name of item
 */
const accessesExists = async (name) => {
  return new Promise((resolve, reject) => {
    model.findOne(
      {
        name
      },
      (err, item) => {
        utils.itemAlreadyExists(err, item, reject, 'ROLES_ALREADY_EXISTS')
        resolve(false)
      }
    )
  })
}

/**
 * Gets all items from database
 */
const getAllItemsFromDB = async () => {
  return new Promise((resolve, reject) => {
    model.find(
      {},
      '-updatedAt -createdAt',
      {
        sort: {
          name: 1
        }
      },
      (err, items) => {
        if (err) {
          reject(utils.buildErrObject(422, err.message))
        }
        resolve(items)
      }
    )
  })
}

/********************
 * Public functions *
 ********************/

/**
 * Get all items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
exports.getAllItems = async (req, res) => {
  try {
    const result = await getAllItemsFromDB()
    res.status(200).json({ errors: null, result })
  } catch (error) {
    utils.handleError(res, error)
  }
}

/**
 * Get items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
exports.getItems = async (req, res) => {
  try {
    const query = await db.checkQueryString(req.query)
    const result = await db.getItems(req, model, query)
    res.status(200).json({ errors: null, result })
  } catch (error) {
    utils.handleError(res, error)
  }
}

/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
exports.getItem = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await utils.isIDGood(req.id)
    const result = await db.getItem(id, model)
    res.status(200).json({ errors: null, result })
  } catch (error) {
    utils.handleError(res, error)
  }
}

/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
exports.getItemByUserId = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await utils.isIDGood(req.id)
    const result = await db.getItemByParams({ user_id: id }, model)
    res.status(200).json({ errors: null, result })
  } catch (error) {
    utils.handleError(res, error)
  }
}

/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
exports.updateItem = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await utils.isIDGood(req.id)
    // const doesAccessesExists = await accessesExistsExcludingItself(id, req.name)
    // if (!doesAccessesExists) {
    // let user_mask = await db.getItemByParams({user_id: id}, modelAccess)
    const result = await db.updateItem(id, model, { $set: req })
    res.status(200).json({ errors: null, result })
    // }
  } catch (error) {
    utils.handleError(res, error)
  }
}

/**
 * Delete item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
exports.deleteItem = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await utils.isIDGood(req.id)
    const result = await db.deleteItem(id, model)
    res.status(200).json({ errors: null, result })
  } catch (error) {
    utils.handleError(res, error)
  }
}
