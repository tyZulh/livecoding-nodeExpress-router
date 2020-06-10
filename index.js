const express = require('express')

const app = express()
const port = 4000 
const routes = require('./routes/index')

app.use('/person', routes.person)
app.use('/city', routes.City)

app.get('/', (req, res) => {
  return res.status(200).send('Stay a while and listen ...')
})

app.listen(port, err => {
  if(err) throw new Error('something bad happened ...')
  console.log(`Server is listening on port ${port}`)
})
