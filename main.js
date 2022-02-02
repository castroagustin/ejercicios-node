const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs');
app.set('views', './views');

const historialArr = []

app.get('/', (req, res) => {
    res.render('pages/index', { historialArr })
})
app.post('/personas', (req, res) => {
    historialArr.push(req.body)
    res.redirect('/')
})

app.use(express.static('public'))
app.listen(8080)