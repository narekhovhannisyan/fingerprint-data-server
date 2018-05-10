'use strict'

module.exports = {
  /**
   * @param req
   * @param res
   * @param next
   * @description Handle favicon request.
   */
  faviconHandler (req, res, next) {
    if (req && req.originalUrl && req.originalUrl.split('/').pop() === 'favicon.ico') {
      return res.sendStatus(204)
    }

    return next()
  }
}

