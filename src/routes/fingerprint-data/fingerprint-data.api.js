'use strict'

const router = require('express').Router()

const fingerprintDataService = require('./service/fingerprint-data.service')

router.post('/', fingerprintDataService.registerWorkerTime)

module.exports = router
