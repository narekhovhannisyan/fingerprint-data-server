'use strict'

const Sequelize = require('sequelize')

const config = require('../config/config')

/**
 * @property workers
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
  operatorsAliases,
  ssl: true
})

/**
 * @description Import models working with main DB.
 */
const MODELS_MAIN = [
  './workers.model'
]
MODELS_MAIN.forEach((modelPath) => {
  const model = sequelizeMain['import'](modelPath)
  db[model.name] = model
})

module.exports = db
