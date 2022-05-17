const { response } = require('express')
const express = require('express')

const app = express()

app.get('/', (request, response) => {
  return response.json({ message: 'Welcome to the Jungle!' })
})

app.listen(3333)
