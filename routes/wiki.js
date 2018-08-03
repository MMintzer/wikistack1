const express = require('express')
const router = express.Router()
const {
  addPage,
  main
} = require('../views')

router.get('/', async (req, res, next) => {
  try {
    res.send(main())
  } catch (err) {
    console.log("ERROR IN GET/", err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    res.send('GOT TO POST /WIKI')
  } catch (err) {
    console.log("ERROR IN POST/", err)
  }
})

router.get('/add', async (req, res, next) => {
  try {
    res.send(addPage())
  } catch (err) {
    console.log("ERROR IN ADD/", err)
  }
})

module.exports = router
