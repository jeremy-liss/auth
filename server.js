const express = require('express')
const hbs = require('express-handlebars')
const flash = require('connect-flash')
const path = require('path')

const session = require('./lib/session')

const indexRoutes = require('./routes')

const app = express()

app.engine('hbs', hbs())
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.use(session)
app.use(flash())

app.use('/', indexRoutes)

module.exports = app
