const express = require('express')

const router =express.Router()

const cities =[
  {name: 'Paris', id: 1},
  {name: 'Wuhan', id: 2}
]

router.get('/', (req, res) =>{
  return res.status(200).send(cities)
})

router.get('/:id', (req, res) => {
  const city = cities.find(element => element.id === parseInt(req.params.id))
  return res.status(200).send(city)
})

router.put('/:id', (req, res)=>{
  // some code to update a city
  return res.status(200).send()
})

module.exports = router