const express = require('express')

const router = express.Router()

const persons = [
  {firstname : 'George', lastname: 'Abitbol', id: 1},
  {firstname : 'Peter', lastname: 'Steven', id: 2 },
  {firstname : 'Steven', lastname: 'Peter' , id: 3 }
]

router.get('/', (req,res) => {
  return res.status(200).send(persons)
})

router.get('/:id', (req, res) => {
  const person = persons.find(element => element.id === parseInt(req.params.id))
  return res.status(200).send(person)
})

module.exports = router