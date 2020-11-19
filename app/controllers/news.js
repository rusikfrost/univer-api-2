const model = require('../models/news')
const { matchedData } = require('express-validator')
const utils = require('../middleware/utils')
const db = require('../middleware/db')

/*********************
 * Private functions *
 *********************/

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
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
exports.updateItem = async (req, res) => {
  try {
    let files = [];
    req.files.forEach(element => {
     files.push({
       filename: element.filename,
       path: element.path,
       size: element.size
     })
     console.log(element);
   }); 
    req = matchedData(req)
    const id = await utils.isIDGood(req.id)
    req.files = files
    const result = await db.updateItem(id, model, req)
    res.status(200).json({ errors: null, result })
  } catch (error) {
    utils.handleError(res, error)
  }
}

/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
exports.createItem = async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.files);
    console.log(req.file);
    console.log('this ---------------- ');
    let files = [];
    req.files.forEach(element => {
      files.push({
        filename: element.filename,
        path: element.path,
        size: element.size
      })
      console.log(element);
    });
    req = matchedData(req)
    req.views = 0;
    req.images = files
    const result = await db.createItem(req, model)
    res.status(201).json({ errors: null, result })
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
