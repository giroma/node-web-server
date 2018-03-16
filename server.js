const express = require('express')

let app = express()

app.get('/', (req, res) => {
  // res.send('<h1>Hi express</h1>')
  res.send({
    name: 'arielis',
    likes: ['biking', 'chess', 'poker' ]
  })
})

app.get('/about', (req, res) => {
  res.send('about page')
})

app.get('/bad', (req, res) => {
  res.send({
    place: 'ryerson',
    errorMessage: 'doesnt work'
  })
})

app.listen(3000)
