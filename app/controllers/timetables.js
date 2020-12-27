const model = require('../models/timetable')
const { matchedData } = require('express-validator')
const utils = require('../middleware/utils')
const db = require('../middleware/db')
const dbfstream = require('dbfstreammemo');
/*********************
 * Private functions *
 *********************/

/**
 * Checks if a timetable already exists excluding itself
 * @param {string} id - id of item
 * @param {string} name - name of item
 */
const timetableExistsExcludingItself = async(id, name) => {
    return new Promise((resolve, reject) => {
        model.findOne({
                name,
                _id: {
                    $ne: id
                }
            },
            (err, item) => {
                utils.itemAlreadyExists(err, item, reject, 'TIMETABLE_ALREADY_EXISTS')
                resolve(false)
            }
        )
    })
}

/**
 * Checks if a timetable already exists in database
 * @param {string} name - name of item
 */
const timetableExists = async(name) => {
    return new Promise((resolve, reject) => {
        model.findOne({
                name
            },
            (err, item) => {
                utils.itemAlreadyExists(err, item, reject, 'TIMETABLE_ALREADY_EXISTS')
                resolve(false)
            }
        )
    })
}

/**
 * Gets all items from database
 */
const getAllItemsFromDB = async() => {
    return new Promise((resolve, reject) => {
        model.find({},
            '-updatedAt -createdAt', {
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
exports.getAllItems = async(req, res) => {
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
exports.getItems = async(req, res) => {
    try {
        const query = await db.checkQueryString(req.query)
        const result = await db.getItems(req, model, query)
        res.status(200).json({ errors: null, result })
    } catch (error) {
        utils.handleError(res, error)
    }
}
exports.getLastUpload = async(req, res) => {
    try {

        const result = await db.getItemByParams({ LOAD_ID: "1" }, model)
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
exports.getItem = async(req, res) => {
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
exports.updateItem = async(req, res) => {
    try {
        req = matchedData(req)
        const id = await utils.isIDGood(req.id)
        const doesTimetableExists = await timetableExistsExcludingItself(
            id,
            req.name
        )
        if (!doesTimetableExists) {
            const result = await db.updateItem(id, model, req)
            res.status(200).json({ errors: null, result })
        }
    } catch (error) {
        utils.handleError(res, error)
    }
}

/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
exports.createItem = async(req, res) => {
    try {
        req = matchedData(req)
        const doesTimetableExists = await timetableExists(req.name)
        if (!doesTimetableExists) {
            const result = await db.createItem(req, model)
            res.status(201).json({ errors: null, result })
        }
    } catch (error) {
        utils.handleError(res, error)
    }
}

/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
exports.createItemFromDBF = async(req, res) => {
    try {
        db.clearCollection(model)
        console.log(req.files)
        const dbf = dbfstream(`./${req.files[0].path}`, 'cp866');
        let a = []
        dbf.on('header', header => {}).on('data', (data) => {});
        dbf.on('data', (data) => {
            console.log(data);
            data.LOAD_ID = data['@numOfRecord']
            db.createItem(data, model).catch(err => console.log(err))
        });
        dbf.on('error', (err) => {
            console.log(err);
        });
        dbf.on('end', () => {
            console.log('stream end');
            //console.log(dbf);
        });


        //const result = await db.createItem(req, model)
        res.status(201).json({ errors: null, result: 'ok' })

    } catch (error) {
        utils.handleError(res, error)
    }
}

/**
 * Delete item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
exports.deleteItem = async(req, res) => {
    try {
        req = matchedData(req)
        const id = await utils.isIDGood(req.id)
        const result = await db.deleteItem(id, model)
        res.status(200).json({ errors: null, result })
    } catch (error) {
        utils.handleError(res, error)
    }
}

//console.log(data);
//db.createItem(data, model)
/*             let day = {
                GROUP: data.GROUP,
                DAY: data.DAY,
                LES: data.LES,
                AUD: data.AUD,
                WEEK: data.WEEK,
                SUBG: data.SUBG,
                POST: data.POST,
                NAME: data.NAME,
                SUBJECT: data.SUBJECT,
                SUBJ_TYPE: data.SUBJ_TYPE,
                DATE: data.DATE,
                CAFEDRA: data.CAFEDRA,
                THEME: data.THEME,
            }
            db.createItem(day, model)
            console.log(day); */