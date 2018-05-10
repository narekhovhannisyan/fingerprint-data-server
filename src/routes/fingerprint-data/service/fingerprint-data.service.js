'use strict'

const Util = require('../../../util')
const successHandlerUtil = Util.SuccessHandler
const fingerprintDataUtil = Util.fingerprintData

module.exports = {
  registerWorkerTime: (req, res, next) => {
    const { fingerprintId } = req.body

    fingerprintDataUtil.getWorkerId(fingerprintId)
      .then(fingerprintDataUtil.decideStartEnd)
      .spread((record, isCreated) => {
        if (!isCreated && record.end_time === null) {
          record.end_time = new Date()

          return record.save()
        }
      })
      .then(successHandlerUtil.handleAdd(res))
      .catch(next)
  }
}
