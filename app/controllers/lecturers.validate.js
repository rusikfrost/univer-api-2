const { validationResult } = require('../middleware/utils')
const { check } = require('express-validator')

/**
 * Validates create new item request
 */
exports.createItem = [
  check('full_name').exists().withMessage('MISSING').not().isEmpty().withMessage('IS_EMPTY').trim(),
  check('email').exists().withMessage('MISSING').not().isEmpty().withMessage('IS_EMPTY').trim(),
  check('rank').exists().withMessage('MISSING').not().isEmpty().withMessage('IS_EMPTY').trim(),
  check('academic_degree').exists().withMessage('MISSING').not().isEmpty().withMessage('IS_EMPTY').trim(),
  check('academic_rank').exists().withMessage('MISSING').not().isEmpty().withMessage('IS_EMPTY').trim(),
  check('education').exists().withMessage('MISSING').not().isEmpty().withMessage('IS_EMPTY').trim(),
  check('qualification').exists().withMessage('MISSING').not().isEmpty().withMessage('IS_EMPTY').trim(),
  check('specialty').exists().withMessage('MISSING').not().isEmpty().withMessage('IS_EMPTY').trim(),
  check('trainings').exists().withMessage('MISSING').not().isEmpty().withMessage('IS_EMPTY').trim(),
  check('total_length_of_service').exists().withMessage('MISSING').not().isEmpty().withMessage('IS_EMPTY').trim(),
  check('length_work_of_speciality').exists().withMessage('MISSING').not().isEmpty().withMessage('IS_EMPTY').trim(),
  check('disciplines_taught').exists().withMessage('MISSING').not().isEmpty().withMessage('IS_EMPTY').trim(),
  check('scientific_interests').exists().withMessage('MISSING').not().isEmpty().withMessage('IS_EMPTY').trim(),
  check('photo').exists().withMessage('MISSING').not().isEmpty().withMessage('IS_EMPTY').trim(),
  (req, res, next) => {
    validationResult(req, res, next)
  }
]

/**
 * Validates update item request
 */
exports.updateItem = [
  check('id').exists().withMessage('MISSING').not().isEmpty().withMessage('IS_EMPTY').trim(),
  check('full_name').exists().withMessage('MISSING').not().isEmpty().withMessage('IS_EMPTY').trim(),
  check('email').exists().withMessage('MISSING').not().isEmpty().withMessage('IS_EMPTY').trim(),
  check('rank').exists().withMessage('MISSING').not().isEmpty().withMessage('IS_EMPTY').trim(),
  check('academic_degree').exists().withMessage('MISSING').not().isEmpty().withMessage('IS_EMPTY').trim(),
  check('academic_rank').exists().withMessage('MISSING').not().isEmpty().withMessage('IS_EMPTY').trim(),
  check('education').exists().withMessage('MISSING').not().isEmpty().withMessage('IS_EMPTY').trim(),
  check('qualification').exists().withMessage('MISSING').not().isEmpty().withMessage('IS_EMPTY').trim(),
  check('specialty').exists().withMessage('MISSING').not().isEmpty().withMessage('IS_EMPTY').trim(),
  check('trainings').exists().withMessage('MISSING').not().isEmpty().withMessage('IS_EMPTY').trim(),
  check('total_length_of_service').exists().withMessage('MISSING').not().isEmpty().withMessage('IS_EMPTY').trim(),
  check('length_work_of_speciality').exists().withMessage('MISSING').not().isEmpty().withMessage('IS_EMPTY').trim(),
  check('disciplines_taught').exists().withMessage('MISSING').not().isEmpty().withMessage('IS_EMPTY').trim(),
  check('scientific_interests').exists().withMessage('MISSING').not().isEmpty().withMessage('IS_EMPTY').trim(),
  check('photo').exists().withMessage('MISSING').not().isEmpty().withMessage('IS_EMPTY').trim(),
  (req, res, next) => {
    validationResult(req, res, next)
  }
]

/**
 * Validates get item request
 */
exports.getItem = [
  check('id')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  (req, res, next) => {
    validationResult(req, res, next)
  }
]

/**
 * Validates delete item request
 */
exports.deleteItem = [
  check('id')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  (req, res, next) => {
    validationResult(req, res, next)
  }
]
