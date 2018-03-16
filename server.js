const express = require('express')
const hbs = require('hbs')
const fs = require('fs')

const port = process.env.PORT || 3000
let app = express()

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')

app.use((req, res, next) => {
  let now = new Date().toString()
  let log = `${now} ${req.method} ${req.url}`

  console.log(log);
  fs.appendFile('server.log', log, (err) => {
    if (err) {
      console.log('unable to connect');
    }
  })
  next()
})

app.use((req, res, next) => {
  res.render('maintenance.hbs')
})

app.use(express.static(__dirname + '/public'))

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
})
hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase()
})

app.get('/', (req, res) => {
  // res.send('<h1>Hi express</h1>')
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeText: 'hey guys, node is super cool'

  })
})

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
  })
})

app.get('/bad', (req, res) => {
  res.send({
    place: 'ryerson',
    errorMessage: 'doesnt work'
  })
})

app.listen(port, () => {
  console.log('server running on port ', port);
})
