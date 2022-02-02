const express = require('express');

const app = express();

app.set('views', './views');

// Plantillas con .pug
/*
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('hello.pug', {
        message: 'Hola pug'
    })
})

app.get('/datos', (req, res) => {
    res.render('medidor', req.query)
})*/

// Plantillas con .ejs
app.set('view engine', 'ejs');

app.get('/datos', (req, res) => {
    res.render('pages/index', req.query)
})

app.use(express.static('public'))
app.listen(8080)