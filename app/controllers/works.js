const model = require('../models/work')
const userModel = require('../models/user')
const { matchedData } = require('express-validator')
const utils = require('../middleware/utils')
const db = require('../middleware/db')

/*********************
 * Private functions *
 *********************/

/**
 * Checks if a city already exists excluding itself
 * @param {string} id - id of item
 * @param {string} name - name of item
 */
const cityExistsExcludingItself = async (id, name) => {
  return new Promise((resolve, reject) => {
    model.findOne(
      {
        name,
        _id: {
          $ne: id
        }
      },
      (err, item) => {
        utils.itemAlreadyExists(err, item, reject, 'CITY_ALREADY_EXISTS')
        resolve(false)
      }
    )
  })
}

/**
 * Checks if a city already exists in database
 * @param {string} name - name of item
 */
const cityExists = async (name) => {
  return new Promise((resolve, reject) => {
    model.findOne(
      {
        name
      },
      (err, item) => {
        utils.itemAlreadyExists(err, item, reject, 'CITY_ALREADY_EXISTS')
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
    res.status(200).json(await getAllItemsFromDB())
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
    res.status(200).json(await db.getItems(req, model, query))
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
    res.status(200).json(await db.getItem(id, model))
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
    const doesCityExists = await cityExistsExcludingItself(id, req.name)
    if (!doesCityExists) {
      res.status(200).json(await db.updateItem(id, model, req))
    }
  } catch (error) {
    utils.handleError(res, error)
  }
}

exports.getUSersItems = async (req, res) => {
  try {
    const id = req.params.user_id
    const works = await db.getItemByParams({ user_id: id }, model)

    res.status(200).json(works)
  } catch (error) {
    utils.handleError(res, error)
  }
}

exports.sendWork = async (req, res) => {
  try {
    const id = req.params.id
    req = await getReq(req)

    const work = {
      // work_name: req.work_name,
      // user_id: users[i]._id,
      // lecturer_id: req.lecturer_id,
      // path: '',
      // type: req.type,
      status: 'Ожидает проверки',
      // grade: '',
      // grade_date: 0,
      // discipline: req.discipline,
      upload_date: Math.floor(Date.now() / 1000)
      // review_description: '',
      // review_path: '',
      // review_date: 0
    }

    res.status(200).json(await db.updateItem(id, model, { $set: work }))
  } catch (error) {
    utils.handleError(res, error)
  }
}

exports.sendGrade = async (req, res) => {
  try {
    const id = req.params.id
    req = await getReq(req)

    const work = {
      // work_name: req.work_name,
      // user_id: users[i]._id,
      // lecturer_id: req.lecturer_id,
      // path: '',
      // type: req.type,
      status: req.status,
      grade: req.grade,
      grade_date: Math.floor(Date.now() / 1000)
      // discipline: req.discipline,
      // upload_date: Math.floor(Date.now() / 1000),
      // review_description: '',
      // review_path: '',
      // review_date: 0
    }

    res.status(200).json(await db.updateItem(id, model, { $set: work }))
  } catch (error) {
    utils.handleError(res, error)
  }
}

exports.sendRewiew = async (req, res) => {
  try {
    const id = req.params.id
    req = await getReq(req)

    const work = {
      // work_name: req.work_name,
      // user_id: users[i]._id,
      // lecturer_id: req.lecturer_id,
      // path: '',
      // type: req.type,
      // status: req.status,
      // grade: req.grade,
      // grade_date: Math.floor(Date.now() / 1000),
      // discipline: req.discipline,
      // upload_date: 0,
      review_description: req.review_description,
      // review_path: '',
      review_date: Math.floor(Date.now() / 1000)
    }

    res.status(200).json(await db.updateItem(id, model, { $set: work }))
  } catch (error) {
    utils.handleError(res, error)
  }
}

/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
/*
 group_id - id группы
 work_name - название работы
 lecturer_id - id преподавателя
 type - тип работы
 discipline - дисциплина
 */
const getReq = async (req) => {
  return req.query.length === 0 ? req.body : req.query
}

exports.createItemForGroup = async (req, res) => {
  try {
    const id = req.params.group_id
    req = await getReq(req)

    const users = await db.getItemByParams({ group_id: id }, userModel)
    const results = []
    for (let i = 0; i < users.length; i++) {
      const work = {
        work_name: req.work_name,
        user_id: users[i]._id,
        lecturer_id: req.lecturer_id,
        // path: '',
        type: req.type,
        status: 'Ожидает загрузки работы',
        grade: '',
        grade_date: 0,
        discipline: req.discipline,
        upload_date: 0,
        review_description: '',
        // review_path: '',
        review_date: 0
      }

      results.push(await db.createItem(work, model))
    }

    res.status(201).json(results)
  } catch (error) {
    utils.handleError(res, error)
  }
}
/*
work_name
user_id
lecturer_id
path
type
status
grade
grade_date
discipline
upload_date
review_description
review_path
review_date
*/
/**
 * Delete item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
exports.deleteItem = async (req, res) => {
  try {
    req = matchedData(req)
    const id = await utils.isIDGood(req.id)
    res.status(200).json(await db.deleteItem(id, model))
  } catch (error) {
    utils.handleError(res, error)
  }
}
