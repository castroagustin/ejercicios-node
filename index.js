const { promises: fs } = require('fs')
const express = require('express');
const app = express()
const PORT = 8080;

app.engine('cte', async (filePath, options, callback) => {
    try {
        const content = await fs.readFile(filePath)
        const rendered = content.toString()
            .replace('^^title$$', '' + options.title + '')
            .replace('^^message$$', '' + options.message + '')
            .replace('^^author$$', '' + options.author + '')
            .replace('^^version$$', '' + options.version + '')
        return callback(null, rendered)
    } catch (err) {
        return callback(new Error(err))
    }
})

app.set('views', './views');
app.set('view engine', 'cte');


app.get('/cte1', (req, res) => {
    const data = {
        title: 'Motor de plantilla custom',
        message: 'plantilla1.cte',
        author: 'Agustin',
        version: 1.3
    }

    res.render('plantilla1', data);
})

// app.use(express.static('public'))

app.listen(PORT)