const express = require('express')
const morgan = require('morgan')
const models = require('./models/index')
const path = require('path')
const app = express()
const main = require('./views/main')
const PORT = 3000
const wikiRouter = require('./routes/wiki')
const userRouter = require('./routes/user')

app.use(morgan('dev')) // sets up morgan
app.use('/public', express.static(path.join(__dirname, 'public'))) // sets up out static/public folder

// what exactly does db.authenticate do ?? tests the connection
models.db.authenticate().then(() => {
  console.log('connected to the database')
})

//set up our body parser
app.use(express.urlencoded({
  extended: false
}))

//Sets up routes for the wiki and users path(?)
app.use('/wiki', wikiRouter)
app.use('/user', userRouter)







// set a main route
app.get('/', (req, res, next) => {
  res.redirect('/wiki')
})

// setting the initialize for the DB for ORM??
const init = async () => {
  // await models.User.sync({
  //   force: true
  // })
  // await models.Page.sync({
  //   force: true
  // })
  await models.db.sync({
    force: true
  })
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`)
  })
}

init()
