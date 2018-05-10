'use strict'

const app = require('express')()

const fingerprintData = require('./fingerprint-data/fingerprint-data.api')

/**
 * @description Add required APIs.
 */
app.use('/fingerprint-data', fingerprintData)

module.exports = app
