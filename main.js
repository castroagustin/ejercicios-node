const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('hbs', exphbs.engine({
    extname: '.hbs',
    defaultLayout: 'index.hbs'
}))

app.set('view engine', 'hbs');
app.set('views', './views');
app.get('/', (req, res) => {
    res.render('datos.hbs', {
        name: 'Agustin',
        surname: 'Castro',
        age: 18,
        email: 'agus.castro915@gmail.com',
        phone: 3815555555
    })
})

app.use(express.static('public'))
app.listen(8080)