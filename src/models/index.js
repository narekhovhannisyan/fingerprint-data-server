'use strict'

const config = require('../config/config')

/**
 * @property test
 */
const db = {}

/**
 * @description Initialize pg and pg models.
 */
const Op = Sequelize.Op
const operatorsAliases = {
  $eq: Op.eq,
  $ne: Op.ne,
  $gte: Op.gte,
  $gt: Op.gt,
  $lte: Op.lte,
  $lt: Op.lt,
  $not: Op.not,
  $in: Op.in,
  $notIn: Op.notIn,
  $and: Op.and,
  $or: Op.or
}

const sequelizeMain = new Sequelize(config.PG.CONNECTION_STRING_MAIN, {
  logging: false,
  operatorsAliases
})

/**
 * @description Import models working with main DB.
 */
const MODELS_MAIN = []

MODELS_MAIN.forEach((modelPath) => {
  const model = sequelizeMain['import'](modelPath)
  db[model.name] = model
})

module.exports = db
