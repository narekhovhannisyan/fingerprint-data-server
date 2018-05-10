'use strict'

const bodyParser = require('body-parser')
const express = require('express')

const morgan = require('morgan')

const { PathNotFoundError } = require('./util').Errors

const healthApi = require('./routes/health/health.api')
const api = require('./routes')

const faviconHandler = require('./middleware/favicon.middleware').faviconHandler

const app = express()

/**
 * @description Middleware - setup a logger.
 */
app.use(morgan('dev'))

/**
 * @description Middleware - body parser:
 * 1. Parses the text as URL encoded data (limit 5 mb).
 * 2. Parses the text as JSON & exposes the resulting object on req.body (limit 5 mb).
 */
app.use(bodyParser.urlencoded({ limit: '5mb', extended: false }))
app.use(bodyParser.json({ limit: '5mb' }))

/**
 * @description Middleware - favicon handler:
 * Handles favicon request from browser.
 */
app.use(faviconHandler)

/**
 * @description Add health API (NO authorization, NO api prefix).
 */
app.use('/health', healthApi)

/**
 * @description Initialize APIs.
 */
app.use('/api/v1', api)

/**
 * @description Middleware - catch 404 and forward to error handler.
 */
app.use((req, res, next) => next(new PathNotFoundError('The specified resource path does not exist.')))

module.exports = app
