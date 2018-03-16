const express = require('express')
const hbs = require('hbs')

let app = express()

app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  // res.send('<h1>Hi express</h1>')
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    currentYear: new Date().getFullYear(),
    welcomeText: 'hey guys, node is super cool'

  })
})

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  })
})

app.get('/bad', (req, res) => {
  res.send({
    place: 'ryerson',
    errorMessage: 'doesnt work'
  })
})

app.listen(3000, () => {
  console.log('server running on 3000');
})
