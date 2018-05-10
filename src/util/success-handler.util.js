'use strict'

const HTTP_CODE_CONSTANTS = {
  SUCCESS_204: { STATUS: 204 }
}

/**
 * @private
 * @param res
 * @param code
 * @description Sends response with given HTTP code constant.
 */
function _sendResponse (res, code) {
  const response = {
    status: code.STATUS
  }

  res.status(response.status).json(response)
}

const SuccessHandler = {}

/**
 * @param res
 * @description Handle `add` method requests.
 */
SuccessHandler.handleAdd = (res) => _sendResponse(res, HTTP_CODE_CONSTANTS.SUCCESS_204)

module.exports = SuccessHandler
