'use strict'

const models = require('../../models')
const workersModel = models.workers
const timeTableModel = models.timeTable

/**
 * @param {number} fingerprintId - The fingerprint id to find worker.
 * @returns {Promise.<>}
 * @description Finds worker id by fingerprint id.
 */
const getWorkerId = (fingerprintId) => {
  const where = { fingerprint_id: fingerprintId }
  const attributes = ['id']
  const query = { where, attributes }

  return workersModel.find(query)
}

/**
 * @param {Object} worker - The worker db instance.
 * @returns {Promise.<>}
 * @description If there is one record with given `worker.id`
 */
const decideStartEnd = (worker) => {
  if (worker && worker.id) {
    const where = { worker_id: worker.id }
    const defaults = { start_time: new Date() }

    return timeTableModel.findOrCreate({ where, defaults })
  }

  return Promise.reject(new Error('There is no one with such fingerprint.'))
}

module.exports = {
  getWorkerId,
  decideStartEnd
}
