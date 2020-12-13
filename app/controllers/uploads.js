const model = require('../models/file')
const { matchedData } = require('express-validator')
const utils = require('../middleware/utils')
const db = require('../middleware/db')
const multer = require('multer')
/*********************
 * Private functions *
 *********************/
/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
exports.createItem = async (req, res) => {
    try {
      console.log(req.body)
      let file = req.files[0]
      req = req.body
      req.filename = file.filename
      req.path = file.path
      req.size = file.size
      console.log(req);
      const result = await db.createItem(req, model)
      res.status(201).json({ errors: null, result })
    } catch (error) {
      utils.handleError(res, error)
    }
  } 